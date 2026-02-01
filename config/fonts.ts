import localFont from "next/font/local";

export const Inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/Inter_28pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter_28pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter_28pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter_28pt-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export const GeistMono = localFont({
  src: [
    {
      path: "../public/fonts/geist_mono/GeistMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geist_mono/GeistMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/geist_mono/GeistMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/geist_mono/GeistMono-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});
