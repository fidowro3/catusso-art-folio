
import { Figma, FileImage, FileText } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: "Design", 
      items: ["UI/UX Design", "Design Systems", "Prototipagem", "Branding", "Design Thinking"] 
    },
    { 
      category: "Ferramentas", 
      items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch"] 
    },
    { 
      category: "Desenvolvimento", 
      items: ["HTML/CSS", "Design Responsivo", "Acessibilidade", "Design para Mobile"] 
    },
    { 
      category: "Produto", 
      items: ["User Research", "Design Sprint", "Lean UX", "Agile", "Jornada do Usuário"] 
    }
  ];

  const experience = [
    {
      year: "2021-Atual",
      role: "Diretor de Arte & UX/UI",
      company: "Agência Digital Premium",
      description: "Liderança de equipes criativas e desenvolvimento de estratégias visuais com foco em produto digital."
    },
    {
      year: "2017-2021",
      role: "Senior Designer",
      company: "Estúdio de Design",
      description: "Responsável por projetos de branding e marketing digital para grandes marcas nacionais."
    },
    {
      year: "2013-2017",
      role: "Designer Visual",
      company: "Consultoria de Design",
      description: "Criação de identidades visuais e materiais gráficos para diversos segmentos."
    }
  ];

  const designTools = [
    { name: "Figma", icon: Figma },
    { name: "Photoshop", icon: FileImage },
    { name: "Illustrator", icon: FileText },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-6">
            Sobre <span className="text-portfolio-blue">Mim</span>
          </h2>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto leading-relaxed">
            Com 10 anos de experiência, atuei principalmente com branding e design gráfico, 
            e nos últimos anos fiz a transição para o universo digital, focando em UX/UI e 
            desenvolvimento de produto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Trajetória */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-8">
              Minha Trajetória
            </h3>
            
            {experience.map((exp, index) => (
              <div key={index} className="bg-portfolio-card p-6 rounded-xl border border-portfolio-card/50 hover:border-portfolio-blue/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h4 className="text-lg font-semibold text-portfolio-text-primary">
                    {exp.role}
                  </h4>
                  <span className="text-portfolio-blue font-medium">
                    {exp.year}
                  </span>
                </div>
                <p className="text-portfolio-text-secondary font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-portfolio-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-8">
              Skills & Ferramentas
            </h3>
            
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-portfolio-card p-6 rounded-xl border border-portfolio-card/50 hover:border-portfolio-blue/30 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-lg font-semibold text-portfolio-blue mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-portfolio-dark border border-portfolio-card text-portfolio-text-secondary px-3 py-1 rounded-full text-sm hover:border-portfolio-blue hover:text-portfolio-blue transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Design Tools with Icons */}
            <div className="bg-portfolio-card p-6 rounded-xl border border-portfolio-card/50 mt-6">
              <h4 className="text-lg font-semibold text-portfolio-blue mb-4">
                Principais Ferramentas
              </h4>
              <div className="flex flex-wrap gap-6">
                {designTools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 bg-portfolio-dark border border-portfolio-card rounded-lg px-4 py-2">
                    <tool.icon className="text-portfolio-blue w-5 h-5" />
                    <span className="text-portfolio-text-secondary">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="bg-portfolio-card p-8 rounded-2xl border border-portfolio-card/50 max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl text-portfolio-text-primary font-light italic leading-relaxed">
              "Design não é apenas como algo parece, mas como funciona. 
              O bom design é <span className="text-portfolio-blue font-medium">focado nas pessoas</span>."
            </blockquote>
            <cite className="text-portfolio-text-secondary mt-4 block">
              — Fábio Catusso
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
