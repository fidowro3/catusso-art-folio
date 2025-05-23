
const About = () => {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Design Systems", "Prototipagem", "Branding"] },
    { category: "Ferramentas", items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"] },
    { category: "Desenvolvimento", items: ["HTML/CSS", "React", "Design Responsivo", "Acessibilidade"] },
    { category: "Metodologias", items: ["Design Thinking", "Lean UX", "Agile", "User Research"] }
  ];

  const experience = [
    {
      year: "2023-Atual",
      role: "Diretor de Arte",
      company: "Agência Digital Premium",
      description: "Liderança de equipes criativas e desenvolvimento de estratégias visuais para grandes marcas."
    },
    {
      year: "2020-2023",
      role: "Senior UX/UI Designer",
      company: "Tech Startup",
      description: "Responsável por toda a experiência do usuário de produtos digitais inovadores."
    },
    {
      year: "2018-2020",
      role: "Designer UI/UX",
      company: "Consultoria Design",
      description: "Criação de interfaces e experiências para diversos clientes e setores."
    }
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
            Com mais de 6 anos de experiência, sou apaixonado por criar experiências digitais 
            que fazem a diferença na vida das pessoas e no sucesso dos negócios.
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
              Skills & Especialidades
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
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="bg-portfolio-card p-8 rounded-2xl border border-portfolio-card/50 max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl text-portfolio-text-primary font-light italic leading-relaxed">
              "Design não é apenas como algo parece ou como funciona. 
              Design é <span className="text-portfolio-blue font-medium">como funciona</span>."
            </blockquote>
            <cite className="text-portfolio-text-secondary mt-4 block">
              — Steve Jobs
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
