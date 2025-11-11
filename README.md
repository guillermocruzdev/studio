# OnePageFolio: Portafolio Personal y Blog

Este es un sitio web moderno de una sola página para portafolio y blog, construido con Next.js y estilizado con Tailwind CSS y componentes de ShadCN UI. Está diseñado para ser fácilmente personalizable y para mostrar tus proyectos y artículos de una manera limpia y elegante.

## Características

- **Diseño Responsivo**: Se ve genial en todos los dispositivos, desde teléfonos móviles hasta computadoras de escritorio.
- **Modo Claro y Oscuro**: Cambia fácilmente entre temas claros y oscuros.
- **Gestión de Contenido**: Las publicaciones del blog y los proyectos se almacenan en archivos separados en `src/content`, lo que facilita agregar, actualizar o eliminar contenido sin tocar los componentes principales.
- **Blog**: Una sección dedicada para compartir tus ideas y experiencia.
- **Muestra de Proyectos**: Una sección para mostrar tu trabajo con enlaces a GitHub y demostraciones en vivo.
- **Formulario de Contacto**: Un formulario de contacto simple y efectivo que utiliza el cliente de correo electrónico predeterminado del usuario.

## Primeros Pasos

Para empezar a personalizar este portafolio:

1.  **Edita tu información personal**: Cambia el nombre y la descripción en `src/components/sections/hero-section.tsx`.
2.  **Agrega tus proyectos**: Ve a la carpeta `src/content/projects/` y edita los archivos existentes o agrega nuevos. Sigue la estructura del tipo `Project`.
3.  **Escribe tus propias publicaciones de blog**: Modifica o crea nuevos archivos en `src/content/blog/`. Las publicaciones son archivos `.tsx` que te permiten usar JSX para el contenido.
4.  **Actualiza los enlaces a redes sociales**: Cambia los enlaces en `src/components/sections/contact-section.tsx`.
5.  **Personaliza el estilo**: Ajusta los colores y fuentes en `src/app/globals.css` y `tailwind.config.ts`.

## Estructura del Proyecto

- `src/app/`: Contiene las páginas principales y el layout de la aplicación (App Router de Next.js).
- `src/components/`: Componentes reutilizables de React (UI, layout, secciones).
- `src/content/`: Aquí es donde vive todo el contenido de tu blog y proyectos.
  - `src/content/blog/`: Cada archivo es una publicación de blog.
  - `src/content/projects/`: Cada archivo es un proyecto.
- `src/lib/`: Contiene utilidades y la configuración de datos.
- `src/styles/`: Archivos de estilo globales.
