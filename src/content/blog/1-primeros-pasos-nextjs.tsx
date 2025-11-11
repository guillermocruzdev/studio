
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { BlogPost } from "@/types/blog";
import React from 'react';

export const post: BlogPost = {
    id: "1",
    slug: "primeros-pasos-con-nextjs-14",
    title: "Primeros pasos con Next.js 14",
    description: "Una guía completa para iniciar tu primer proyecto con el App Router y las últimas funcionalidades de Next.js.",
    image: PlaceHolderImages.find(p => p.id === 'blog-post-1'),
    content: <p>Contenido del artículo sobre Next.js 14 próximamente...</p>
};
