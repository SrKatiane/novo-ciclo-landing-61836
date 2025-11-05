import { BookOpen, Users, Award, Video } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Material didático completo",
      description: "Apostilas, templates e recursos prontos para usar no seu dia a dia profissional."
    },
    {
      icon: Video,
      title: "Aulas Presenciais e Práticas",
      description: "Nossas formações são intensivas e presenciais, unindo teoria profunda com prática supervisionada para que você saia preparado(a) para atuar."
    },
    {
      icon: Users,
      title: "Grupo de suporte vitalício",
      description: "Você terá sempre uma comunidade de apoio. Networking, trocas e suporte permanente."
    },
    {
      icon: Award,
      title: "Certificado de conclusão",
      description: "Certificado reconhecido que comprova sua formação e te habilita para atuar."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Tudo o que você vai levar
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Além das formações completas, você terá acesso a benefícios exclusivos:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mb-4 mx-auto">
                <benefit.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
