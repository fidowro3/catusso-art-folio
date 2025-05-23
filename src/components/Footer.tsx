
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/fabio-catusso' },
    { name: 'Behance', url: 'https://behance.net/fabio-catusso' },
    { name: 'Dribbble', url: 'https://dribbble.com/fabio-catusso' },
    { name: 'Instagram', url: 'https://instagram.com/fabio.catusso' }
  ];

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Contato', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-portfolio-dark border-t border-portfolio-card py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-portfolio-text-primary mb-4">
              Fábio Catusso
            </h3>
            <p className="text-portfolio-text-secondary leading-relaxed mb-6 max-w-md">
              Diretor de Arte & Designer UX/UI especializado em criar experiências digitais 
              que conectam pessoas e impulsionam negócios.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-text-secondary hover:text-portfolio-blue transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-portfolio-text-primary mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-portfolio-text-secondary hover:text-portfolio-blue transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-portfolio-text-primary mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-portfolio-text-secondary">
              <p>fabio.catusso@email.com</p>
              <p>(11) 99999-9999</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-portfolio-card pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-portfolio-text-secondary text-sm">
              © {currentYear} Fábio Catusso. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <button className="text-portfolio-text-secondary hover:text-portfolio-blue transition-colors duration-200">
                Política de Privacidade
              </button>
              <button className="text-portfolio-text-secondary hover:text-portfolio-blue transition-colors duration-200">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-portfolio-text-secondary hover:text-portfolio-blue transition-colors duration-200 text-sm"
          >
            Voltar ao topo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
