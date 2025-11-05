import { Check } from "lucide-react";
import maternidadeImg from "../assets/testimonials/consultoria.png";
import tapingImg from "../assets/testimonials/taping.png";


const Formations = () => {
  const formations = [
    {
      title: "Formação em Consultoria em Amamentação",
      image: maternidadeImg,
      description: "Formação completa para atuar com técnica, sensibilidade e segurança no aleitamento materno.",
      features: [
        "Políticas públicas e diretrizes do aleitamento.",
        "NBCAL e IBFAN: normas que protegem a amamentação.",
        "Anatomia e fisiologia das mamas.",
        "Técnicas de aconselhamento e escuta ativa.",
        "Aspectos emocionais que interferem na lactação.",
        "Avaliação da puérpera e do recém-nascido.",
        "Manejo de intercorrências: mastite, ductos, hiperlactação e mais.",
        "Alimentação materna e nutrição na amamentação.",
        "Avaliação de frênulo lingual.",
        "Papel e ética da consultora em amamentação.",
        "Empreendedorismo e posicionamento profissional.",
        "Casos clínicos e prática supervisionada."
      ]
    },
    {
      title: "Curso de Taping + Drenagem Aplicados à Gestação, Pós-Parto e Amamentação",
      image: tapingImg,
      description: "Formação teórico-prática para aplicar taping e drenagem com segurança e resultados reais no cuidado materno.",
      features: [
        "Fundamentos e princípios do taping terapêutico.",
        "Estimulação tegumentar e alívio de dores.",
        "Tipos de bandagem e aplicações clínicas.",
        "Indicações, contraindicações e cuidados.",
        "Preparo da pele e técnicas de aplicação.",
        "Raciocínio clínico e planejamento do atendimento.",
        "Aplicações em gestantes: dor lombar, edema e desconfortos.",
        "Aplicações no pós-parto e amamentação.",
        "Teoria e prática da drenagem linfática manual.",
        "Sequência de manobras e ritmo de execução.",
        "Combinação de taping + drenagem para melhores resultados.",
        "Prática supervisionada e discussão de casos clínicos."
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
