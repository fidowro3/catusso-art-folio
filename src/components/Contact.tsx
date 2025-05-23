
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "fabio.catusso@email.com",
      link: "mailto:fabio.catusso@email.com"
    },
    {
      label: "LinkedIn",
      value: "/in/fabio-catusso",
      link: "https://linkedin.com/in/fabio-catusso"
    },
    {
      label: "Behance",
      value: "@fabio-catusso",
      link: "https://behance.net/fabio-catusso"
    },
    {
      label: "WhatsApp",
      value: "(11) 99999-9999",
      link: "https://wa.me/5511999999999"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-6">
            Vamos <span className="text-portfolio-blue">Conversar</span>
          </h2>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto leading-relaxed">
            Tenho uma ideia? Precisa de ajuda com seu projeto? 
            Entre em contato e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-portfolio-card p-4 rounded-lg border border-portfolio-card/50 hover:border-portfolio-blue/30 transition-colors duration-200">
                    <p className="text-portfolio-text-secondary text-sm mb-1">
                      {info.label}
                    </p>
                    <a 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-text-primary hover:text-portfolio-blue transition-colors duration-200 font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-portfolio-card p-6 rounded-xl border border-portfolio-card/50">
              <h4 className="text-lg font-semibold text-portfolio-text-primary mb-4">
                Disponibilidade
              </h4>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-portfolio-text-secondary">
                  Disponível para novos projetos
                </span>
              </div>
              <p className="text-portfolio-text-secondary text-sm leading-relaxed">
                Atualmente aceito projetos de médio e longo prazo. 
                Tempo de resposta: até 24h.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-portfolio-card p-8 rounded-2xl border border-portfolio-card/50">
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-portfolio-text-primary font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-portfolio-dark border border-portfolio-card rounded-lg px-4 py-3 text-portfolio-text-primary focus:border-portfolio-blue focus:outline-none transition-colors duration-200"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-portfolio-text-primary font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-portfolio-dark border border-portfolio-card rounded-lg px-4 py-3 text-portfolio-text-primary focus:border-portfolio-blue focus:outline-none transition-colors duration-200"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-portfolio-text-primary font-medium mb-2">
                    Empresa/Projeto
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-portfolio-dark border border-portfolio-card rounded-lg px-4 py-3 text-portfolio-text-primary focus:border-portfolio-blue focus:outline-none transition-colors duration-200"
                    placeholder="Nome da empresa ou projeto"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-portfolio-text-primary font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-portfolio-dark border border-portfolio-card rounded-lg px-4 py-3 text-portfolio-text-primary focus:border-portfolio-blue focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Conte-me mais sobre seu projeto ou como posso ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-blue hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
