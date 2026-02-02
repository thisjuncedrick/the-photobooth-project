import type { Metadata, Viewport } from "next";

import { ThemeToggleDev } from "@/components/molecules/theme-toggle";
import { TailwindIndicator } from "@/components/tailwind-breakpoint";
import { ThemeProvider } from "@/components/theme-provider";

import { site } from "@/config/site";
import "@/styles/fonts.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: site.longname,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  keywords: [
    "open source photo booth",
    "web photo booth",
    "photo booth web app",
    "Next.js photo booth",
    "web-based photo booth",
    "React photo booth",
    "browser photo booth",
    "camera web app",
    "shadcn project",
  ],
  authors: [
    {
      name: "thisjuncedrick",
      url: "https://github.com/thisjuncedrick",
    },
  ],
  creator: "thisjuncedrick",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.longname,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.longname,
    images: [`${site.url}/og.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const IS_DEV_MODE = process.env.NODE_ENV === "development";

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {IS_DEV_MODE && (
          <script
            crossOrigin='anonymous'
            src='//unpkg.com/react-scan/dist/auto.global.js'
          ></script>
        )}
      </head>
      <body className='antialiased'>
        <ThemeProvider defaultTheme='light' attribute='class' disableTransitionOnChange>
          <div className='min-h-dvh font-sans'>{children}</div>
          {IS_DEV_MODE && (
            <>
              <TailwindIndicator />
              <ThemeToggleDev />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
