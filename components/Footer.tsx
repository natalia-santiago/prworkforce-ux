import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-[1.2fr_0.9fr_0.9fr] lg:px-8 lg:py-18">
        <div>
          <p className="text-[1.08rem] font-semibold tracking-tight text-white sm:text-[1.18rem] lg:text-[1.22rem]">
            P&amp;R Workforce LLC
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/78 sm:mt-4">
            Reliable staffing company based in Goldsboro, serving Raleigh,
            Goldsboro, Wilmington, and surrounding North Carolina areas. We
            connect businesses with dependable workers across multiple trades
            and industries.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/52">
            UX and SEO exploration concept created by Natalia Santiago for
            portfolio purposes.
          </p>
        </div>

        <div>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/92 sm:text-sm sm:tracking-[0.22em]">
            Contact
          </p>
          <div className="mt-4 space-y-2.5 text-sm leading-7 text-white/78 sm:mt-5 sm:space-y-3">
            <p>Goldsboro, NC</p>
            <a
              href="tel:+12525826094"
              className="block transition hover:text-white"
            >
              (252) 582-6094
            </a>
            <a
              href="mailto:info@prworkforcenc.com"
              className="block break-all transition hover:text-white"
            >
              info@prworkforcenc.com
            </a>
          </div>
        </div>

        <div>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/92 sm:text-sm sm:tracking-[0.22em]">
            Quick Links
          </p>
          <div className="mt-4 space-y-2.5 text-sm leading-7 text-white/78 sm:mt-5 sm:space-y-3">
            <Link href="/" className="block transition hover:text-white">
              Home
            </Link>
            <Link href="/services" className="block transition hover:text-white">
              Services
            </Link>
            <Link
              href="/service-areas"
              className="block transition hover:text-white"
            >
              Service Areas
            </Link>
            <Link href="/contact" className="block transition hover:text-white">
              Contact
            </Link>
            <Link href="/reviews" className="block transition hover:text-white">
              Reviews
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-sm text-white/58 sm:gap-3 sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-4">
            <p>© {year} P&amp;R Workforce UX and SEO Exploration.</p>
            <p>Portfolio concept for UX, SEO, and information architecture.</p>
          </div>

          <a
            href="https://natalia-santiago-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Website by Natalia Santiago
          </a>
        </div>
      </div>
    </footer>
  );
}