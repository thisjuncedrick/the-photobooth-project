export const PrivacySections: {
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
        The app only processes images you capture with your camera or upload yourself. No
        other personal information, such as{" "}
        <span className='italic'>names, emails, or IP addresses</span>, is collected.
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
        Your images are <span className='font-bold'>never sent to third parties</span>.
        The app does not use analytics, tracking, or cookies.
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
        No cookies or session tracking are used. Each session (i.e., photos captured or
        uploaded) exists only in memory and is cleared when you leave or refresh the page.
      </>
    ),
  },
  {
    title: "Security",
    anchor: "security",
    content: (
      <>
        All processing happens entirely on your device. Nothing is transmitted externally,
        minimizing privacy risks. For best safety, please use an up-to-date and secure
        browser.
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
