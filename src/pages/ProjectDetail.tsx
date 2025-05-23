
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // This would typically come from an API or database
  // For demonstration, we're using a hardcoded map
  const projects = {
    'redesign-app-bancario': {
      title: "Redesign App Bancário",
      description: "Novo design para aplicativo de banco digital com foco em melhorar a experiência do usuário e aumentar engagement.",
      fullDescription: "Redesign completo da interface de um aplicativo bancário, focando em melhorar a experiência do usuário, simplificar fluxos de navegação e aumentar o engagement. O projeto envolveu pesquisa com usuários, análise de métricas, wireframes, prototipagem e testes. O resultado foi um aumento significativo na satisfação dos usuários e redução no tempo para completar tarefas comuns.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
      tags: ["UX/UI Design", "Mobile App", "Fintech"],
      year: "2023",
      client: "Banco Digital S.A."
    },
    'branding-startup-tech': {
      title: "Branding Startup Tech",
      description: "Criação de identidade visual completa para startup de tecnologia, incluindo logo, guidelines e materiais digitais.",
      fullDescription: "Desenvolvimento da identidade visual completa para uma startup de tecnologia em fase de crescimento. O projeto incluiu criação de logo, definição da paleta de cores, tipografia, elementos gráficos auxiliares, guidelines de aplicação e materiais institucionais digitais. O resultado foi uma marca consistente, moderna e alinhada com os valores da empresa.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop",
      tags: ["Branding", "Identity", "Guidelines"],
      year: "2022",
      client: "TechStart Ltda."
    },
    'ecommerce-premium': {
      title: "E-commerce Premium",
      description: "Design e prototipagem de loja online para marca de produtos premium, com foco em experiência de compra.",
      fullDescription: "Design e prototipagem de uma experiência de e-commerce para uma marca de produtos premium. O foco foi criar uma jornada de compra que transmitisse a sensação de exclusividade e qualidade da marca, com atenção especial aos detalhes visuais, micro-interações e responsividade. O projeto incluiu desde a arquitetura de informação até protótipos de alta fidelidade.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
      tags: ["E-commerce", "Web Design", "Prototyping"],
      year: "2023",
      client: "Elegance Premium"
    },
    'sistema-design': {
      title: "Sistema de Design",
      description: "Criação de sistema de design unificado para empresa de software, melhorando consistência entre produtos.",
      fullDescription: "Desenvolvimento de um sistema de design abrangente para uma empresa de software com múltiplos produtos digitais. O objetivo foi criar uma biblioteca de componentes reutilizáveis, documentação e guidelines para garantir consistência visual e de interação entre todas as soluções da empresa. O sistema incluiu tokens de design, componentes interativos e padrões de layout.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop",
      tags: ["Design System", "Components", "Documentation"],
      year: "2022",
      client: "SoftTech Solutions"
    },
    'dashboard-analytics': {
      title: "Dashboard Analytics",
      description: "Interface para plataforma de analytics com visualização de dados complexos de forma intuitiva.",
      fullDescription: "Design de interface para plataforma de analytics B2B que transforma dados complexos em visualizações intuitivas e acionáveis. O desafio foi criar uma experiência que permitisse aos usuários corporativos entender rapidamente grandes volumes de dados e tomar decisões informadas. O projeto envolveu pesquisa com stakeholders, arquitetura de informação e design visual de gráficos e painéis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      tags: ["Dashboard", "Data Viz", "B2B"],
      year: "2023",
      client: "DataViz Inc."
    },
    'app-educacional': {
      title: "App Educacional",
      description: "Design para aplicativo de aprendizagem online com gamificação e recursos interativos.",
      fullDescription: "Design de interface e experiência para um aplicativo educacional voltado ao ensino de programação para iniciantes. O projeto implementou elementos de gamificação para aumentar o engajamento e retenção dos usuários, além de recursos interativos que facilitam o aprendizado prático. Foram criados wireframes, protótipos interativos e especificações detalhadas para a equipe de desenvolvimento.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop",
      tags: ["EdTech", "Gamification", "Mobile"],
      year: "2022",
      client: "EduTech Academy"
    }
  };
  
  const project = slug ? projects[slug as keyof typeof projects] : null;
  
  if (!project) {
    return (
      <div className="min-h-screen bg-portfolio-dark">
        <Header />
        <div className="pt-24 px-6 lg:px-8 text-center">
          <h1 className="text-3xl text-portfolio-text-primary mb-4">Projeto não encontrado</h1>
          <p className="text-portfolio-text-secondary mb-8">O projeto que você procura não existe ou foi removido.</p>
          <button 
            onClick={() => navigate('/projetos')}
            className="bg-portfolio-blue text-white px-6 py-3 rounded-lg font-medium"
          >
            Voltar para Projetos
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => navigate('/projetos')}
            className="flex items-center gap-2 text-portfolio-text-secondary mb-8 hover:text-portfolio-blue transition-colors group"
            aria-label="Voltar para projetos"
          >
            <ArrowLeft className="w-4 h-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            Voltar para projetos
          </button>
          
          {/* Hero section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-portfolio-text-primary mb-4 animate-fade-in">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-portfolio-card border border-portfolio-card/50 text-portfolio-text-secondary px-3 py-1 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project image */}
          <div className="rounded-xl overflow-hidden border border-portfolio-card/50 shadow-lg mb-12">
            <AspectRatio ratio={16/9}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          
          {/* Project details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-portfolio-text-primary mb-4">Sobre o projeto</h2>
              <p className="text-portfolio-text-secondary leading-relaxed mb-6">
                {project.fullDescription}
              </p>
            </div>
            
            <div className="bg-portfolio-card border border-portfolio-card/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-portfolio-text-primary mb-4">Detalhes</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-portfolio-text-secondary font-medium">Cliente</p>
                  <p className="text-portfolio-text-primary">{project.client}</p>
                </div>
                <div>
                  <p className="text-portfolio-text-secondary font-medium">Ano</p>
                  <p className="text-portfolio-text-primary">{project.year}</p>
                </div>
                <div>
                  <p className="text-portfolio-text-secondary font-medium">Categorias</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-portfolio-text-primary">{tag}{index < project.tags.length - 1 ? ', ' : ''}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-portfolio-card p-8 rounded-2xl border border-portfolio-card/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-2">
                  Gostou deste projeto?
                </h3>
                <p className="text-portfolio-text-secondary">
                  Entre em contato para conversarmos sobre como posso ajudar no seu próximo desafio.
                </p>
              </div>
              <button 
                onClick={() => navigate('/contato')}
                className="bg-portfolio-blue hover:bg-blue-600 text-white whitespace-nowrap px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
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

export default ProjectDetail;
