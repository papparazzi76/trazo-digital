import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary))_0%,transparent_30%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--accent))_0%,transparent_30%)] opacity-20" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-lg transform rotate-45 animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" 
           style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="space-y-8 animate-fade-up">
          {/* Main headline */}
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">¿Listo para</span>
            <br />
            <span className="gradient-text">Transformar</span>{" "}
            <span className="text-foreground">tu</span>
            <br />
            <span className="gradient-text-accent">Presencia Digital?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Únete a más de 100+ empresas que han confiado en nosotros para 
            crear experiencias digitales extraordinarias que impulsan su crecimiento.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100+</div>
              <div className="text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">98%</div>
              <div className="text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-muted-foreground">Soporte Técnico</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group text-lg"
            >
              Comenzar Mi Proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              className="group text-lg"
            >
              Solicitar Consulta Gratuita
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-border/20">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-accent" />
              <span>hola@designstudio.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-accent" />
              <span>+34 900 123 456</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16">
            <p className="text-muted-foreground text-sm mb-6">Empresas que confían en nosotros:</p>
            <div className="flex justify-center items-center gap-8 opacity-50">
              <div className="w-20 h-8 bg-muted/20 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-20 h-8 bg-muted/20 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-20 h-8 bg-muted/20 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-20 h-8 bg-muted/20 rounded flex items-center justify-center text-xs">LOGO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;