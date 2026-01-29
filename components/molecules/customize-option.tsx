import { useId } from "react";

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

const CustomizeControlSection = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={cn("[counter-reset:section]", className)} {...props} />
);

interface CustomizeControlProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
}

const CustomizeControl = ({ label, className, children }: CustomizeControlProps) => {
  const id = useId();
  return (
    <>
      <section
        aria-labelledby={id}
        className={cn("flex flex-col gap-3 [counter-increment:section]", className)}
      >
        <header>
          <h3
            id={id}
            className={cn(
              "text-primary text-sm leading-relaxed font-medium tracking-[0.08em] uppercase",
              "before:mr-2 before:tabular-nums before:content-[counter(section,decimal-leading-zero)'.']",
            )}
          >
            {label}
          </h3>
        </header>
        {children}
      </section>
      <Separator />
    </>
  );
};

export { CustomizeControl, CustomizeControlSection };
