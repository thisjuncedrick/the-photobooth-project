import { Content } from "@/types";
import { IconCamera, IconDownload, IconSettings } from "@tabler/icons-react";

const MarketingImages = [
  {
    src: "/images/pexels-cottonbro-4858865.jpg",
    alt: "Man in Black Framed Eyeglasses Holding Black Camera",
  },
  {
    src: "/images/pexels-cottonbro-4858868.jpg",
    alt: "Woman in Pink Shirt Holding Black and Silver Camera",
  },
  {
    src: "/images/pexels-cottonbro-4858878.jpg",
    alt: "Man in Pink Button Up Shirt Holding Black Smartphone",
  },
  {
    src: "/images/pexels-cottonbro-4858880.jpg",
    alt: "Woman in Pink Collared Shirt Holding Black Camera",
  },
];

const MarketingFeatures: Content[] = [
  {
    header: "Camera Capture",
    body: "Initiate camera capture with broad compatibility across standard webcam devices. Seamlessly connect and begin shooting with minimal setup required.",
    icon: IconCamera,
  },
  {
    header: "Advanced Controls",
    body: "Apply Instagram-inspired CSS filters, configure countdown timers, and select between single-shot or burst mode for optimal capture flexibility.",
    icon: IconSettings,
  },
  {
    header: "Export & Customize",
    body: "Design custom photo strip frames, add personalized text overlays, and export as photo strips, animated GIFs, or send directly to print.",
    icon: IconDownload,
  },
];

export const Marketing = {
  Images: MarketingImages,
  Features: MarketingFeatures,
};
