"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const getFooterLinks = (pathname: string) => {
  if (pathname === '/') {
    return [
      { href: "#blog", label: "Blog" },
      { href: "#projects", label: "Proyectos" },
      { href: "#contact", label: "Contacto" },
    ];
  }
  return [
    { href: "/#blog", label: "Blog" },
    { href: "/#projects", label: "Proyectos" },
    { href: "/#contact", label: "Contacto" },
  ];
};

export function Footer() {
  const pathname = usePathname();
  const footerLinks = getFooterLinks(pathname);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {year} OnePageFolio. Todos los derechos reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm hover:underline underline-offset-4">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}