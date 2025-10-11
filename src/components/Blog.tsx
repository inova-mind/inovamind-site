import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Como a IA pode reduzir custos em 70% no seu negócio",
      excerpt: "Descubra as estratégias que empresas estão usando para economizar milhares com automação inteligente.",
      date: "15 Mar 2024",
      category: "Automação",
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Funcionários IA: O futuro do atendimento ao cliente",
      excerpt: "Entenda como agentes inteligentes estão transformando a experiência do cliente e aumentando vendas.",
      date: "12 Mar 2024",
      category: "IA",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      title: "5 processos que você deveria automatizar hoje",
      excerpt: "Identifique quais tarefas repetitivas estão consumindo o tempo da sua equipe e como resolver isso.",
      date: "08 Mar 2024",
      category: "Produtividade",
      gradient: "from-accent to-accent-glow",
    },
  ];

  return (
    <section id="blog" className="py-24 relative bg-gradient-to-b from-secondary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Blog & <span className="text-secondary">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Aprenda com nossos especialistas sobre IA e automação
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <article
                key={index}
                className="card-glow rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="ghost" className="group-hover:text-primary p-0">
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Ver todos os artigos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
