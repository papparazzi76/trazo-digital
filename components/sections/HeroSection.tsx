import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Diseñadora web de Trazo Studio trabajando en un proyecto de branding digital"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-accent animate-glow" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Trazo Studio Design
              </span>
              <Sparkles className="w-6 h-6 text-accent animate-glow" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="gradient-text">Creamos</span>
              <br />
              <span className="text-foreground">Experiencias</span>
              <br />
              <span className="gradient-text-accent">Digitales</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transformamos ideas en sitios web extraordinarios que cautivan,
              convierten y elevan tu marca al siguiente nivel digital.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProjects}
              className="group"
            >
              Ver Nuestros Proyectos
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              variant="glass"
              size="xl"
              className="group"
            >
              Solicitar Presupuesto
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-float"
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-accent rounded-lg animate-float opacity-20"
           style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-secondary/30 transform rotate-45 animate-float"
           style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;
