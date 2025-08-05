"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

// Las imágenes se referenciarán con rutas absolutas desde /public
// No es necesario importarlas aquí

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "La Tentación",
      description: "Sitio web vibrante para empresa de gofres premium con experiencia visual atractiva.",
      image: "/images/projects/Captura de pantalla 2025-07-24 112226.png",
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    },
    {
      id: 2,
      title: "Solo por hoy",
      description: "Plataforma de bienestar integral con reservas online y experiencia de usuario serena.",
      image: "/images/projects/Captura de pantalla 2025-07-24 112325.png",
      category: "Bienestar",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
        id: 3,
        title: "Tulsi - Indian Restaurant",
        description: "Sitio web elegante para restaurante indio con galería visual y sistema de reservas.",
        image: "/images/projects/Captura de pantalla 2025-07-24 112422.png",
        category: "Restaurante",
        technologies: ["React", "Sanity CMS", "Vercel", "Stripe"],
      },
      {
        id: 4,
        title: "Imprenta Gráficas Celeste",
        description: "Portal corporativo para servicios de impresión con calculadora de precios y gestión de pedidos.",
        image: "/images/projects/Captura de pantalla 2025-07-24 112444.png",
        category: "Corporativo",
        technologies: ["Vue.js", "Laravel", "MySQL", "PayPal"],
      },
      {
        id: 5,
        title: "PropTools",
        description: "Herramientas profesionales para venta de inmuebles con IA integrada y gestión de propiedades.",
        image: "/images/projects/Captura de pantalla 2025-07-24 112536.png",
        category: "Inmobiliaria",
        technologies: ["React", "Python", "Django", "AI/ML"],
      },
      {
        id: 6,
        title: "11 contra once",
        description: "Plataforma de comunidad futbolística con gaming, predicciones y recompensas.",
        image: "/images/projects/Captura de pantalla 2025-07-24 112611.png",
        category: "Gaming",
        technologies: ["React", "Node.js", "WebSocket", "Redis"],
      },
      {
        id: 7,
        title: "Gastro Lava",
        description: "Sitio web sofisticado para restaurante gourmet con experiencia culinaria premium.",
        image: "/images/projects/Captura de pantalla 2025-07-24 112643.png",
        category: "Restaurante",
        technologies: ["Next.js", "Contentful", "Vercel", "Analytics"],
      },
      {
        id: 8,
        title: "Estudio Creativo",
        description: "Portfolio minimalista para estudio de diseño con showcase de proyectos y experiencia visual limpia.",
        image: "/images/projects/Captura de pantalla 2025-07-24 112804.png",
        category: "Portfolio",
        technologies: ["React", "Three.js", "GSAP", "Netlify"],
      },
      {
        id: 9,
        title: "Rebeca H. Bruña",
        description: "Portal inmobiliario de lujo especializado en propiedades exclusivas en Valladolid.",
        image: "/images/projects/Captura de pantalla 2025-07-24 112835.png",
        category: "Inmobiliaria",
        technologies: ["React", "Node.js", "MongoDB", "Maps API"],
      },
      {
        id: 10,
        title: "Así es Valladolid",
        description: "Portal turístico oficial con experiencias inmersivas, videos y guías culturales.",
        image: "/images/projects/Captura de pantalla 2025-07-24 113000.png",
        category: "Turismo",
        technologies: ["Vue.js", "Strapi", "Video API", "PWA"],
      },
      {
        id: 11,
        title: "Iadomus",
        description: "Agencia inmobiliaria moderna con sistema avanzado de búsqueda de propiedades.",
        image: "/images/projects/Captura de pantalla 2025-07-25 084331.png",
        category: "Inmobiliaria",
        technologies: ["React", "Node.js", "MongoDB", "Maps API"],
      },
      {
        id: 12,
        title: "El Mago Toño",
        description: "Sitio web teatral para mago con galería de espectáculos y sistema de contratación.",
        image: "/images/projects/Captura de pantalla 2025-07-25 084440.png",
        category: "Entretenimiento",
        technologies: ["React", "TypeScript", "Sanity CMS", "Vercel"],
      },
      {
        id: 13,
        title: "Chef Mariscal",
        description: "Portal profesional de asesoramiento gastronómico para restaurantes.",
        image: "/images/projects/Captura de pantalla 2025-07-25 084720.png",
        category: "Restaurante",
        technologies: ["Next.js", "Strapi", "PostgreSQL", "AWS"],
      }
  ];

  const categories = ["all", "E-commerce", "Bienestar", "Restaurante", "Corporativo", "Inmobiliaria", "Gaming", "Portfolio", "Turismo", "Entretenimiento"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-background-secondary/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Nuestros</span>{" "}
            <span className="text-foreground">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada proyecto es una historia de éxito. Descubre cómo transformamos 
            ideas en experiencias digitales extraordinarias.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "hero" : "glass"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="capitalize"
            >
              {category === "all" ? "Todos" : category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
