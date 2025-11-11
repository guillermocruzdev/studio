import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { notFound } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/content/blog";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24">
        <article className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Link href="/#blog" className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary mb-8">
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Link>

            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
            
            {post.image && (
              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src={post.image.imageUrl}
                  alt={post.image.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={post.image.imageHint}
                />
              </div>
            )}
            
            <div className="mt-8 text-foreground/90 space-y-6">
                {post.content}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
