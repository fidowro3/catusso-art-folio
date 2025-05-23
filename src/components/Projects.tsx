
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Redesign App Bancário",
      description: "Novo design para aplicativo de banco digital com foco em melhorar a experiência do usuário e aumentar engagement.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["UX/UI Design", "Mobile App", "Fintech"],
      featured: true
    },
    {
      id: 2,
      title: "Branding Startup Tech",
      description: "Criação de identidade visual completa para startup de tecnologia, incluindo logo, guidelines e materiais digitais.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Branding", "Identity", "Guidelines"],
      featured: true
    },
    {
      id: 3,
      title: "E-commerce Premium",
      description: "Design e prototipagem de loja online para marca de produtos premium, com foco em experiência de compra.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Web Design", "Prototyping"],
      featured: false
    },
    {
      id: 4,
      title: "Sistema de Design",
      description: "Criação de sistema de design unificado para empresa de software, melhorando consistência entre produtos.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tags: ["Design System", "Components", "Documentation"],
      featured: false
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      description: "Interface para plataforma de analytics com visualização de dados complexos de forma intuitiva.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Dashboard", "Data Viz", "B2B"],
      featured: false
    },
    {
      id: 6,
      title: "App Educacional",
      description: "Design para aplicativo de aprendizagem online com gamificação e recursos interativos.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
      tags: ["EdTech", "Gamification", "Mobile"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-portfolio-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-6">
            Meus <span className="text-portfolio-blue">Projetos</span>
          </h2>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus trabalhos mais recentes, onde aplico minha experiência 
            em branding e UX/UI para criar experiências digitais impactantes.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="group bg-portfolio-card rounded-2xl border border-portfolio-card/50 overflow-hidden hover:border-portfolio-blue/30 transition-all duration-300 hover:shadow-2xl hover:shadow-portfolio-blue/10">
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-portfolio-text-primary mb-3 group-hover:text-portfolio-blue transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-portfolio-dark border border-portfolio-card text-portfolio-text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="bg-portfolio-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:gap-3 transition-all duration-200 font-medium">
                  Ver mais
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(project => !project.featured).map((project) => (
            <div key={project.id} className="group bg-portfolio-card rounded-xl border border-portfolio-card/50 overflow-hidden hover:border-portfolio-blue/30 transition-all duration-300 hover:shadow-lg">
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-portfolio-text-primary mb-2 group-hover:text-portfolio-blue transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-portfolio-dark border border-portfolio-card text-portfolio-text-secondary px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="bg-portfolio-blue hover:bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all duration-200">
                  Ver mais
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-portfolio-card p-8 rounded-2xl border border-portfolio-card/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-4">
              Vamos colaborar em um projeto?
            </h3>
            <p className="text-portfolio-text-secondary mb-6 leading-relaxed">
              Estou disponível para novos desafios e projetos interessantes. 
              Entre em contato para discutirmos como posso ajudar.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-portfolio-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
