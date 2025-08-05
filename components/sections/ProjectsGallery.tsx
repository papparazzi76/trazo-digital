"use client"; // Necesario por el uso de useState

import { useState } from "react";
import ProjectCard from "../ProjectCard";
import { Button } from "@/components/ui/button";

// Importa las imágenes
import projectLaTentacion from "../../../public/images/projects/Captura de pantalla 2025-07-24 112226.png";
import projectBienestarNatural from "../../../public/images/projects/Captura de pantalla 2025-07-24 112325.png";
import projectTulsi from "../../../public/images/projects/Captura de pantalla 2025-07-24 112422.png";
// ... (importa el resto de imágenes de la misma forma)

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "La Tentación",
      description: "Sitio web vibrante para empresa de gofres premium con experiencia visual atractiva.",
      image: projectLaTentacion.src,
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    },
    {
      id: 2,
      title: "Solo por hoy",
      description: "Plataforma de bienestar integral con reservas online y experiencia de usuario serena.",
      image: projectBienestarNatural.src,
      category: "Bienestar",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
        id: 3,
        title: "Tulsi - Indian Restaurant",
        description: "Sitio web elegante para restaurante indio con galería visual y sistema de reservas.",
        image: projectTulsi.src,
        category: "Restaurante",
        technologies: ["React", "Sanity CMS", "Vercel", "Stripe"],
      },
    // ... (añade el resto de proyectos, usando .src para las imágenes)
  ];

  const categories = ["all", "E-commerce", "Bienestar", "Restaurante", "Corporativo", "Inmobiliaria", "Gaming", "Portfolio", "Turismo", "Entretenimiento"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* ... (el resto del JSX se mantiene igual) ... */}
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
              style={{ animationDelay: `${index * 0.2}s` }}
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
