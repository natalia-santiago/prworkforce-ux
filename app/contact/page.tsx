import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact UX Concept | P&R Workforce Exploration",
  description:
    "Contact page UX exploration demonstrating form structure, hierarchy, and user flow for a staffing company website redesign concept.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}