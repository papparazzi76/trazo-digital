import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "CEO, Fashion Boutique",
      company: "Elegancia Store",
      rating: 5,
      text: "El equipo superó todas nuestras expectativas. Nuestro sitio web no solo es hermoso, sino que las ventas aumentaron un 300% en los primeros tres meses.",
      avatar: "👩🏻‍💼"
    },
    {
      name: "Carlos Ramírez",
      role: "Director de Marketing",
      company: "TechCorp Solutions",
      rating: 5,
      text: "Profesionalismo absoluto. Entregaron un sitio web que refleja perfectamente nuestra identidad corporativa y ha mejorado significativamente nuestra presencia digital.",
      avatar: "👨🏻‍💻"
    },
    {
      name: "Ana Martín",
      role: "Artista Digital",
      company: "Portfolio Creativo",
      rating: 5,
      text: "Mi portfolio ahora es una obra de arte interactiva. Los efectos visuales y la experiencia de usuario son simplemente espectaculares. ¡Recomendado al 100%!",
      avatar: "👩🏻‍🎨"
    },
    {
      name: "Roberto Silva",
      role: "Fundador",
      company: "FinTech Innovate",
      rating: 5,
      text: "La aplicación móvil que desarrollaron para nosotros es increíble. La interfaz es intuitiva y nuestros usuarios la califican con 5 estrellas constantemente.",
      avatar: "👨🏻‍💼"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-foreground">Lo que Dicen</span>{" "}
            <span className="gradient-text">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Descubre sus experiencias trabajando con nosotros.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto hover:glow-card transition-all duration-300">
                    {/* Quote icon */}
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                      <Quote className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Rating stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author info */}
                    <div className="space-y-2">
                      <div className="text-6xl mb-4">{testimonial.avatar}</div>
                      <h4 className="text-lg font-bold gradient-text">{testimonial.name}</h4>
                      <p className="text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="glass"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="glass"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'bg-muted/50 hover:bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;