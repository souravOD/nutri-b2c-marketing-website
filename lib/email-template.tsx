// lib/email-template.tsx
// Branded Nutri green email template for free trial activation

interface TrialEmailProps {
  firstName: string;
  lastName: string;
  activationUrl: string;
}

export function generateTrialEmailHtml({
  firstName,
  activationUrl,
}: TrialEmailProps): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activate Your Nutri Free Trial</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f3ee;font-family:Inter,Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#416600,#538100);padding:32px 40px;text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#9c3;border-radius:10px;padding:8px 12px;margin-right:10px;">
                    <span style="color:#1a3c34;font-weight:900;font-size:18px;">N</span>
                  </td>
                  <td style="padding-left:12px;">
                    <span style="color:#ffffff;font-weight:800;font-size:24px;letter-spacing:-0.5px;">Nutri</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px 24px;">
              <h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#1a3c34;line-height:1.3;">
                Welcome to Nutri, ${firstName}! 🌿
              </h1>
              <p style="margin:0 0 24px;font-size:16px;color:#475569;line-height:1.6;">
                You're one step away from starting your family's journey to better nutrition. 
                Click the button below to activate your free trial and begin exploring personalized 
                meal planning powered by AI.
              </p>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="${activationUrl}" target="_blank" 
                       style="display:inline-block;background:linear-gradient(135deg,#416600,#538100);color:#ffffff;font-weight:700;font-size:16px;text-decoration:none;padding:16px 48px;border-radius:9999px;box-shadow:0 4px 14px rgba(83,129,0,0.3);">
                      Activate Your Free Trial →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What's Included -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;border-radius:16px;padding:24px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#1a3c34;text-transform:uppercase;letter-spacing:1px;">
                      Your free trial includes
                    </p>
                    <p style="margin:0 0 8px;font-size:14px;color:#475569;line-height:1.6;">✓ Personalized meal plans for your whole family</p>
                    <p style="margin:0 0 8px;font-size:14px;color:#475569;line-height:1.6;">✓ AI-powered nutrition analysis</p>
                    <p style="margin:0 0 8px;font-size:14px;color:#475569;line-height:1.6;">✓ Smart grocery lists</p>
                    <p style="margin:0;font-size:14px;color:#475569;line-height:1.6;">✓ Health-aware recipe recommendations</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Trust Footer -->
          <tr>
            <td style="padding:0 40px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid #e2e8f0;padding-top:24px;">
                    <p style="margin:0 0 4px;font-size:12px;color:#94a3b8;line-height:1.5;">
                      🔒 Your data is encrypted and stored according to medical-grade security standards. 
                      We never sell your personal information.
                    </p>
                    <p style="margin:8px 0 0;font-size:12px;color:#94a3b8;">
                      If you didn't request this email, you can safely ignore it.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Bottom Bar -->
          <tr>
            <td style="background-color:#1a3c34;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © 2026 Odyssey Inc. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
