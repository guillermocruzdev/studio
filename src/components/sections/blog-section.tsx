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
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { blogPosts } from "@/content/blog";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 6);

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
          {latestPosts.map((post) => (
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
        {blogPosts.length > 6 && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                Ver todas las entradas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
