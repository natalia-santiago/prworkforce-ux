import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services UX and SEO Exploration",
  description:
    "UX and SEO exploration of a staffing services page, showing how service categories, scanability, internal linking, and content structure can support a better user experience.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Temporary staffing support",
    description:
      "Designed to help employers quickly understand short term workforce solutions and move toward the next step with less friction.",
  },
  {
    title: "Temporary-to-hire placements",
    description:
      "Shows how a staffing website can explain flexible hiring paths while keeping content clear and easy to scan.",
  },
  {
    title: "Direct hire recruiting",
    description:
      "Demonstrates how a service page can present longer term hiring support in a way that feels organized and trustworthy.",
  },
  {
    title: "Project-based workforce support",
    description:
      "Structured to communicate staffing help for project timelines, changing labor needs, and fast moving work environments.",
  },
  {
    title: "Skilled trades manpower support",
    description:
      "Highlights how role specific staffing services can be grouped in a clean layout that improves readability and decision making.",
  },
  {
    title: "Electrical staffing",
    description:
      "A focused service entry showing how trade specific offerings can be surfaced clearly for employers and job seekers.",
  },
  {
    title: "HVAC staffing",
    description:
      "Built to show how specialized trade categories can support stronger scanning patterns and clearer service understanding.",
  },
  {
    title: "Plumbing staffing",
    description:
      "Illustrates how a service page can balance useful detail with simplicity so users do not feel overloaded.",
  },
  {
    title: "Drywall staffing",
    description:
      "Supports the overall concept by showing category depth while maintaining visual consistency across the page.",
  },
  {
    title: "Flooring and tile staffing",
    description:
      "Rounds out the service structure with another trade specific example that supports both UX clarity and SEO relevance.",
  },
];

const benefits = [
  "Clear service grouping for easier scanning",
  "Stronger internal linking opportunities",
  "More focused page level search intent",
  "Better content structure for employers and job seekers",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-black/10 bg-[#fcfcfc]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-[900px]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#c71f25] sm:text-sm">
              Services
            </p>

            <h1 className="mt-3 max-w-[13ch] text-[2.3rem] font-semibold tracking-tight text-[#111111] sm:text-[3rem] md:text-5xl lg:text-[3.7rem] lg:leading-[1]">
              Service structure designed for clarity and scale.
            </h1>

            <p className="mt-5 max-w-[58rem] text-[0.98rem] leading-7 text-black/72 sm:text-[1.05rem] sm:leading-8">
              This UX and SEO exploration expands the staffing concept into a
              dedicated services page to demonstrate stronger information
              architecture, clearer scanability, and more focused page level
              content.
            </p>

            <p className="mt-4 max-w-[56rem] text-[0.95rem] leading-7 text-black/58 sm:text-base sm:leading-8">
              Rather than placing every offering on the homepage alone, this
              page shows how service categories can be organized into a more
              complete site structure that supports both usability and search
              visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                Why this page matters
              </p>

              <h2 className="mt-3 max-w-[16ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.3rem] md:text-4xl">
                A stronger services page improves both UX and SEO.
              </h2>

              <p className="mt-4 max-w-[48rem] text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                For users, a dedicated services page reduces cognitive load and
                makes the offering easier to understand. For SEO, it creates a
                stronger destination for relevant keywords, better internal
                linking, and a more scalable website structure.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#fafafa] p-6 shadow-sm sm:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/55 sm:text-sm">
                Exploration goals
              </p>

              <ul className="mt-5 space-y-3">
                {benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-black/72 sm:text-[0.98rem]"
                  >
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#c71f25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
              Service categories
            </p>
            <h2 className="mt-3 max-w-[18ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.3rem] md:text-4xl">
              Organized offerings that are easier to scan and understand.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="h-1 w-12 rounded-full bg-[#c71f25]" />
                <h3 className="mt-4 text-[1.06rem] font-semibold text-[#111111] sm:text-[1.12rem]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/70 sm:text-[0.96rem]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-[28px] border border-black/10 bg-[#fcfcfc] p-6 shadow-sm sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                UX takeaway
              </p>
              <h2 className="mt-3 max-w-[16ch] text-[1.85rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
                Better content grouping supports better decision making.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                This page shows how users benefit when service content is moved
                into a dedicated destination instead of relying only on homepage
                summaries. It improves clarity, supports deeper exploration, and
                creates a cleaner overall experience.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#111111] p-6 text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#ff6a6f] sm:text-sm">
                SEO takeaway
              </p>
              <h2 className="mt-3 max-w-[15ch] text-[1.85rem] font-semibold tracking-tight sm:text-[2.2rem] md:text-4xl">
                Dedicated pages create stronger search intent and structure.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-white/75 sm:text-base sm:leading-8">
                Creating a services page gives search engines a clearer
                destination for service related queries while also improving
                internal linking and site depth. It is one of the most important
                structural upgrades in this exploration.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/service-areas"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-[0.92rem] font-semibold text-[#111111] transition hover:border-black/20 hover:bg-black/[0.03] sm:text-sm"
            >
              View Service Areas Concept
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#c71f25] px-6 py-3 text-[0.92rem] font-semibold text-white shadow-sm transition hover:bg-[#a8171c] hover:shadow-md sm:text-sm"
            >
              Explore Contact Page Concept
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}