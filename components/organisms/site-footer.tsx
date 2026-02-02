"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AppIcon } from "../atoms/icon";
import { ThemeToggle } from "../molecules/theme-toggle";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const SiteFooter = () => {
  const pathname = usePathname();

  return (
    <footer className='w-full border-t'>
      <div className='container_ border-x'>
        <div className='flex flex-col items-center justify-between gap-4 px-6 py-12 sm:flex-row sm:px-12 lg:px-18'>
          <div className='flex flex-col items-center gap-x-4 gap-y-2 sm:flex-row'>
            <AppIcon className='text-primary size-(--text-7xl)' aria-hidden='true' />
            <p className='leading-[0.9] font-bold tracking-normal uppercase sm:w-10'>
              {site.heroTitle}
            </p>
          </div>

          <div className='flex flex-col items-center gap-2 sm:items-end'>
            <nav
              aria-label='Footer navigation'
              className={cn(
                "[&_a]:text-muted-foreground [&_a]:transition-colors",
                "[&_a]:hover:text-primary [&_a]:aria-[current=page]:text-foreground",
              )}
            >
              <ul className='flex flex-wrap gap-4 text-sm'>
                <li>
                  <Link
                    href='/privacy'
                    aria-current={pathname === "/privacy" ? "page" : undefined}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms'
                    aria-current={pathname === "/terms" ? "page" : undefined}
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <a
                    href='https://github.com/thisjuncedrick/the-photobooth-project/issues'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Report bug (opens new tab)'
                  >
                    Report Bug
                  </a>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
