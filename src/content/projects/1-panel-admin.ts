
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Project } from "@/types/project";

export const project: Project = {
  id: "1",
  name: "Panel de Administración",
  description: "Un completo panel de administración con analíticas, gestión de usuarios y reportes, construido con Next.js y ShadCN/UI.",
  image: PlaceHolderImages.find(p => p.id === 'project-1'),
  githubUrl: "#",
  demoUrl: "#",
};
