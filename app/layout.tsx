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
    default: "P&R Workforce LLC | Skilled Trades Staffing in North Carolina",
    template: "%s | P&R Workforce LLC",
  },

  description:
    "P&R Workforce LLC is a staffing company based in Goldsboro, North Carolina, connecting employers with dependable workers and helping job seekers find opportunities across skilled trades and related industries.",

  keywords: [
    "P&R Workforce LLC",
    "staffing company North Carolina",
    "skilled trades staffing North Carolina",
    "construction staffing North Carolina",
    "temporary staffing North Carolina",
    "temporary to hire North Carolina",
    "direct hire recruiting North Carolina",
    "electrical staffing North Carolina",
    "HVAC staffing North Carolina",
    "plumbing staffing North Carolina",
    "drywall staffing North Carolina",
    "flooring staffing North Carolina",
    "tile staffing North Carolina",
    "Goldsboro staffing company",
    "Raleigh staffing company",
    "Wilmington staffing company",
    "job opportunities North Carolina",
  ],

  alternates: {
    canonical: "/",
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
    title: "P&R Workforce LLC | Skilled Trades Staffing in North Carolina",
    description:
      "Reliable staffing support for employers and opportunities for job seekers across Goldsboro, Raleigh, Wilmington, and surrounding North Carolina areas.",
    url: SITE_URL,
    siteName: "P&R Workforce LLC",
    images: [
      {
        url: "/images/workforce.png",
        width: 1200,
        height: 630,
        alt: "P&R Workforce LLC skilled trades staffing in North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "P&R Workforce LLC | Skilled Trades Staffing in North Carolina",
    description:
      "Reliable staffing support for employers and opportunities for job seekers across Goldsboro, Raleigh, Wilmington, and surrounding North Carolina areas.",
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