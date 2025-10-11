import { Bot, Zap, Database, ArrowRight, LayoutDashboard, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: titleRef } = useScrollReveal();
  const { ref: servicesRef } = useScrollReveal({ threshold: 0.05 });

  const services = [
    {
      icon: Zap,
      title: "Automação de Processos",
      description: "Elimine tarefas repetitivas e libere sua equipe para o que realmente importa. Automatize workflows, integrações e processos de negócio.",
      features: ["Redução de erros operacionais", "Economia de até 70% do tempo", "Processos padronizados e escaláveis"],
    },
    {
      icon: Bot,
      title: "Funcionários IA",
      description: "Agentes inteligentes que trabalham 24/7. Atendimento, vendas, agendamento e muito mais, com capacidade de aprender e melhorar continuamente.",
      features: ["Atendimento 24/7 sem pausas", "Múltiplos canais simultâneos", "Aprendizado contínuo e personalizado"],
      highlighted: true,
    },
    {
      icon: LayoutDashboard,
      title: "Inteligência de Negócios Sob Medida",
      description: "Dashboards personalizados para você tomar decisões com clareza. Visualizações intuitivas que todo mundo entende.",
      features: [
        "Dashboards interativos e responsivos",
        "KPIs alinhados ao seu negócio",
        "Alertas automáticos por anomalias",
        "Relatórios agendados por email",
        "Interface mobile-friendly",
      ],
    },
    {
      icon: Database,
      title: "Infraestrutura de IA",
      description: "Integrações robustas com seus sistemas existentes. CRM, ERP, WhatsApp, e mais. Dados seguros e análises inteligentes.",
      features: ["Integrações completas com CRM/ERP", "Segurança de dados garantida", "Analytics e insights em tempo real"],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-primary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16 space-y-4 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-primary">
            Nossas Soluções em IA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta para transformar sua operação
          </p>
        </div>

        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-reveal-scale items-stretch">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group p-8 transition-all duration-500 bg-card/60 backdrop-blur-sm relative overflow-hidden flex flex-col ${ 
                service.highlighted 
                  ? 'border-2 border-secondary shadow-glow-secondary' 
                  : 'border-border hover:border-secondary/50 hover:shadow-elevated'
              }`}>
              {service.highlighted && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-xl flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  <span>MAIS POPULAR</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-6 relative z-10 flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-glow-secondary transition-all duration-300">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-accent mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-3 mb-6 relative z-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="w-full group-hover:bg-secondary/10 transition-colors relative z-10 mt-auto"
                onClick={() => {
                  const element = document.getElementById("configurator");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Configurar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;