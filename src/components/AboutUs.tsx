import magdaImg from "@/assets/magda.png";
import sandraImg from "@/assets/sandra.png";
import brunaImg from "@/assets/bruna.png";

const AboutUs = () => {
  const team = [
    {
      name: "Magda Solange Dória Vieira",
      title: "Enfermeira Sanitarista e Neonatologista",
      description: "Atua há décadas na saúde materna e do recém-nascido. Avaliadora da Iniciativa Hospital Amigo da Criança pelo Ministério da Saúde e tutora do Método Canguru, Magda traz à Liga Maternar a experiência, a profundidade e o compromisso com a qualidade que marcam cada curso.",
      image: magdaImg,
    },
    {
      name: "Sandra Rafaela",
      title: "Enfermeira Obstetra e Consultora em Amamentação",
      description: "Tem ampla experiência em assistência hospitolar, atendimento domiciliar e formação de profissionais. É cofundadora da Liga Maternar, onde une técnica, didática e experiência prática para formar profissionais capacitados para atuar com segurança e propósito.",
      image: sandraImg,
    },
    {
      name: "Bruna Hora",
      title: "Gestão e Marketing",
      description: "Com experiência em gestão, marketing e desenvolvimento de negócios, Bruna é quem fomenta o empreendedorismo nas profissionais da saúde.",
      image: brunaImg,
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#fdf7f9' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#4e9b6c' }}>
            Sobre Nós
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A Liga Maternar nasceu do encontro entre profissionais que transformaram o cuidado em propósito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-6 overflow-hidden"
                  style={{ 
                    border: '4px solid #ad72ac',
                    boxShadow: '0 4px 20px rgba(173, 114, 172, 0.2)'
                  }}
                >
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#4e9b6c' }}>
                  {member.name}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#ad72ac' }}>
                  {member.title}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Juntas, Magda, Sandra e Bruna formam a essência da Liga Maternar, um espaço de formação, 
            acolhimento e transformação para quem sente o chamado de cuidar com técnica, sensibilidade e propósito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
