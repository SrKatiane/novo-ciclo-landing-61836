import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ser da área da saúde para fazer as formações?",
      answer: "Depende da formação! Para a Consultoria em Amamentação, não é obrigatório ter graduação na área da saúde, embora seja um diferencial. A formação te dará toda a base necessária. Já para a formação em Taping + Drenagem Linfática, é obrigatório ser graduada(o) na área da saúde (ex: Fisioterapia, Enfermagem, Educação Física, etc.)."
    },
    {
      question: "Como funciona o grupo de suporte vitalício?",
      answer: "Você terá acesso a um grupo exclusivo e permanente para tirar dúvidas, compartilhar casos, fazer networking e receber apoio contínuo da nossa equipe e de outros estudantes. Você terá sempre uma comunidade de apoio."
    },
    {
      question: "Como e quando recebo meu certificado?",
      answer: "Você receberá seu certificado impresso, pessoalmente, ao final de cada formação. É um momento especial que celebra a conclusão da sua jornada com a gente!"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Ainda tem dúvidas?<br />A gente te ajuda.
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Respondemos as perguntas mais frequentes
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
