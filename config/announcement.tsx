import Link from "next/link";

export const announcements = [
  <p>
    We have updated our{" "}
    <Link href='/privacy' className='font-bold underline'>
      privacy policy
    </Link>{" "}
    to reflect the introduction of privacy-preserving analytics.
  </p>,
  <p>
    New{" "}
    <Link href='/booth' className='font-bold underline'>
      photo strip frame sets
    </Link>{" "}
    are now available in the photobooth experience.
  </p>,
];
