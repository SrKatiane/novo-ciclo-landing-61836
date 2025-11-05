import { Check } from "lucide-react";
import maternidadeImg from "../assets/testimonials/consultoria.png";
import tapingImg from "../assets/testimonials/taping.png";


const Formations = () => {
  const formations = [
    {
      title: "Consultoria em Amamentação",
      image: maternidadeImg,
      description: "Capacite-se profissionalmente para apoiar mães no processo de amamentação. Uma formação presencial completa, com base em evidências científicas, muita prática e visão de negócio.",
      features: [
        "Anatomia e fisiologia da lactação",
        "Manejo clínico da amamentação",
        "Principais dificuldades e como solucioná-las",
        "Comunicação empática e acolhimento",
        "Como estruturar sua consultoria"
      ]
    },
    {
      title: "Taping + Drenagem Linfática",
      image: tapingImg,
      description: "Domine a aplicação do Taping e da Drenagem Linfática Manual na gestação, pós-parto e como apoio à amamentação. Uma formação presencial e prática para você oferecer um cuidado complementar e muito requisitado.",
      features: [
        "Fundamentos do taping terapêutico",
        "Aplicações em gestantes (dor, edema, postura)",
        "Aplicações em puérperas (diástase, cesariana)",
        "Drenagem linfática no pós-parto",
        "Protocolos de segurança e contraindicações"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          O que você vai aprender?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Duas formações completas para você dominar e se destacar no mercado materno-infantil.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {formations.map((formation, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {formation.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {formation.description}
                </p>
                
                <ul className="space-y-3">
                  {formation.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;
