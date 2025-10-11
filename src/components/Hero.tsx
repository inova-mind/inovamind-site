import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const { ref: heroRef } = useScrollReveal();
  
  const scrollToConfigurator = () => {
    const element = document.getElementById("configurator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--secondary)/0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.15),transparent_50%)] animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center space-y-8 scroll-reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm shadow-glow-secondary">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Líderes em Automação e IA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Transforme seu negócio com{" "}
            <span className="relative inline-block">
              <span className="text-gradient-secondary">Automação</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></span>
            </span>
            {" "}e{" "}
            <span className="relative inline-block">
              <span className="text-gradient-accent">Inteligência Artificial</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Economize tempo e recursos com soluções completas de IA. 
            Funcionários virtuais 24/7, processos otimizados e resultados mensuráveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToConfigurator}
              className="group"
            >
              Configurar Minha IA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conhecer Soluções
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              { value: "70%", label: "Redução de custos", delay: "0ms" },
              { value: "24/7", label: "Atendimento ininterrupto", delay: "100ms" },
              { value: "5x", label: "Mais produtividade", delay: "200ms" },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-glow-secondary animate-scale-in"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-accent mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements - Glowing */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float shadow-glow-secondary"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float shadow-glow-primary" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float shadow-glow-accent" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default Hero;
