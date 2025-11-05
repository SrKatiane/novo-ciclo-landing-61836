import { Gift, Sparkles } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Gift className="w-12 h-12 text-accent" />
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
                🎁 BÔNUS EXCLUSIVO PARA AS 5 PRIMEIRAS MATRÍCULAS
              </h2>
              
              <p className="text-center text-lg text-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                Garanta sua vaga entre as primeiras e ganhe o <strong>Workshop Instagram na Prática</strong>, que te ensina a aplicar o marketing digital na sua nova rotina profissional.
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">
                  De R$ 497
                </span>
                <span className="text-4xl font-bold text-accent">
                  por R$ 0
                </span>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                *Bônus limitado às 5 primeiras matrículas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
