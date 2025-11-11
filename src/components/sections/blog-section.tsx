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
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    slug: "primeros-pasos-con-nextjs-14",
    title: "Primeros pasos con Next.js 14",
    description: "Una guía completa para iniciar tu primer proyecto con el App Router y las últimas funcionalidades de Next.js.",
    image: PlaceHolderImages.find(p => p.id === 'blog-post-1'),
  },
  {
    id: "2",
    slug: "el-arte-del-diseno-minimalista",
    title: "El Arte del Diseño Minimalista",
    description: "Cómo 'menos es más' puede mejorar la experiencia de usuario y la estética de tus aplicaciones web.",
    image: PlaceHolderImages.find(p => p.id === 'blog-post-2'),
  },
  {
    id: "3",
    slug: "desplegando-en-vercel-de-cero-a-heroe",
    title: "Desplegando en Vercel: De Cero a Héroe",
    description: "Aprende a desplegar tus aplicaciones Next.js en Vercel de forma rápida y eficiente, con consejos de optimización.",
    image: PlaceHolderImages.find(p => p.id === 'blog-post-3'),
  },
  {
    id: "4",
    slug: "4-secretos-de-tu-computadora",
    title: "4 Secretos de tu Computadora que Cambiarán Cómo la Ves",
    description: "Desmitifica el funcionamiento interno de tu computadora y cambia para siempre la forma en que la ves con estos cuatro conceptos fundamentales.",
    image: PlaceHolderImages.find(p => p.id === 'blog-post-4'),
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Mi Blog Personal
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aquí comparto mis ideas, aprendizajes y reflexiones sobre desarrollo, diseño y tecnología.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 group">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-semibold text-accent group-hover:text-primary transition-colors duration-300">
                    Leer más <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
