import { Rocket, Eye, Gem, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import aiAutomationImage from "@/assets/ai-automation.png";

const About = () => {
  const { ref: titleRef } = useScrollReveal();
  const { ref: imageRef } = useScrollReveal();
  const { ref: textRef } = useScrollReveal();
  const { ref: contentRef } = useScrollReveal({ threshold: 0.1 });

  const aboutSections = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Missão",
      description: "Empoderar empresas com soluções inteligentes em dados, oferecendo estratégias em BI, engenharia de dados e inteligência artificial que impulsionem decisões assertivas, automação e performance.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visão",
      description: "Ser referência em inteligência de negócios no Brasil, transformando dados complexos em informações acessíveis e estratégicas para empresas de todos os portes.",
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Valores",
      description: "", // Description is handled separately for values
      values: [
        "Inovação contínua",
        "Precisão e clareza",
        "Compromisso com resultados",
        "Ética e transparência",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={titleRef} className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Transformando Dados em <span className="text-gradient-secondary">Resultados</span>
            </h2>
          </div>

          {/* Intro with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div ref={imageRef} className="scroll-reveal-left">
              <img 
                src={aiAutomationImage} 
                alt="Automação com Inteligência Artificial" 
                className="rounded-2xl shadow-2xl border-2 border-border/20 hover:shadow-glow-secondary transition-all duration-500"
              />
            </div>
            <div ref={textRef} className="space-y-6 scroll-reveal-right">
              <h3 className="text-3xl font-bold text-gradient-accent">Nossa Paixão é Inovar</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na INOVAMIND, somos movidos pelo desafio de decifrar complexidades. Utilizamos tecnologia de ponta, não como um fim, mas como a ferramenta para criar soluções de negócios que são ao mesmo tempo poderosas e intuitivas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe une expertise em engenharia de dados, BI e IA para construir uma ponte entre o potencial dos seus dados e o crescimento do seu negócio. 
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div ref={contentRef} className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 scroll-reveal-scale">
            {aboutSections.map((section, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl text-center transition-all duration-300 bg-card/60 backdrop-blur-sm border border-border hover:border-secondary/50 hover:shadow-elevated flex flex-col items-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-secondary">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gradient-accent mb-4">{section.title}</h3>
                {section.description && (
                  <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                    {section.description}
                  </p>
                )}
                {section.values && (
                  <ul className="space-y-3 text-left mt-4 flex-grow">
                    {section.values.map((value, vIndex) => (
                      <li key={vIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
