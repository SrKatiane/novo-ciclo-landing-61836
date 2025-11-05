import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logoVirada from "@/assets/logo-virada.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center md:py-20 sm:py-32 sm:items-start">
        <img 
          src={logoVirada} 
          alt="A Virada - Liga Maternar" 
          className="mx-auto mb-8 w-40 md:w-52 lg:w-64 drop-shadow-2xl"
        />
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
          O seu novo ciclo<br />começa aqui.
        </h1>
        
        <h2 className="text-xl md:text-3xl mb-12 text-white/90 font-light max-w-3xl mx-auto drop-shadow-md">
          Duas formações profissionais,<br />uma nova fase da sua vida.
        </h2>
        
        <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg">
          <span className="text-lg font-medium">Entenda como</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
