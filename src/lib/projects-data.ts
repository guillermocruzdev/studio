import { PlaceHolderImages } from "@/lib/placeholder-images";

export const projects = [
    {
      id: "4",
      name: "AI Studio Project",
      description: "Un proyecto de IA que muestra las capacidades de desarrollo con herramientas modernas de IA.",
      image: PlaceHolderImages.find(p => p.id === 'project-4'),
      githubUrl: "https://github.com/guillermocruzdev/studio",
      demoUrl: "#",
    },
    {
      id: "3",
      name: "Landing Page para Startup",
      description: "Diseño y desarrollo de una landing page moderna y responsiva para una startup de tecnología, optimizada para conversiones.",
      image: PlaceHolderImages.find(p => p.id === 'project-3'),
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "2",
      name: "App Móvil de Tareas",
      description: "Una aplicación móvil multiplataforma para la gestión de tareas diarias, desarrollada con React Native.",
      image: PlaceHolderImages.find(p => p.id === 'project-2'),
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "1",
      name: "Panel de Administración",
      description: "Un completo panel de administración con analíticas, gestión de usuarios y reportes, construido con Next.js y ShadCN/UI.",
      image: PlaceHolderImages.find(p => p.id === 'project-1'),
      githubUrl: "#",
      demoUrl: "#",
    },
];
