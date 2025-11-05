import depoimento1 from "@/assets/testimonials/depoimento-1.jpeg";
import depoimento2 from "@/assets/testimonials/depoimento-2.jpeg";
import depoimento3 from "@/assets/testimonials/depoimento-3.jpeg";
import depoimento4 from "@/assets/testimonials/depoimento-4.jpeg";
import depoimento5 from "@/assets/testimonials/depoimento-5.jpeg";
import depoimento6 from "@/assets/testimonials/depoimento-6.jpeg";

const Testimonials = () => {
  const testimonials = [
    { image: depoimento1, alt: "Depoimento real de aluna sobre a formação" },
    { image: depoimento2, alt: "Feedback positivo de estudante da Liga Maternar" },
    { image: depoimento3, alt: "Relato de transformação profissional" },
    { image: depoimento4, alt: "Experiência de aluna com as formações" },
    { image: depoimento5, alt: "Testemunho sobre consultoria em amamentação" },
    { image: depoimento6, alt: "Depoimento sobre especialização em taping" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Quem já virou, conta
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Veja o que alunas que deram a virada profissional têm a dizer:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-accent/10 to-primary/5 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-full h-auto rounded-lg object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
