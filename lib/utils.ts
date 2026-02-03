import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (): {
  date: string;
  time: string;
  iso: string;
} => {
  const now = new Date();

  const date = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const iso = now.toISOString().slice(0, 19);

  return { date, time, iso };
};

export const getPatternCSS = (
  patternIndex: number,
  total: number,
  imagePath = "images/patterns.png",
): string => {
  return `url(${imagePath}) calc(${patternIndex - 1} * -100%) 0px / ${total * 100}% auto repeat`;
};
