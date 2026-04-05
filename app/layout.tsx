import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nutri — The Family Nutrition App",
    template: "%s | Nutri",
  },
  description:
    "The only nutrition app your family will actually use. Smart meal planning, allergy tracking, and automatic grocery lists for families.",
  keywords: [
    "nutrition app",
    "meal planning",
    "family nutrition",
    "grocery list",
    "allergy tracking",
  ],
  openGraph: {
    title: "Nutri — The Family Nutrition App",
    description: "The only nutrition app your family will actually use. Smart meal planning, allergy tracking, and automatic grocery lists for families.",
    url: "https://nutri.app",
    siteName: "Nutri",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nutri — Family Nutrition App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutri — The Family Nutrition App",
    description: "The only nutrition app your family will actually use. Smart meal planning, allergy tracking, and automatic grocery lists for families.",
    images: ["/og-image.png"],
    creator: "@nutriapp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
