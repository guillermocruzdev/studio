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
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts } from "@/content/blog";

export default function BlogListPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24">
        <section id="blog" className="py-20 sm:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                Mi Blog Personal
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Aquí comparto mis ideas, aprendizajes y reflexiones sobre desarrollo, diseño y tecnología.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                  <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 border-transparent hover:border-primary/50">
                    {post.image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
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
                      <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{post.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <span className="text-sm font-semibold text-primary">
                        Leer más <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
