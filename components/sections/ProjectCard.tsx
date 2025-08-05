import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  technologies,
  demoUrl,
  caseStudyUrl
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-gradient-card rounded-2xl overflow-hidden hover-3d glow-card transition-all duration-500 hover:glow-float">
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
          <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {demoUrl && (
              <Button variant="glass" size="sm" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4" />
                  Ver Demo
                </a>
              </Button>
            )}
            {caseStudyUrl && (
              <Button variant="accent" size="sm" asChild>
                <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Caso de Estudio
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold gradient-text-accent bg-card/80 backdrop-blur-sm rounded-full border border-accent/20">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-5" />
      </div>
    </div>
  );
};

export default ProjectCard;
