"use client";

import { useState } from "react";

export default function ContactPageClient() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1180px] px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <div className="max-w-[52rem]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c71f25]">
            Contact P&amp;R Workforce
          </p>

          <h1 className="contact-hero-title mt-3 text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl lg:text-[3.5rem]">
            Hire staff or get hired.
          </h1>

          <p className="max-w-[52rem] text-base leading-8 text-black/70 md:text-[1.05rem]">
            Tell us what services you’re looking for, or let us know if you are
            seeking employment. Our team will get back to you quickly.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-9 md:grid-cols-3">
          <a
            href="tel:+12525826094"
            className="group rounded-2xl border border-black/10 bg-[#f7f7f7] p-5 shadow-[0_1px_0_rgba(17,17,17,0.03)] hover:border-[#c71f25]/20 hover:bg-white"
          >
            <p className="text-sm font-semibold text-[#111111]">Phone</p>
            <p className="mt-2 text-sm text-black/70 transition-colors group-hover:text-[#c71f25]">
              (252) 582-6094
            </p>
          </a>

          <a
            href="mailto:info@prworkforcenc.com"
            className="group rounded-2xl border border-black/10 bg-[#f7f7f7] p-5 shadow-[0_1px_0_rgba(17,17,17,0.03)] hover:border-[#c71f25]/20 hover:bg-white"
          >
            <p className="text-sm font-semibold text-[#111111]">Email</p>
            <p className="mt-2 break-all text-sm text-black/70 transition-colors group-hover:text-[#c71f25]">
              info@prworkforcenc.com
            </p>
          </a>

          <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-5 shadow-[0_1px_0_rgba(17,17,17,0.03)]">
            <p className="text-sm font-semibold text-[#111111]">Service Area</p>
            <p className="mt-2 text-sm text-black/70">
              Goldsboro, Raleigh &amp; Wilmington, NC
            </p>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-10">
          <aside className="rounded-[30px] border border-black/10 bg-[#0c0c0d] p-7 text-white shadow-[0_16px_40px_rgba(17,17,17,0.08)] md:p-8 lg:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6a6f]">
              How we can help
            </p>

            <h2 className="mt-3 max-w-[12ch] text-3xl font-semibold tracking-tight md:text-[2.1rem]">
              Staffing support for employers and opportunities for job seekers.
            </h2>

            <p className="mt-4 max-w-[48ch] text-base leading-8 text-white/75">
              Reach out if you need dependable staffing support or if you’re
              looking for your next role in the field.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  For employers
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Tell us about your staffing needs, timeline, project type,
                  trade, headcount, and service area.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  For job seekers
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Share your work experience, availability, preferred location,
                  trade, and the type of role you’re seeking.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  Business hours
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Monday–Friday: 8:00 AM – 5:00 PM
                  <br />
                  Saturday: By request
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-[30px] border border-black/10 bg-white px-6 pt-7 pb-6 shadow-[0_16px_40px_rgba(17,17,17,0.06)] md:px-8 md:pt-9 md:pb-8">
            <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
              <div className="rounded-2xl border border-[#c71f25]/20 bg-[#fff6f6] px-4 py-3 text-sm leading-7 text-black/70">
                Demo form for portfolio UX version. Messages are not sent from
                this version of the site.
              </div>

              <div className="rounded-2xl border border-black/8 bg-[#fafafa] p-4 sm:p-5">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#c71f25]">
                  Your information
                </p>

                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#111111]"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="min-h-[56px] w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25] focus:shadow-[0_0_0_4px_rgba(199,31,37,0.08)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[#111111]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="min-h-[56px] w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25] focus:shadow-[0_0_0_4px_rgba(199,31,37,0.08)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#111111]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="min-h-[56px] w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25] focus:shadow-[0_0_0_4px_rgba(199,31,37,0.08)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-2 block text-sm font-medium text-[#111111]"
                    >
                      I am contacting you about
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      defaultValue=""
                      className="min-h-[56px] w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none focus:border-[#c71f25] focus:shadow-[0_0_0_4px_rgba(199,31,37,0.08)]"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="staffing-services">
                        Staffing services
                      </option>
                      <option value="employment-opportunity">
                        Employment opportunity
                      </option>
                      <option value="general-question">General question</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/8 bg-[#fafafa] p-4 sm:p-5">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#c71f25]">
                  Work details
                </p>

                <div className="mt-4 grid gap-5">
                  <div>
                    <label
                      htmlFor="trade"
                      className="mb-2 block text-sm font-medium text-[#111111]"
                    >
                      Trade / Industry
                    </label>
                    <input
                      id="trade"
                      name="trade"
                      type="text"
                      placeholder="Example: General labor, welding, electrical"
                      className="min-h-[56px] w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25] focus:shadow-[0_0_0_4px_rgba(199,31,37,0.08)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-medium text-[#111111]"
                    >
                      City / Service Area
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Example: Raleigh, NC"
                      className="min-h-[56px] w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25] focus:shadow-[0_0_0_4px_rgba(199,31,37,0.08)]"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/8 bg-[#fafafa] p-4 sm:p-5">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#c71f25]">
                  Message
                </p>

                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#111111]"
                  >
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder="Tell us what you need or share your work experience, trade, availability, and any helpful details."
                    className="min-h-[200px] w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25] focus:shadow-[0_0_0_4px_rgba(199,31,37,0.08)]"
                  />
                </div>
              </div>

              {status === "success" && (
                <p className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-7 text-green-700">
                  Demo submission successful. This portfolio version does not
                  send messages.
                </p>
              )}

              {status === "error" && (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-7 text-red-600">
                  Something went wrong. Please refresh and try again.
                </p>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#c71f25] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(199,31,37,0.18)] hover:-translate-y-0.5 hover:bg-[#a8171c] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}