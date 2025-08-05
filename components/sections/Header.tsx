import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/LOGOTRAZOb.png"; // RUTA CORREGIDA

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center glass rounded-xl p-2">
        <img src={Logo} alt="Logo de Trazo Studio" className="h-8" />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a onClick={() => scrollTo('projects')} className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">Proyectos</a>
          <a onClick={() => scrollTo('services')} className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
          <a onClick={() => scrollTo('pricing')} className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">Precios</a>
        </nav>
        <Button variant="accent" size="sm" className="group">
          Contactar
          <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
