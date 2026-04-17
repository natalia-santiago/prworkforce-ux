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
    default:
      "P&R Workforce UX Concept | Portfolio Case Study",
    template: "%s | P&R Workforce UX Concept",
  },

  description:
    "UX redesign concept of the P&R Workforce website created as a portfolio case study, focused on improving layout, hierarchy, and user experience.",

  keywords: [
    "staffing company",
    "staffing agency North Carolina",
    "construction staffing",
    "skilled trades staffing",
    "electrical staffing",
    "HVAC staffing",
    "plumbing staffing",
    "drywall staffing",
    "flooring staffing",
    "tile staffing",
    "Goldsboro staffing",
    "Raleigh staffing",
    "Wilmington NC staffing",
    "North Carolina staffing company",
    "job opportunities North Carolina",
    "temporary staffing North Carolina",
    "direct hire recruiting North Carolina",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  // ✅ FIXED FAVICON SETUP
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
      "Reliable staffing support for Raleigh, Goldsboro, Wilmington, and surrounding North Carolina areas across electrical, HVAC, plumbing, drywall, flooring, tile, and other skilled trades.",
    url: SITE_URL,
    siteName: "P&R Workforce LLC",
    images: [
      {
        url: "/images/workforce.png",
        width: 1200,
        height: 630,
        alt: "P&R Workforce Staffing Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "P&R Workforce LLC | Skilled Trades Staffing in North Carolina",
    description:
      "Reliable staffing support for Raleigh, Goldsboro, Wilmington, and surrounding North Carolina areas across electrical, HVAC, plumbing, drywall, flooring, tile, and other skilled trades.",
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