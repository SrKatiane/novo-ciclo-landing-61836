import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const Investment = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Data final: 21 de novembro de 2025, às 23:59
    const targetDate = new Date('2025-11-21T23:59:59');
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="investimento" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Investimento Especial da Virada
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Uma oportunidade única de transformar sua carreira com condições exclusivas
        </p>
        
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
          <div className="bg-gradient-to-r from-primary to-accent p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-6 h-6 text-primary-foreground" />
              <p className="text-primary-foreground font-semibold text-lg">Oferta termina em:</p>
            </div>
            <div className="flex gap-2 md:gap-4 justify-center items-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-background/20 rounded-lg p-2 md:p-3 min-w-[60px] md:min-w-[70px]">
                    <span className="text-2xl md:text-3xl font-bold text-primary-foreground">{value}</span>
                  </div>
                  <span className="text-xs text-primary-foreground/90 uppercase mt-1 block">
                    {unit === 'days' ? 'dias' : unit === 'hours' ? 'horas' : unit === 'minutes' ? 'min' : 'seg'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">Valor individual das formações:</p>
              <p className="text-2xl text-muted-foreground line-through mb-2">R$ 3.380,00</p>
              <p className="text-sm text-accent font-semibold mb-4">Desconto exclusivo da Campanha de Virada</p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">R$ 2.700</p>
              <p className="text-lg text-muted-foreground">à vista no PIX ou em até 12x de R$ 270 no cartão de crédito</p>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4 text-foreground">No combo você leva:</h3>
              <ul className="space-y-3">
                {[
                  "Formação completa em Consultoria em Amamentação",
                  "Formação completa em Taping + Drenagem Linfática",
                  "Material didático e apostilas de ambas as formações",
                  "Certificado de conclusão para cada formação",
                  "Grupo de suporte vitalício"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground text-xl py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a 
                href="https://wa.me/5579991238000?text=Quero%20garantir%20minha%20vaga%20na%20Virada%20da%20Liga%20Maternar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garantir minha vaga agora
              </a>
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              🔒 Pagamento 100% seguro | Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
