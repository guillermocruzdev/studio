
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Project } from "@/types/project";

export const project: Project = {
  id: "4",
  name: "AI Studio Project",
  description: "Un proyecto de IA que muestra las capacidades de desarrollo con herramientas modernas de IA.",
  image: PlaceHolderImages.find(p => p.id === 'project-4'),
  githubUrl: "https://github.com/guillermocruzdev/studio",
  demoUrl: "#",
};
