import { Heart, Sparkles, TrendingUp } from "lucide-react";

const ForWhom = () => {
  const profiles = [
    {
      icon: Heart,
      title: "Profissionais em transição de carreira",
      description: "Você está em busca de uma mudança profissional com propósito e quer trabalhar com o que realmente importa."
    },
    {
      icon: Sparkles,
      title: "Profissionais da área materno-infantil",
      description: "Você já atua na área e quer se especializar ainda mais para oferecer um atendimento diferenciado."
    },
    {
      icon: TrendingUp,
      title: "Quem busca flexibilidade e autonomia",
      description: "Você sonha em ter seu próprio negócio, trabalhar de forma autônoma e ter mais controle sobre sua rotina."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          A Virada é a sua porta de entrada para o universo materno-infantil.
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          A Virada é um movimento para profissionais da saúde que sentem o chamado de trabalhar com propósito, apoiando famílias em um dos momentos mais transformadores da vida: a maternidade. É a sua chance de construir uma carreira sólida, com flexibilidade e realização, em um mercado que só cresce.
        </p>
        <p className="text-center text-foreground font-semibold text-xl mb-8">
          Esta edição especial foi pensada especialmente para:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <profile.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                {profile.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
