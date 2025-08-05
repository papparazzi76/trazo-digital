import { Code, Palette, Smartphone, Zap, Globe, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Sitios web modernos, rápidos y optimizados para SEO con las últimas tecnologías."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño UI/UX",
      description: "Interfaces elegantes y experiencias de usuario que convierten visitantes en clientes."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Móviles",
      description: "Aplicaciones nativas y PWA con rendimiento excepcional y diseño premium."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "E-commerce",
      description: "Tiendas online potentes con sistemas de pago seguros y gestión avanzada."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimización",
      description: "Mejoramos la velocidad, SEO y conversiones de tu sitio web existente."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consultoría",
      description: "Estrategia digital personalizada para hacer crecer tu negocio online."
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-foreground">Nuestros</span>{" "}
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones digitales completas para llevar tu negocio 
            al siguiente nivel con tecnología de vanguardia.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-card rounded-2xl border border-border/50 hover-3d glow-card transition-all duration-500 hover:glow-float animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-primary rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:gradient-text transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect line */}
              <div className="w-0 h-0.5 bg-gradient-primary mt-6 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 glass rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-muted-foreground">
              ¿Tienes un proyecto en mente? Hablemos
            </span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;