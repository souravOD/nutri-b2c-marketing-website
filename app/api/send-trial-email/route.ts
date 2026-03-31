// app/api/send-trial-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-server";
import { generateTrialEmailHtml } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const b2cAppUrl = process.env.NEXT_PUBLIC_B2C_APP_URL || "http://localhost:3000";

// Rate limit: max 5 resends, 60s cooldown
const MAX_RESENDS = 5;
const COOLDOWN_MS = 60_000;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, forceResend, userTimezone } = body;

    // ── Validate ──
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const trimmedFirst = firstName.trim();
    const trimmedLast = lastName.trim();
    const trimmedEmail = email.trim().toLowerCase();

    // ── Check existing lead & rate limit ──
    const { data: existingLead } = await supabaseAdmin
      .from("b2c_marketing_trial_leads")
      .select("id, email_resend_count, last_resend_at, status")
      .eq("email", trimmedEmail)
      .single();

    if (existingLead) {
      // Check resend limit
      if (existingLead.email_resend_count >= MAX_RESENDS) {
        return NextResponse.json(
          { error: "Maximum email resend limit reached. Please check your spam folder or contact support." },
          { status: 429 }
        );
      }

      // Check cooldown (60 seconds)
      if (existingLead.last_resend_at) {
        const lastSent = new Date(existingLead.last_resend_at).getTime();
        const elapsed = Date.now() - lastSent;
        if (elapsed < COOLDOWN_MS) {
          const waitSec = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
          return NextResponse.json(
            { error: `Please wait ${waitSec} seconds before resending.` },
            { status: 429 }
          );
        }
      }

      // Check if user confirmed resend
      if (!forceResend) {
        return NextResponse.json(
          { 
            requiresConfirmation: true, 
            error: "We previously sent an activation link to this email. Would you like us to generate a new one?" 
          },
          { status: 409 }
        );
      }
    }

    // ── Build activation URL ──
    const params = new URLSearchParams({
      firstName: trimmedFirst,
      lastName: trimmedLast,
      email: trimmedEmail,
      ref: "marketing-trial",
    });
    const activationUrl = `${b2cAppUrl}/register?${params.toString()}`;

    // ── Send email via Resend ──
    const { error: resendError } = await resend.emails.send({
      from: `Nutri <${fromEmail}>`,
      to: [trimmedEmail],
      subject: "Activate Your Nutri Free Trial 🌿",
      html: generateTrialEmailHtml({
        firstName: trimmedFirst,
        lastName: trimmedLast,
        activationUrl,
      }),
    });

    if (resendError) {
      console.error("[send-trial-email] Resend error:", JSON.stringify(resendError));
      return NextResponse.json(
        { error: `Email delivery failed: ${resendError.message || JSON.stringify(resendError)}` },
        { status: 500 }
      );
    }

    // ── Upsert lead in Supabase ──
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const ua = req.headers.get("user-agent") || "unknown";

    if (existingLead) {
      // Update existing lead
      await supabaseAdmin
        .from("b2c_marketing_trial_leads")
        .update({
          first_name: trimmedFirst,
          last_name: trimmedLast,
          status: "email_sent",
          email_resend_count: existingLead.email_resend_count + 1,
          last_resend_at: new Date().toISOString(),
          ip_address: ip,
          user_agent: ua,
          user_timezone: userTimezone || null,
        })
        .eq("id", existingLead.id);
    } else {
      // Insert new lead
      await supabaseAdmin.from("b2c_marketing_trial_leads").insert({
        first_name: trimmedFirst,
        last_name: trimmedLast,
        email: trimmedEmail,
        source: "marketing-website",
        status: "email_sent",
        agreed_terms: true,
        email_resend_count: 1,
        last_resend_at: new Date().toISOString(),
        ip_address: ip,
        user_agent: ua,
        user_timezone: userTimezone || null,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-trial-email] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
