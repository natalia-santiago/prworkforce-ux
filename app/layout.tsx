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
    default: "P&R Workforce UX Exploration | Natalia Santiago",
    template: "%s | P&R Workforce UX Concept",
  },

  description:
    "UX exploration of the P&R Workforce website, presenting an improved structure focused on layout, hierarchy, user flow, and SEO best practices while maintaining the original business goals.",

  keywords: [
    "UX design portfolio",
    "UX case study",
    "website redesign concept",
    "staffing website UX",
    "SEO optimized website structure",
    "Next.js UX project",
    "P&R Workforce UX redesign",
    "Natalia Santiago portfolio",
    "web design and development portfolio",
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
    title: "P&R Workforce UX Exploration | Portfolio Project",
    description:
      "A UX and SEO-focused redesign concept of the P&R Workforce website, created as part of a web design and development portfolio.",
    url: SITE_URL,
    siteName: "P&R Workforce UX Concept",
    images: [
      {
        url: "/images/workforce.png",
        width: 1200,
        height: 630,
        alt: "P&R Workforce UX redesign concept preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "P&R Workforce UX Exploration | Portfolio Project",
    description:
      "UX redesign concept focused on improving layout, hierarchy, and SEO for a staffing company website.",
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