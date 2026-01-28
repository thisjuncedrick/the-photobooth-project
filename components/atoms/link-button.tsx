import { VariantProps } from "class-variance-authority";
import Link from "next/link";

import { buttonVariants } from "../ui/button";

import { cn } from "@/lib/utils";

const LinkButton = ({
  variant,
  size,
  className,
  ...props
}: React.ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) => (
  <Link
    className={cn(
      buttonVariants({
        variant,
        size,
        className,
      }),
    )}
    {...props}
  />
);

export { LinkButton };
