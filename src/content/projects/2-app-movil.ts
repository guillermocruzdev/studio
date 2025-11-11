
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Project } from "@/types/project";

export const project: Project = {
  id: "2",
  name: "App Móvil de Tareas",
  description: "Una aplicación móvil multiplataforma para la gestión de tareas diarias, desarrollada con React Native.",
  image: PlaceHolderImages.find(p => p.id === 'project-2'),
  githubUrl: "#",
  demoUrl: "#",
};
