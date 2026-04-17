import Link from "next/link";

const quickReasons = [
  "Need staffing support for a project or crew",
  "Looking for work opportunities in North Carolina",
  "Want to ask a question before our profile goes live",
];

const reviewPreview = [
  {
    title: "For employers",
    description:
      "Quick access to feedback, trust signals, and more information about working with P&R Workforce.",
  },
  {
    title: "For job seekers",
    description:
      "A simple place to learn how others experienced the company and what to expect when reaching out.",
  },
];

export default function ReviewsPage() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 pb-14 md:px-8 lg:py-20">
        <div className="max-w-[860px]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#cf2027]">
            Reviews
          </p>

          <h1 className="mt-4 max-w-[22ch] text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[3.5rem]">
            Our Google Business Profile is coming soon.
          </h1>

          <div className="mt-8 max-w-[760px] text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
            <p>
              P&amp;R Workforce is a staffing company proudly serving Goldsboro,
              Raleigh, Wilmington, and surrounding North Carolina areas.
            </p>

            <p className="mt-4">
              Our Google Business Profile will be available soon where clients
              and job seekers can leave reviews and feedback.
            </p>

            <p className="mt-4">
              In the meantime, feel free to reach out if you need dependable
              staffing support or if you are looking for your next job
              opportunity.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#cf2027] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(207,32,39,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Contact Us
            </Link>

            <a
              href="tel:+12525826094"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/88 transition hover:border-black/16 hover:bg-black/[0.02]"
            >
              Call or Text (252) 582-6094
            </a>
          </div>
        </div>

        <div className="mt-14 max-w-[980px]">
          <div className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="rounded-2xl border border-black/10 bg-[#fafafa] p-5 shadow-sm sm:p-6">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#cf2027]">
                What to expect
              </p>

              <h2 className="mt-3 max-w-[20ch] text-[1.5rem] font-semibold leading-tight tracking-tight text-black">
                Reviews and feedback will be added here soon.
              </h2>

              <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                Once our Google Business Profile is live, this page will make it
                easy for employers and job seekers to view feedback and learn
                more about working with P&amp;R Workforce.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {reviewPreview.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/8 bg-white p-4"
                  >
                    <p className="text-sm font-semibold text-black">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-black/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#fafafa] p-5 shadow-sm sm:p-6">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#cf2027]">
                Need help now?
              </p>

              <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-black/75 sm:text-base sm:leading-8">
                {quickReasons.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[0.7em] inline-block h-1.5 w-1.5 rounded-full bg-black/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-[#cf2027]/12 bg-[#fff6f6] p-4">
                <p className="text-sm font-semibold text-black">
                  Want to be first in line?
                </p>
                <p className="mt-2 text-sm leading-6 text-black/70">
                  Reach out today for staffing support or job inquiries while our
                  public review profile is still being prepared.
                </p>

                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#cf2027] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b91d23]"
                  >
                    Start the Conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}