import Image from "next/image";
import Link from "next/link";

const hours = [
  { day: "Monday", time: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
  { day: "Thursday", time: "8:00 AM - 5:00 PM" },
  { day: "Friday", time: "8:00 AM - 5:00 PM" },
  { day: "Saturday", time: "By request" },
  { day: "Sunday", time: "Closed" },
];

const servicesOffered = [
  "Temporary staffing support",
  "Temporary-to-hire placements",
  "Direct hire recruiting",
  "Project-based workforce support",
  "Skilled trades manpower support",
  "Electrical staffing",
  "HVAC staffing",
  "Plumbing staffing",
  "Drywall staffing",
  "Flooring and tile staffing",
];

const candidateAreas = [
  "Electrical",
  "HVAC",
  "Plumbing",
  "Drywall",
  "Flooring & tile",
  "Skilled labor",
];

const hiringAreas = [
  "Skilled trades staffing",
  "Short-term manpower support",
  "Long-term placements",
  "Direct hire recruiting",
  "Project-based workforce support",
  "Reliable field workforce",
];

const jobs = [
  "/images/jobs/job01.png",
  "/images/jobs/job02.png",
  "/images/jobs/job03.png",
  "/images/jobs/job04.png",
  "/images/jobs/job05.jpeg",
  "/images/jobs/job06.png",
];

export default function Home() {
  return (
    <>
      <section className="border-b border-black/10 bg-[#fcfcfc]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 pt-12 pb-10 sm:px-6 sm:pt-14 sm:pb-12 md:gap-10 md:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-18 lg:px-8 lg:py-24">
          <div className="max-w-[700px]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
              Skilled Trades Staffing in North Carolina
            </p>

            <h1 className="mt-3 max-w-[11ch] text-[2rem] font-semibold tracking-tight text-[#111111] sm:mt-5 sm:max-w-[10.5ch] sm:text-[2.8rem] md:text-5xl lg:text-[4.15rem] lg:leading-[0.97]">
              Reliable skilled trades staffing across North Carolina.
            </h1>

            <p className="mt-4 max-w-[34rem] text-[0.95rem] leading-6 text-black/72 sm:mt-6 sm:text-[1.03rem] sm:leading-8 md:text-[1.1rem] md:leading-8 lg:text-[1.16rem]">
              Based in Goldsboro, we connect businesses with dependable workers
              and help job seekers find the right opportunities across North
              Carolina.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-9">
              <Link
                href="/contact"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[#c71f25] px-6 py-2 text-[0.9rem] font-semibold text-white shadow-sm transition hover:bg-[#a8171c] hover:shadow-md sm:min-h-12 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Get Staff Now
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-2 text-[0.9rem] font-semibold text-[#111111] transition hover:border-black/20 hover:bg-black/[0.03] sm:min-h-12 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Browse Jobs
              </Link>
            </div>

            <p className="mt-5 text-[0.82rem] leading-5 text-black/60 sm:mt-7 sm:text-sm sm:leading-6 md:mt-8">
              Serving Raleigh • Goldsboro • Wilmington • Surrounding North
              Carolina areas
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[22px] border border-black/10 bg-[#f4f4f4] shadow-[0_14px_38px_rgba(0,0,0,0.07)] sm:rounded-[28px] lg:rounded-[30px]">
            <div className="relative aspect-[4/3.15] w-full">
              <Image
                src="/images/workforce.png"
                alt="P&R Workforce staffing team on site"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-6 sm:py-7 lg:px-8">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-sm sm:px-5 sm:py-5">
              <span className="text-[0.96rem] font-semibold text-[#111111] sm:text-base">
                Multi-trade staffing
              </span>
              <p className="mt-2 text-sm leading-6 text-black/68 sm:leading-7">
                Support across electrical, HVAC, plumbing, drywall, flooring,
                tile, and more.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-sm sm:px-5 sm:py-5">
              <span className="text-[0.96rem] font-semibold text-[#111111] sm:text-base">
                For employers and job seekers
              </span>
              <p className="mt-2 text-sm leading-6 text-black/68 sm:leading-7">
                We help businesses hire and help workers find the right fit.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-sm sm:px-5 sm:py-5">
              <span className="text-[0.96rem] font-semibold text-[#111111] sm:text-base">
                Based in Goldsboro, NC
              </span>
              <p className="mt-2 text-sm leading-6 text-black/68 sm:leading-7">
                Serving Raleigh, Wilmington, and surrounding North Carolina
                areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="grid gap-7 sm:gap-9 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                Welcome to P&amp;R Workforce in Goldsboro, NC
              </p>

              <h2 className="mt-3 max-w-[18ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl lg:text-[2.75rem] lg:leading-[1.06]">
                Thank you for choosing P&amp;R Workforce for your staffing or
                job search needs.
              </h2>

              <p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-black/75 sm:mt-5 sm:text-base sm:leading-8 md:text-[1.03rem]">
                At P&amp;R Workforce LLC, we believe strong connections build
                strong futures — on the job site and beyond. We are a staffing
                company you can count on for dependable workforce support and
                reliable opportunities.
              </p>

              <div className="mt-6 grid gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl border border-black/10 bg-[#f8f8f8] p-4 shadow-sm sm:p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/55 sm:text-sm">
                    Based in
                  </p>
                  <p className="mt-3 text-[1rem] font-semibold text-[#111111] sm:text-lg">
                    Goldsboro, NC
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/65 sm:leading-7">
                    Serving Raleigh, Goldsboro, Wilmington, and surrounding
                    North Carolina areas.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-[#f8f8f8] p-4 shadow-sm sm:p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/55 sm:text-sm">
                    Contact
                  </p>
                  <a
                    href="tel:+12525826094"
                    className="mt-3 block text-[1rem] font-semibold text-[#111111] hover:text-[#c71f25] sm:text-lg"
                  >
                    (252) 582-6094
                  </a>
                  <a
                    href="mailto:info@prworkforcenc.com"
                    className="mt-2 block break-all text-sm leading-6 text-black/65 hover:text-[#c71f25]"
                  >
                    info@prworkforcenc.com
                  </a>
                  <p className="mt-3 text-sm leading-6 text-black/65">
                    Available by phone, text, or email.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-black/10 bg-[#f8f8f8] p-4 shadow-sm sm:mt-8 sm:p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/55 sm:text-sm">
                  Service Area
                </p>
                <p className="mt-3 text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                  P&amp;R Workforce proudly supports businesses and job seekers
                  in Goldsboro, Raleigh, Wilmington, and surrounding North
                  Carolina communities.
                </p>
              </div>
            </div>

            <div className="rounded-[22px] border border-black/10 bg-[#111111] p-5 text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] sm:rounded-[28px] sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#ff6a6f] sm:text-sm">
                Hours of Operation
              </p>

              <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-4">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-2.5 text-sm sm:pb-3"
                  >
                    <span className="font-medium text-white">{item.day}</span>
                    <span className="text-right text-white/75">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 sm:mt-8 sm:p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-sm">
                  Scheduling Note
                </p>
                <p className="mt-3 text-sm leading-6 text-white/75 sm:leading-7">
                  Staffing requests and candidate inquiries can be submitted
                  online at any time. Phone and text support is available during
                  normal business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
              Services Offered
            </p>
            <h2 className="mt-3 max-w-[20ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
              Staffing solutions built around your project needs.
            </h2>
          </div>

          <div className="mt-7 grid gap-3 sm:mt-9 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicesOffered.map((service) => (
              <div
                key={service}
                className="group flex min-h-[72px] items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:border-black/15 hover:shadow-md sm:min-h-[84px] sm:p-5"
              >
                <div className="min-w-0">
                  <div className="h-1 w-10 rounded-full bg-[#c71f25] sm:w-12" />
                  <p className="mt-3 text-[0.95rem] font-semibold leading-6 text-[#111111] sm:mt-4 sm:text-base sm:leading-7">
                    {service}
                  </p>
                </div>

                <span className="mt-1 text-sm font-semibold text-black/35 transition group-hover:text-[#c71f25]">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="grid gap-5 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-[22px] border border-black/10 bg-[#fcfcfc] p-5 shadow-sm sm:rounded-[28px] sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                Looking for a job?
              </p>

              <h2 className="mt-3 max-w-[16ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
                Connect with opportunities that fit your experience.
              </h2>

              <p className="mt-4 text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                We connect job seekers with staffing opportunities that match
                their skills, availability, and career goals across multiple
                industries and trades.
              </p>

              <ul className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                {candidateAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-black/75 sm:leading-7"
                  >
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#c71f25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#c71f25] px-6 py-2.5 text-[0.92rem] font-semibold text-white hover:bg-[#a8171c] sm:mt-8 sm:w-auto sm:py-3 sm:text-sm"
              >
                Apply for Opportunities
              </Link>
            </div>

            <div className="rounded-[22px] border border-black/10 bg-[#fcfcfc] p-5 shadow-sm sm:rounded-[28px] sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                Need to hire?
              </p>

              <h2 className="mt-3 max-w-[16ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
                Find dependable talent for your next project.
              </h2>

              <p className="mt-4 text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                P&amp;R Workforce helps connect businesses with reliable,
                skilled professionals across electrical, HVAC, plumbing,
                drywall, flooring, tile installation, and other support roles.
              </p>

              <ul className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                {hiringAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-black/75 sm:leading-7"
                  >
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#c71f25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-2.5 text-[0.92rem] font-semibold text-[#111111] hover:border-black/20 hover:bg-black/[0.03] sm:mt-8 sm:w-auto sm:py-3 sm:text-sm"
              >
                Request Staffing Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
              Our Jobs
            </p>

            <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
              Real work from our job sites.
            </h2>

            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
              A focused look at some of the real job site work and project
              support connected through P&amp;R Workforce.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3.5 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((imgSrc, index) => (
              <div
                key={imgSrc}
                className="overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-sm sm:rounded-[24px]"
              >
                <div className="relative aspect-[4/4.45] w-full bg-[#f8f8f8]">
                  <Image
                    src={imgSrc}
                    alt={`P&R Workforce job photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111111]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#ff6a6f] sm:text-sm">
                Contact P&amp;R Workforce
              </p>
              <h2 className="mt-3 max-w-[18ch] text-[1.9rem] font-semibold tracking-tight text-white sm:text-[2.2rem] md:text-4xl">
                Let us know what type of staffing support you need.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-7 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
                Whether you need workers for your next project or are looking
                for your next opportunity, our team is ready to hear from you.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:w-auto lg:justify-end">
              <a
                href="tel:+12525826094"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-6 py-2 text-[0.9rem] font-semibold text-[#111111] hover:bg-[#f2f2f2] sm:min-h-11 sm:py-3 sm:text-sm"
              >
                Call (252) 582-6094
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#c71f25] px-6 py-2 text-[0.9rem] font-semibold text-white hover:bg-[#a8171c] sm:min-h-11 sm:py-3 sm:text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
                Location
              </p>

              <h2 className="mt-3 max-w-[16ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
                Based in Goldsboro, serving surrounding North Carolina areas.
              </h2>

              <p className="mt-4 text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                P&amp;R Workforce supports employers and job seekers throughout
                Goldsboro, Raleigh, Wilmington, and nearby communities.
              </p>

              <div className="mt-6 rounded-[18px] border border-black/10 bg-[#fafafa] p-4 shadow-sm sm:mt-7 sm:rounded-[24px] sm:p-6">
                <div className="space-y-3 text-sm leading-6 text-black/70 sm:leading-7">
                  <p>
                    <span className="font-semibold text-[#111111]">Phone:</span>{" "}
                    (252) 582-6094
                  </p>
                  <p>
                    <span className="font-semibold text-[#111111]">Email:</span>{" "}
                    info@prworkforcenc.com
                  </p>
                  <p>
                    <span className="font-semibold text-[#111111]">
                      Main Area:
                    </span>{" "}
                    Goldsboro, NC
                  </p>
                  <p>
                    <span className="font-semibold text-[#111111]">
                      Serving:
                    </span>{" "}
                    Raleigh, Goldsboro, Wilmington, and surrounding areas
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
              <iframe
                title="P&R Workforce service area map"
                src="https://www.google.com/maps?q=Goldsboro,NC&output=embed"
                className="h-[240px] w-full border-0 sm:h-[340px] lg:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c71f25] sm:text-sm">
              Reviews
            </p>

            <h2 className="mt-3 max-w-[16ch] text-[1.9rem] font-semibold tracking-tight text-[#111111] sm:text-[2.2rem] md:text-4xl">
              Our Google Business Profile is coming soon.
            </h2>

            <div className="mt-6 rounded-2xl border border-black/10 bg-[#fafafa] p-5 shadow-sm sm:p-6">
              <p className="text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                P&amp;R Workforce is a staffing company proudly serving
                Goldsboro, Raleigh, Wilmington, and surrounding North Carolina
                areas. Our Google Business Profile will be available soon where
                clients and job seekers can leave reviews and feedback.
              </p>

              <p className="mt-4 text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                In the meantime, feel free to reach out if you need dependable
                staffing support or if you are looking for your next job
                opportunity.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/reviews"
                  className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2 text-[0.9rem] font-semibold text-[#111111] hover:border-black/18 hover:bg-black/[0.03] sm:w-auto sm:text-sm"
                >
                  Visit Reviews Page
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[#c71f25] px-5 py-2 text-[0.9rem] font-semibold text-white hover:bg-[#a8171c] sm:w-auto sm:text-sm"
                >
                  Contact P&amp;R Workforce
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}