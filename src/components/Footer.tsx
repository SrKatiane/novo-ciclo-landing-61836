import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Pronta para dar a virada?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Esta é a sua chance de começar 2026 com uma nova profissão, trabalhando com propósito e transformando vidas.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a 
                href="https://wa.me/5579991238000?text=Quero%20garantir%20minha%20vaga%20na%20Virada%20da%20Liga%20Maternar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hidden md:inline text-lg">Garantir minha vaga agora</span>
                <span className="md:hidden text-base">Garantir vaga agora</span>
              </a>
            </Button>
          </div>
          
          <div className="border-t border-border pt-8 mt-12">
            <p className="text-sm text-muted-foreground">
              © 2025 Liga Maternar. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Uma jornada de transformação e propósito para profissionais da saúde que querem fazer a diferença.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
