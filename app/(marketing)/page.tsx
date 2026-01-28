import { IconArrowRight, IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import { CSSProperties } from "react";

import { AppIcon } from "@/components/atoms/icon";
import { LinkButton } from "@/components/atoms/link-button";
import { ReleaseBadge } from "@/components/molecules/release-badge";
import { FeatureCard } from "@/components/organisms/feature-card";
import { Separator } from "@/components/ui/separator";

import { Marketing } from "@/config/marketing";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import "@/styles/app.css";

export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <section
        className='grid grid-cols-1 divide-x-0 divide-y border-b lg:grid-cols-3 lg:divide-x lg:divide-y-0'
        aria-labelledby='hero-heading'
      >
        <div className='px-6 py-20 text-center sm:px-12 sm:text-left lg:col-span-2 lg:px-18'>
          <div className='flex flex-col items-center gap-8 sm:max-w-md sm:items-start'>
            <ReleaseBadge />

            <h1
              id='hero-heading'
              className='text-6xl leading-[0.9] font-black text-pretty uppercase sm:text-8xl lg:text-9xl'
            >
              {site.heroTitle}
            </h1>

            <Separator className='bg-primary h-2! w-1/2!' decorative />

            <p className='text-secondary-foreground leading-relaxed tracking-[0.08em] sm:text-lg'>
              {site.description}
            </p>

            <LinkButton
              href='/booth'
              className='h-auto w-full gap-2 px-5 py-2 text-lg uppercase sm:w-fit'
            >
              <IconRocket className='size-(--text-lg)' aria-hidden='true' />
              <span>Launch App</span>
            </LinkButton>
          </div>
        </div>
        <div className='group bg-secondary flex items-center justify-center overflow-hidden p-18'>
          <div
            className={cn(
              "strip-container bg-white text-black",
              "shadow-2xl transition-transform duration-700",
              "-rotate-2 group-hover:scale-[1.02] group-hover:rotate-1",
            )}
            style={{ "--img-width": "320px", "--scale-factor": 0.8 } as CSSProperties}
            role='img'
            aria-label='Sample photo strip showcase'
          >
            {Marketing.Images.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className='photo-wrapper group/hero-photo bg-transparent!'
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    "aspect-4/3 object-cover object-center",
                    "opacity-90 mix-blend-luminosity brightness-90 contrast-200 grayscale",
                    "transition-all duration-300 ease-in-out",
                    "group-hover/hero-photo:opacity-100 group-hover/hero-photo:mix-blend-normal group-hover/hero-photo:brightness-100 group-hover/hero-photo:contrast-100 group-hover/hero-photo:grayscale-0",
                  )}
                  height={213}
                  width={320}
                />
              </div>
            ))}
            <div className='strip-footer text-primary flex flex-col items-center text-center'>
              <AppIcon />
              <span className='strip-subtitle font-black uppercase'>{site.name}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className='grid grid-cols-1 divide-y border-b lg:grid-cols-3 lg:divide-x lg:divide-y-0'
        aria-labelledby='how-it-works-heading'
      >
        <h2 id='how-it-works-heading' className='sr-only'>
          How It Works
        </h2>
        {Marketing.Features.map((feature, index) => (
          <FeatureCard
            key={`${feature.header}-${index}`}
            {...feature}
            count={String(index + 1).padStart(2, "0")}
          />
        ))}
      </section>

      <section
        className='grid grid-cols-1 divide-y lg:grid-cols-2 lg:divide-y-0'
        aria-labelledby='cta-heading'
      >
        <div className='px-6 py-20 text-center sm:px-12 sm:text-left lg:px-18'>
          <h2
            id='cta-heading'
            className='text-6xl leading-[0.9] font-black text-pretty uppercase sm:text-8xl lg:text-9xl'
          >
            <span className='text-primary block'>Your Studio.</span>
            <span className='block'>Any where.</span>
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:items-start sm:px-12 sm:text-left lg:px-18'>
          <p className='text-secondary-foreground text-lg leading-relaxed tracking-[0.08em] sm:text-2xl'>
            Ready to Capture? Start creating memorable photo strips in seconds. No setup
            required—just click, pose, and print.
          </p>

          <LinkButton
            href='/booth'
            className='bg-foreground hover:bg-foreground/90 text-background h-14 justify-start p-5 text-lg uppercase lg:w-full'
          >
            <span>Launch Photobooth</span>
            <IconArrowRight aria-hidden='true' size='var(--text-xl)' />
          </LinkButton>
        </div>
      </section>
    </div>
  );
}
