const LastUpdate = "February 03, 2026";
const Sections: {
  title: string;
  anchor: string;
  content: React.ReactNode;
}[] = [
  {
    title: "Introduction",
    anchor: "introduction",
    content: (
      <>
        Welcome to <span className='font-bold'>The PhotoBooth Project</span> (“The
        PhotoBooth Project - The Open Source Photobooth For The Web”), an open-source
        effort to offer <span className='italic'>privacy-conscious</span> and visually
        engaging photobooth tools on the web. This privacy policy explains how images are
        handled while using the app.
      </>
    ),
  },
  {
    title: "Information We Process",
    anchor: "information-we-process",
    content: (
      <>
        The app processes images you capture with your camera or upload yourself, solely
        for generating photo strips or GIFs on your device.
        <br />
        <br />
        In addition, the app collects{" "}
        <span className='font-bold'>anonymous usage data</span>, such as page views and
        navigation events, through Vercel Web Analytics. This data does{" "}
        <span className='italic'>not</span> include names, email addresses, uploaded
        images, or personally identifiable information.
      </>
    ),
  },
  {
    title: "Purpose of Processing",
    anchor: "purpose-of-processing",
    content: (
      <>
        Images are used only to create photo strips, GIFs, or PNGs directly on your
        device. Temporary storage happens in memory or Blob URLs while processing. Files
        are only saved permanently if you choose to{" "}
        <span className='font-bold'>download or print</span> them.
      </>
    ),
  },
  {
    title: "Data Sharing",
    anchor: "data-sharing",
    content: (
      <>
        Image data is <span className='font-bold'>never transmitted</span> to any server
        or third party and remains on your device at all times.
        <br />
        <br />
        Anonymous usage data is shared with <span className='font-bold'>Vercel</span>{" "}
        solely for analytics purposes, in accordance with{" "}
        <a
          href='https://vercel.com/docs/analytics/privacy-policy'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          Vercel's Analytics Privacy Policy
        </a>
        .
      </>
    ),
  },
  {
    title: "Analytics",
    anchor: "analytics",
    content: (
      <>
        This app uses <span className='font-bold'>Vercel Web Analytics</span> to
        understand general usage patterns, such as page views and navigation flow.
        <br />
        <br />
        Analytics data is collected without cookies and without identifying individual
        users. No image content or user-generated media is included in analytics data.
      </>
    ),
  },
  {
    title: "User Rights",
    anchor: "user-rights",
    content: (
      <>
        You retain full rights over all images you create or upload. All generated content
        is <span className='italic'>copyright-free</span> under the project's open-source
        terms. You control where images are stored, downloaded, or printed.
      </>
    ),
  },
  {
    title: "Cookies",
    anchor: "cookies",
    content: (
      <>
        This app does not use cookies for analytics or tracking. Vercel Web Analytics
        operates without setting cookies by default.
        <br />
        <br />
        Session-related data, such as captured or uploaded images, exists only in memory
        and is cleared when you refresh or leave the page.
      </>
    ),
  },
  {
    title: "Security",
    anchor: "security",
    content: (
      <>
        Image processing and generation occur entirely on your device. Uploaded or
        captured images are never sent to external servers.
        <br />
        <br />
        Anonymous analytics requests are securely handled by Vercel. Users are encouraged
        to use an up-to-date and secure browser.
      </>
    ),
  },
  {
    title: "Policy Updates",
    anchor: "policy-updates",
    content: (
      <>
        When this policy changes, a banner will appear on the homepage with a link so you
        can review the latest version.
      </>
    ),
  },
  {
    title: "Contact",
    anchor: "contact",
    content: (
      <>
        If you have questions or concerns about privacy, you can reach out via the
        project's author's <a href='mailto:narciso.juncedrick@gmail.com'>email address</a>
        .
      </>
    ),
  },
];

export const Privacy = { LastUpdate, Sections };
