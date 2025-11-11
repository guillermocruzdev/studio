
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { BlogPost } from "@/types/blog";
import React from 'react';

export const post: BlogPost = {
    id: "3",
    slug: "desplegando-en-vercel-de-cero-a-heroe",
    title: "Desplegando en Vercel: De Cero a Héroe",
    description: "Aprende a desplegar tus aplicaciones Next.js en Vercel de forma rápida y eficiente, con consejos de optimización.",
    image: PlaceHolderImages.find(p => p.id === 'blog-post-3'),
    content: <p>Contenido del artículo sobre Vercel próximamente...</p>
};
