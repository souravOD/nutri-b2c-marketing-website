# ============================================================
#  nutri-marketing — Production Dockerfile for Coolify
#  Next.js 16 · React 19 · Standalone Output · Alpine
# ============================================================
#  3-stage multi-stage build:
#    1. deps    → deterministic npm ci
#    2. builder → next build (standalone)
#    3. runner  → minimal production image (~150 MB)
# ============================================================

# ── Stage 1: Install dependencies ────────────────────────────
FROM node:20-alpine AS deps

# libc6-compat required for Node.js native addons on Alpine (musl)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy ONLY dependency manifests first — maximizes Docker layer cache.
# This layer is rebuilt ONLY when package.json or lockfile changes.
COPY package.json package-lock.json ./

# npm ci = deterministic, reproducible install from lockfile
RUN npm ci --ignore-scripts

# ── Stage 2: Build the application ──────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Bring in installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# ┌─────────────────────────────────────────────────────────┐
# │  NEXT_PUBLIC_* vars are baked into client JS at build   │
# │  time. Inject via Coolify "Build Arguments" panel.      │
# │                                                         │
# │  In Coolify dashboard → Build Arguments:                │
# │    NEXT_PUBLIC_B2C_APP_URL = https://app.nutrismarts.ai │
# └─────────────────────────────────────────────────────────┘
ARG NEXT_PUBLIC_B2C_APP_URL=https://app.nutrismarts.ai
ENV NEXT_PUBLIC_B2C_APP_URL=${NEXT_PUBLIC_B2C_APP_URL}

# Disable Next.js anonymous telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the standalone production bundle
RUN npm run build

# ── Stage 3: Production runner ───────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Production mode
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Use port 4000 (3000, 5000, 8000 are occupied on the host)
ENV PORT=4000
ENV HOSTNAME="0.0.0.0"

# Security: run as non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Install curl for Docker HEALTHCHECK probe
RUN apk add --no-cache curl

# Copy public assets (static files served by Next.js)
COPY --from=builder /app/public ./public

# Copy the standalone server + traced node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy pre-rendered static assets (.next/static → immutable cache)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose the application port
EXPOSE 4000

# ┌─────────────────────────────────────────────────────────┐
# │  HEALTHCHECK — Coolify/Traefik readiness probe          │
# │  Pings /api/health every 30s. If 3 consecutive fails,  │
# │  container is marked unhealthy → Coolify restarts it.   │
# │  start-period gives the app 10s to boot before checks.  │
# └─────────────────────────────────────────────────────────┘
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:4000/api/health || exit 1

# Start the standalone Next.js server
CMD ["node", "server.js"]
