
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: "Redesign App Bancário",
      description: "Novo design para aplicativo de banco digital com foco em melhorar a experiência do usuário e aumentar engagement.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
      tags: ["UX/UI Design", "Mobile App", "Fintech"],
      slug: "redesign-app-bancario"
    },
    {
      id: 2,
      title: "Branding Startup Tech",
      description: "Criação de identidade visual completa para startup de tecnologia, incluindo logo, guidelines e materiais digitais.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop",
      tags: ["Branding", "Identity", "Guidelines"],
      slug: "branding-startup-tech"
    },
    {
      id: 3,
      title: "E-commerce Premium",
      description: "Design e prototipagem de loja online para marca de produtos premium, com foco em experiência de compra.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      tags: ["E-commerce", "Web Design", "Prototyping"],
      slug: "ecommerce-premium"
    },
    {
      id: 4,
      title: "Sistema de Design",
      description: "Criação de sistema de design unificado para empresa de software, melhorando consistência entre produtos.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop",
      tags: ["Design System", "Components", "Documentation"],
      slug: "sistema-design"
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      description: "Interface para plataforma de analytics com visualização de dados complexos de forma intuitiva.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["Dashboard", "Data Viz", "B2B"],
      slug: "dashboard-analytics"
    },
    {
      id: 6,
      title: "App Educacional",
      description: "Design para aplicativo de aprendizagem online com gamificação e recursos interativos.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=500&fit=crop",
      tags: ["EdTech", "Gamification", "Mobile"],
      slug: "app-educacional"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-6">
              Meus <span className="text-portfolio-blue">Projetos</span>
            </h1>
            <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos meus trabalhos em design UX/UI, branding e experiências digitais 
              que ajudam marcas a comunicar e pessoas a se conectar.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-portfolio-card rounded-xl overflow-hidden border border-portfolio-card/50 
                  hover:shadow-xl hover:shadow-portfolio-blue/10 hover:border-portfolio-blue/20 
                  transition-all duration-300 focus-within:ring-2 focus-within:ring-portfolio-blue"
                tabIndex={0}
              >
                {/* Project Image with Aspect Ratio */}
                <div className="relative">
                  <AspectRatio ratio={16/9} className="bg-portfolio-dark/50">
                    <img 
                      src={project.image}
                      alt={`Projeto ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 
                        group-hover:scale-105 group-focus-within:scale-105"
                    />
                    
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/90 via-portfolio-dark/50 to-transparent 
                      opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 
                      flex flex-col justify-end p-6">
                      
                      {/* Project title on overlay */}
                      <h2 className="text-2xl font-semibold text-white mb-2">
                        {project.title}
                      </h2>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 2).map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-portfolio-dark/60 backdrop-blur-sm text-white px-3 py-1 
                              rounded-full text-sm border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* View more button */}
                      <button 
                        onClick={() => navigate(`/projeto/${project.slug}`)}
                        className="bg-portfolio-blue hover:bg-blue-600 text-white w-fit px-4 py-2 
                          rounded-lg flex items-center gap-2 hover:gap-3 transition-all duration-200 
                          font-medium focus:ring-2 focus:ring-white focus:outline-none"
                        aria-label={`Ver detalhes do projeto ${project.title}`}
                      >
                        Ver mais
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </AspectRatio>
                </div>
                
                {/* Visible title and info */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-portfolio-text-primary mb-2 
                    group-hover:text-portfolio-blue transition-colors duration-200">
                    {project.title}
                  </h2>
                  
                  {/* Hover card for description */}
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <p className="text-portfolio-text-secondary line-clamp-2 text-sm">
                        {project.description}
                      </p>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-portfolio-card border-portfolio-blue/30 text-portfolio-text-primary p-4">
                      <p className="text-portfolio-text-secondary">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-portfolio-dark border border-portfolio-card text-portfolio-text-secondary 
                              px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-24">
            <div className="bg-portfolio-card p-8 rounded-2xl border border-portfolio-card/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-4">
                Vamos colaborar em um projeto?
              </h3>
              <p className="text-portfolio-text-secondary mb-6 leading-relaxed">
                Estou disponível para novos desafios e projetos interessantes. 
                Entre em contato para discutirmos como posso ajudar.
              </p>
              <button 
                onClick={() => navigate('/contato')}
                className="bg-portfolio-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg 
                  font-medium transition-all duration-200 hover:scale-105 focus:ring-2 
                  focus:ring-white focus:outline-none"
              >
                Fale Comigo
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
