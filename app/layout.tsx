import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "P&R Workforce LLC | UX and SEO Exploration",
    template: "%s | P&R Workforce LLC",
  },

  description:
    "UX and SEO exploration of a skilled trades staffing company serving Goldsboro, Raleigh, Wilmington, and surrounding North Carolina areas. Focused on clear structure, search visibility, and user experience.",

  keywords: [
    "UX and SEO exploration",
    "skilled trades staffing North Carolina",
    "staffing company Goldsboro NC",
    "staffing company Raleigh NC",
    "staffing company Wilmington NC",
    "temporary staffing North Carolina",
    "direct hire recruiting North Carolina",
    "electrical staffing North Carolina",
    "HVAC staffing North Carolina",
    "plumbing staffing North Carolina",
    "drywall staffing North Carolina",
    "flooring staffing North Carolina",
    "service areas staffing company",
    "staffing website UX",
    "staffing website SEO",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "P&R Workforce LLC | UX and SEO Exploration",
    description:
      "UX and SEO exploration of a skilled trades staffing company serving Goldsboro, Raleigh, Wilmington, and surrounding North Carolina areas.",
    url: SITE_URL,
    siteName: "P&R Workforce LLC",
    images: [
      {
        url: "/images/workforce.png",
        width: 1200,
        height: 630,
        alt: "P&R Workforce LLC skilled trades staffing website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "P&R Workforce LLC | UX and SEO Exploration",
    description:
      "UX and SEO exploration of a skilled trades staffing company website serving North Carolina.",
    images: ["/images/workforce.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}