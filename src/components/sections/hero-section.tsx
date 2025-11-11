import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            Juan Pérez
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-xl mx-auto">
            Desarrollador de Software y escritor apasionado por la tecnología, creando soluciones elegantes a problemas complejos.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="#projects">
                Ver mis proyectos
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
