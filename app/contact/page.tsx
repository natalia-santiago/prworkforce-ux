import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact P&R Workforce LLC",
  description:
    "Contact P&R Workforce LLC for staffing support or job opportunities in Goldsboro, Raleigh, Wilmington, and surrounding North Carolina areas.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}