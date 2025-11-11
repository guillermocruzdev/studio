import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Hablemos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en contactarme.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">O encuéntrame en mis redes sociales</p>
            <div className="flex justify-center gap-6">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
