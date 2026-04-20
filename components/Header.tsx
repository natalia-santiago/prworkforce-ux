import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:gap-6 lg:px-8 lg:py-[1.15rem]">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90 sm:gap-4"
          aria-label="P&R Workforce UX and SEO Exploration home"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/10 bg-black shadow-sm sm:h-14 sm:w-14 lg:h-16 lg:w-16">
            <Image
              src="/images/logo-cropped.jpeg"
              alt="P&R Workforce LLC logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[0.98rem] font-semibold tracking-tight text-[#111111] sm:text-[1.08rem] lg:text-[1.24rem]">
              P&amp;R Workforce LLC
            </p>
            <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.22em] text-black/50 sm:text-[0.68rem] lg:text-xs lg:tracking-[0.28em]">
              Staffing Company
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="text-[0.95rem] font-medium text-[#111111] transition hover:text-[#c71f25]"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-[0.95rem] font-medium text-[#111111] transition hover:text-[#c71f25]"
          >
            Services
          </Link>
          <Link
            href="/service-areas"
            className="text-[0.95rem] font-medium text-[#111111] transition hover:text-[#c71f25]"
          >
            Service Areas
          </Link>
          <Link
            href="/contact"
            className="text-[0.95rem] font-medium text-[#111111] transition hover:text-[#c71f25]"
          >
            Contact
          </Link>
          <Link
            href="/reviews"
            className="text-[0.95rem] font-medium text-[#111111] transition hover:text-[#c71f25]"
          >
            Reviews
          </Link>
          <a
            href="tel:+12525826094"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#c71f25] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a8171c] hover:shadow-md"
          >
            (252) 582-6094
          </a>
        </nav>

        <Link
          href="/contact"
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-[#c71f25] px-4 py-2 text-[0.88rem] font-semibold text-white shadow-sm transition hover:bg-[#a8171c] sm:min-h-11 sm:px-5 sm:py-2.5 sm:text-sm md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}