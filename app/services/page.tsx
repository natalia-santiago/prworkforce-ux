import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staffing Services in North Carolina",
  description:
    "Explore staffing services from P&R Workforce LLC, including temporary staffing support, temporary-to-hire placements, direct hire recruiting, and skilled trades staffing across North Carolina.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Temporary staffing support",
    description:
      "Flexible staffing solutions for short term labor needs, changing schedules, and project based workforce demands.",
  },
  {
    title: "Temporary-to-hire placements",
    description:
      "A practical option for businesses that want to evaluate fit before moving into a longer term hire.",
  },
  {
    title: "Direct hire recruiting",
    description:
      "Support for employers looking to fill positions with dependable candidates for long term workforce needs.",
  },
  {
    title: "Project-based workforce support",
    description:
      "Staffing solutions built around timelines, workload changes, and project specific labor requirements.",
  },
  {
    title: "Skilled trades manpower support",
    description:
      "Reliable workforce support across multiple trades to help keep projects moving efficiently.",
  },
  {
    title: "Electrical staffing",
    description:
      "Staffing support for electrical work and field roles that require dependable, qualified labor.",
  },
  {
    title: "HVAC staffing",
    description:
      "Workforce support for HVAC related positions and projects across service and installation needs.",
  },
  {
    title: "Plumbing staffing",
    description:
      "Staffing support for plumbing projects and related labor needs in residential and commercial settings.",
  },
  {
    title: "Drywall staffing",
    description:
      "Dependable staffing support for drywall crews, labor needs, and project coordination.",
  },
  {
    title: "Flooring and tile staffing",
    description:
      "Workforce solutions for flooring and tile projects that require consistent labor support and reliability.",
  },
];

const benefits = [
  "Flexible staffing options for changing workforce needs",
  "Support across multiple skilled trades and project types",
  "Reliable staffing solutions for employers across North Carolina",
  "Opportunities for job seekers looking for the right fit",
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
              Staffing support designed for clarity and scale.
            </h1>

            <p className="mt-5 max-w-[58rem] text-[0.98rem] leading-7 text-black/72 sm:text-[1.05rem] sm:leading-8">
              P&amp;R Workforce provides staffing solutions for employers and
              opportunities for job seekers across multiple trades and project
              needs throughout North Carolina.
            </p>

            <p className="mt-4 max-w-[56rem] text-[0.95rem] leading-7 text-black/58 sm:text-base sm:leading-8">
              From temporary staffing support to direct hire recruiting, our
              services are built to help businesses find dependable workers and
              help candidates connect with the right opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                Why businesses choose us
              </p>

              <h2 className="mt-3 max-w-[16ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.3rem] md:text-4xl">
                Staffing solutions built around real workforce needs.
              </h2>

              <p className="mt-4 max-w-[48rem] text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                We understand that hiring needs can change quickly. Our service
                options are designed to support employers with flexible staffing
                solutions while helping job seekers find roles that match their
                experience and goals.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#fafafa] p-6 shadow-sm sm:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/55 sm:text-sm">
                Service highlights
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
              Organized offerings that are easy to scan and understand.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 sm:gap-4">
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
                For employers
              </p>
              <h2 className="mt-3 max-w-[16ch] text-[1.85rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
                Get dependable workforce support for your next project.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-black/72 sm:text-base sm:leading-8">
                Whether you need short term labor, long term placements, or
                trade specific staffing support, P&amp;R Workforce is here to
                help you build the right team.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#111111] p-6 text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#ff6a6f] sm:text-sm">
                For job seekers
              </p>
              <h2 className="mt-3 max-w-[15ch] text-[1.85rem] font-semibold tracking-tight sm:text-[2.2rem] md:text-4xl">
                Explore opportunities that match your skills and experience.
              </h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-white/75 sm:text-base sm:leading-8">
                We work with job seekers across multiple trades and industries,
                helping connect qualified candidates with opportunities across
                North Carolina.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/service-areas"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-[0.92rem] font-semibold text-[#111111] transition hover:border-black/20 hover:bg-black/[0.03] sm:text-sm"
            >
              View Service Areas
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