import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas UX and SEO Exploration",
  description:
    "UX and SEO exploration of a service areas page, demonstrating stronger local structure, clearer location relevance, and improved internal linking for a staffing website concept.",
  alternates: {
    canonical: "/service-areas",
  },
};

const locations = [
  {
    name: "Goldsboro, NC",
    description:
      "Presented as the core location in this concept, helping establish a strong local anchor for the site structure.",
  },
  {
    name: "Raleigh, NC",
    description:
      "Included to show how a staffing website can expand service coverage while keeping regional relevance clear.",
  },
  {
    name: "Wilmington, NC",
    description:
      "Used as another example of how service area content can strengthen both wayfinding and local SEO signals.",
  },
  {
    name: "Surrounding North Carolina areas",
    description:
      "Supports broader coverage while keeping the page aligned with realistic service area messaging.",
  },
];

const localBenefits = [
  "Creates a dedicated destination for location based content",
  "Strengthens local relevance beyond the homepage",
  "Improves internal linking between key pages",
  "Demonstrates scalable local SEO site planning",
];

export default function ServiceAreasPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-black/10 bg-[#fcfcfc]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-[900px]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#c71f25] sm:text-sm">
              Service Areas
            </p>

            <h1 className="mt-3 max-w-[13ch] text-[2.3rem] font-semibold tracking-tight text-[#111111] sm:text-[3rem] md:text-5xl lg:text-[3.7rem] lg:leading-[1]">
              Location content designed for stronger local structure.
            </h1>

            <p className="mt-5 max-w-[58rem] text-[0.98rem] leading-7 text-black/72 sm:text-[1.05rem] sm:leading-8">
              This UX and SEO exploration adds a service areas page to show how
              location specific structure can improve clarity for users and
              provide stronger local signals for search engines.
            </p>

            <p className="mt-4 max-w-[56rem] text-[0.95rem] leading-7 text-black/58 sm:text-base sm:leading-8">
              Instead of relying only on brief location mentions across the
              homepage, this page demonstrates a more intentional local content
              strategy.
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
                Local structure improves wayfinding and search relevance.
              </h2>

              <p className="mt-4 max-w-[48rem] text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                For users, a service areas page makes it easier to confirm where
                the company operates. For SEO, it creates a clearer local
                content hub and shows how the site could expand into deeper
                geographic targeting if needed.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#fafafa] p-6 shadow-sm sm:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/55 sm:text-sm">
                Exploration goals
              </p>

              <ul className="mt-5 space-y-3">
                {localBenefits.map((item) => (
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
              Covered locations
            </p>
            <h2 className="mt-3 max-w-[18ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.3rem] md:text-4xl">
              A clearer way to present regional coverage.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.name}
                className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="h-1 w-12 rounded-full bg-[#c71f25]" />
                <h3 className="mt-4 text-[1.06rem] font-semibold text-[#111111] sm:text-[1.12rem]">
                  {location.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/70 sm:text-[0.96rem]">
                  {location.description}
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
                Dedicated location content reduces ambiguity for users.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                Rather than making users search across different sections for
                location clues, a dedicated page makes service coverage easier
                to confirm and easier to trust.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#111111] p-6 text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#ff6a6f] sm:text-sm">
                SEO takeaway
              </p>
              <h2 className="mt-3 max-w-[15ch] text-[1.85rem] font-semibold tracking-tight sm:text-[2.2rem] md:text-4xl">
                A service areas page supports stronger local SEO architecture.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-white/75 sm:text-base sm:leading-8">
                This page demonstrates how local intent can be supported through
                a cleaner structure today and expanded later into individual
                city pages if the project ever needed deeper local targeting.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-[0.92rem] font-semibold text-[#111111] transition hover:border-black/20 hover:bg-black/[0.03] sm:text-sm"
            >
              View Services Concept
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