
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-portfolio-dark/80 backdrop-blur-lg border-b border-portfolio-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold text-portfolio-text-primary">
            Fábio Catusso
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-portfolio-text-secondary hover:text-portfolio-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-portfolio-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Contato
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
