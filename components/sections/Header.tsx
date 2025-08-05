"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center glass rounded-xl p-2">
        <Image src="/LOGOTRAZOb.png" alt="Logo de Trazo Studio" width={100} height={24} />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo('projects')} className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">Proyectos</button>
          <button onClick={() => scrollTo('services')} className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">Servicios</button>
          <button onClick={() => scrollTo('pricing')} className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">Precios</button>
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
