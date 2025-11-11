
import type { ImagePlaceholder } from "@/lib/placeholder-images";

export type Project = {
  id: string;
  name: string;
  description: string;
  image?: ImagePlaceholder;
  githubUrl: string;
  demoUrl: string;
};
