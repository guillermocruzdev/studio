
import type { ImagePlaceholder } from "@/lib/placeholder-images";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: ImagePlaceholder;
  content: React.ReactNode;
};
