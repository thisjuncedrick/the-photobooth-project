import { type Icon } from "@tabler/icons-react";

export interface Content {
  icon: Icon;
  header: string;
  body: string;
}

export type FooterStyle = "isBold" | "isItalic" | "isUppercase";
