import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import { ThemeToggleDev } from "@/components/molecules/theme-toggle";
import { TailwindIndicator } from "@/components/tailwind-breakpoint";
import { ThemeProvider } from "@/components/theme-provider";

import { site } from "@/config/site";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const IS_DEV_MODE = process.env.NODE_ENV === "development";

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css'
        ></link>
        {IS_DEV_MODE && (
          <script
            crossOrigin='anonymous'
            src='//unpkg.com/react-scan/dist/auto.global.js'
          ></script>
        )}
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
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
