import { Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/LOGOTRAZOb.png"; // RUTA CORREGIDA

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div>
              <img src={Logo} alt="Logo de Trazo Studio" className="h-8 mb-4" />
              <p className="text-muted-foreground leading-relaxed">
                Creamos experiencias digitales extraordinarias que transforman
                ideas en realidades impactantes.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-card transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Desarrollo Web",
                "Diseño UI/UX",
                "Apps Móviles",
                "E-commerce",
                "Consultoría Digital",
                "Optimización SEO"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:gradient-text"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {[
                "Sobre Nosotros",
                "Nuestro Equipo",
                "Casos de Éxito",
                "Blog",
                "Carreras",
                "Contacto"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:gradient-text"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Calle Innovación 123</p>
                  <p>28001 Madrid, España</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:hola@designstudio.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  hola@designstudio.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+34900123456"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +34 900 123 456
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Design Studio. Todos los derechos reservados.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary" />
    </footer>
  );
};

export default Footer;
