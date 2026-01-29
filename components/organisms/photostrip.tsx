import { CSSProperties } from "react";

import { AppIcon } from "../atoms/icon";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import "@/styles/app.css";
import { FooterStyle } from "@/types";

const PhotoStripBranding = () => (
  <header className='strip-header'>
    <AppIcon aria-hidden='true' />
    <p className='brand leading-relaxed font-bold tracking-[0.08em] uppercase opacity-70'>
      {site.name}
    </p>
  </header>
);

interface PhotoStripTitleProps {
  text: string;
  style: FooterStyle[];
}

const PhotoStripTitle = ({ text, style }: PhotoStripTitleProps) => (
  <p
    className={cn(
      "strip-title",
      { "font-bold": style.includes("isBold") },
      { italic: style.includes("isItalic") },
      { uppercase: style.includes("isUppercase") },
    )}
  >
    {text}
  </p>
);

const PhotoStripImage = ({
  isRounded,
  ...props
}: React.ComponentProps<"img"> & { isRounded: boolean }) => (
  <div className={cn("photo-wrapper group/photo", { "is-rounded": isRounded })}>
    <img {...props} />
  </div>
);

interface PhotoStripProps {
  children: React.ReactNode;
  className?: string;
  style: CSSProperties & {
    "--img-width": string | number;
    "--scale-factor": string | number;
  };
}

const PhotoStrip = ({ children, className, style }: PhotoStripProps) => (
  <div
    className={cn("strip-container transition-colors duration-300 ease-out", className)}
    style={style}
    aria-roledescription='Photo Strip'
  >
    {children}
  </div>
);

export { PhotoStrip, PhotoStripBranding, PhotoStripImage, PhotoStripTitle };
