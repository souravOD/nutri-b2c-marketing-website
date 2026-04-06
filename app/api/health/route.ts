// app/api/health/route.ts
// Lightweight health check endpoint for Coolify / Traefik readiness probes.
// Returns 200 OK when the Next.js server is alive and handling requests.

export const runtime = "edge"; // fastest possible response — no cold start

export async function GET() {
  return Response.json(
    { status: "ok", timestamp: new Date().toISOString() },
    { status: 200 }
  );
}
