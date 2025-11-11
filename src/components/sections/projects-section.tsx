import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "1",
    name: "Panel de Administración",
    description: "Un completo panel de administración con analíticas, gestión de usuarios y reportes, construido con Next.js y ShadCN/UI.",
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
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
    id: "3",
    name: "Landing Page para Startup",
    description: "Diseño y desarrollo de una landing page moderna y responsiva para una startup de tecnología, optimizada para conversiones.",
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
    githubUrl: "#",
    demoUrl: "#",
  },
];

export function ProjectsSection() {
  const latestProjects = projects.slice(-6).reverse();

  return (
    <section id="projects" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Mis Proyectos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Una selección de proyectos en los que he trabajado, demostrando mis habilidades y pasión por el desarrollo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 group">
              {project.image && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-start gap-4">
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {projects.length > 6 && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/projects">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
