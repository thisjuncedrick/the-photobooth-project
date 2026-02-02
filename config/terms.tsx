export const TermsSections: {
  title: string;
  anchor: string;
  content: React.ReactNode;
}[] = [
  {
    title: "Introduction",
    anchor: "#introduction",
    content: (
      <>
        Welcome to <span className='font-bold'>The PhotoBooth Project</span>. By using
        this web application, you agree to abide by these Terms of Use. Please read them
        carefully.
      </>
    ),
  },
  {
    title: "User Obligations",
    anchor: "#user-obligations",
    content: (
      <>
        Users must not upload any illegal, explicit, or unauthorized content. You should
        only upload images that you own or have permission to use. Any misuse of this
        service may violate these Terms and could be subject to legal consequences. The
        project owner is not responsible for user-generated content.
      </>
    ),
  },
  {
    title: "Intellectual Property",
    anchor: "#intellectual-property",
    content: (
      <>
        All photo strips, GIFs, or other content generated through this application are{" "}
        <span className='italic'>copyright-free</span>. You are free to use, share, and
        publish them as you like, provided you comply with the terms of the platform where
        you post them.
      </>
    ),
  },
  {
    title: "Liability",
    anchor: "#liability",
    content: (
      <>
        The project owner is not liable for any damages arising from the use of this
        application, including but not limited to technical errors, device issues, or
        improper use of generated content. Users assume full responsibility for how they
        use the service and its outputs.
      </>
    ),
  },
  {
    title: "No Account Required",
    anchor: "#no-account-required",
    content: (
      <>
        This web app does not require user accounts, sign-in, or personal information to
        operate. All processing occurs on your device, and no persistent account data is
        stored.
      </>
    ),
  },
  {
    title: "Prohibited Use",
    anchor: "#prohibited-use",
    content: (
      <>
        You may not use this service to engage in illegal activities, infringe on others’
        rights, or generate content that violates applicable laws or platform rules.
        Misuse may result in suspension of access or legal action.
      </>
    ),
  },
  {
    title: "Governing Law",
    anchor: "#governing-law",
    content: (
      <>
        These Terms of Use are governed by the laws of the country in which the project
        owner resides. Any disputes arising from use of this application shall be resolved
        under these laws.
      </>
    ),
  },
  {
    title: "Policy Updates",
    anchor: "#policy-updates",
    content: (
      <>
        The project may update these Terms of Use at any time. Changes will be announced
        via a banner on the homepage with a link to the revised terms.
      </>
    ),
  },
  {
    title: "Contact",
    anchor: "#contact",
    content: (
      <>
        For questions or concerns regarding these Terms of Use, you can reach out via the
        project's author's <a href='mailto:narciso.juncedrick@gmail.com'>email address</a>
        .
      </>
    ),
  },
];
