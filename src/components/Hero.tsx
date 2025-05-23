
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative"
      style={{
        backgroundImage: "url('/lovable-uploads/3fcf3416-492c-44a3-9d79-cd8aa909edad.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-portfolio-dark/70"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-portfolio-text-primary mb-6 leading-tight">
              Fábio <span className="text-portfolio-blue">Catusso</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-portfolio-text-secondary mb-8 font-light">
              Diretor de Arte & Designer UX/UI
            </h2>
            <p className="text-lg text-portfolio-text-secondary mb-10 leading-relaxed max-w-lg">
              Olá, sou Fábio Catusso — Diretor de arte, Designer UX/UI com 10 anos de experiência, 
              agora migrando para produto digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-portfolio-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Ver Projetos
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-portfolio-card hover:border-portfolio-blue text-portfolio-text-primary px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:bg-portfolio-card"
              >
                Sobre Mim
              </button>
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-portfolio-card border border-portfolio-card/50 shadow-2xl backdrop-blur-sm bg-portfolio-dark/30">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
                  alt="Fábio Catusso"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-blue/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full border border-portfolio-card hover:border-portfolio-blue transition-colors duration-200 backdrop-blur-sm bg-portfolio-dark/30"
          >
            <ArrowDown className="w-5 h-5 text-portfolio-text-secondary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
