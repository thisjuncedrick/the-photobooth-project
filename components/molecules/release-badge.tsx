import { site } from "@/config/site";
import { Badge } from "../ui/badge";

const StatusIndicator = () => (
  <span className='relative flex size-2' aria-hidden='true'>
    <span className='bg-primary absolute inline-flex size-full animate-ping rounded-full'></span>
    <span className='bg-primary relative inline-flex size-full rounded-full'></span>
  </span>
);

const ReleaseBadge = () => {
  const { releaseStatus, releaseVersion } = site;
  if (!releaseStatus || !releaseVersion) return null;

  return (
    <Badge variant='secondary' className='flex h-auto items-center gap-2 px-3 py-1'>
      <StatusIndicator />
      <span className='font-mono uppercase'>
        v{releaseVersion} {releaseStatus}
      </span>
    </Badge>
  );
};

export { ReleaseBadge };
