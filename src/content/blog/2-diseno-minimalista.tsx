
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { BlogPost } from "@/types/blog";
import React from 'react';

export const post: BlogPost = {
    id: "2",
    slug: "el-arte-del-diseno-minimalista",
    title: "El Arte del Diseño Minimalista",
    description: "Cómo 'menos es más' puede mejorar la experiencia de usuario y la estética de tus aplicaciones web.",
    image: PlaceHolderImages.find(p => p.id === 'blog-post-2'),
    content: <p>Contenido del artículo sobre diseño minimalista próximamente...</p>
};
