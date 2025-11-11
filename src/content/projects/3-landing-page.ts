
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Project } from "@/types/project";

export const project: Project = {
  id: "3",
  name: "Landing Page para Startup",
  description: "Diseño y desarrollo de una landing page moderna y responsiva para una startup de tecnología, optimizada para conversiones.",
  image: PlaceHolderImages.find(p => p.id === 'project-3'),
  githubUrl: "#",
  demoUrl: "#",
};
