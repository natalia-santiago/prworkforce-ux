import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas in North Carolina",
  description:
    "P&R Workforce LLC serves Goldsboro, Raleigh, Wilmington, and surrounding North Carolina areas with staffing support for employers and job opportunities for skilled workers.",
  alternates: {
    canonical: "/service-areas",
  },
};

const locations = [
  {
    name: "Goldsboro, NC",
    description:
      "Our home base and a key service area for staffing support and job opportunities.",
  },
  {
    name: "Raleigh, NC",
    description:
      "Serving employers and job seekers throughout the Raleigh area with dependable workforce support.",
  },
  {
    name: "Wilmington, NC",
    description:
      "Providing staffing support and employment opportunities throughout Wilmington and surrounding communities.",
  },
  {
    name: "Surrounding North Carolina areas",
    description:
      "We also support nearby communities across North Carolina based on project and staffing needs.",
  },
];

const localBenefits = [
  "Clear service coverage for employers and job seekers",
  "Staffing support across key North Carolina markets",
  "Regional workforce solutions across multiple trades",
  "Reliable communication and responsive support",
];

export default function ServiceAreasPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-black/10 bg-[#fcfcfc]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-[900px]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#c71f25] sm:text-sm">
              UX and SEO Exploration • Service Areas
            </p>

            <h1 className="mt-3 max-w-[13ch] text-[2.3rem] font-semibold tracking-tight text-[#111111] sm:text-[3rem] md:text-5xl lg:text-[3.7rem] lg:leading-[1]">
              Proudly serving employers and job seekers across North Carolina.
            </h1>

            <p className="mt-5 max-w-[58rem] text-[0.98rem] leading-7 text-black/72 sm:text-[1.05rem] sm:leading-8">
              P&amp;R Workforce supports businesses and workers throughout
              Goldsboro, Raleigh, Wilmington, and surrounding North Carolina
              areas.
            </p>

            <p className="mt-4 max-w-[56rem] text-[0.95rem] leading-7 text-black/58 sm:text-base sm:leading-8">
              Whether you are looking for dependable staffing support or seeking
              your next job opportunity, our team is ready to help across a wide
              service area.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                Where we serve
              </p>

              <h2 className="mt-3 max-w-[16ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.3rem] md:text-4xl">
                Regional coverage built around real workforce needs.
              </h2>

              <p className="mt-4 max-w-[48rem] text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                Our service areas are focused on supporting employers who need
                dependable workers and helping job seekers connect with the
                right opportunities across key North Carolina markets.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#fafafa] p-6 shadow-sm sm:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/55 sm:text-sm">
                Area highlights
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
                For employers
              </p>
              <h2 className="mt-3 max-w-[16ch] text-[1.85rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
                Find workforce support in the areas you need most.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                We help businesses across our service areas connect with
                dependable workers for temporary needs, project support, and
                longer term placements.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#111111] p-6 text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#ff6a6f] sm:text-sm">
                For job seekers
              </p>
              <h2 className="mt-3 max-w-[15ch] text-[1.85rem] font-semibold tracking-tight sm:text-[2.2rem] md:text-4xl">
                Explore opportunities across North Carolina.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-white/75 sm:text-base sm:leading-8">
                We work with job seekers across multiple regions, helping match
                skills and experience with the right opportunities in our
                service areas.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-[0.92rem] font-semibold text-[#111111] transition hover:border-black/20 hover:bg-black/[0.03] sm:text-sm"
            >
              View Services
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#c71f25] px-6 py-3 text-[0.92rem] font-semibold text-white shadow-sm transition hover:bg-[#a8171c] hover:shadow-md sm:text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}