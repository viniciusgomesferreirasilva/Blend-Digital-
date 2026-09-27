import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import {
  MessageSquare,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Instagram,
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: prefilledService || 'Estratégia de Posicionamento',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      service: 'Estratégia de Posicionamento',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contato" className="py-20 md:py-24 bg-[#FAF9F6] border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-1 bg-[#800509] rounded-full inline-block"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#800509]">
              Canais Diretos de Atendimento
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 font-display leading-tight text-balance">
            Pronto para conectar os pontos da sua empresa e{' '}
            <span className="text-[#800509] font-serif font-normal italic">vender com consistência?</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-neutral-600 font-normal">
            Escolha falar imediatamente com a equipe comercial no WhatsApp ou enviar sua demanda estruturada pelo formulário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels with rounded-xl cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Action: Direct WhatsApp Callout */}
            <div className="bg-white border-2 border-[#800509] rounded-xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#800509] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#800509]">
                    Canal Recomendado
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 font-display mt-0.5">
                    WhatsApp Comercial
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed font-normal">
                    Fale em tempo real pelo número <strong>{COMPANY_INFO.whatsappDisplay}</strong> para tirar dúvidas imediatas e solicitar propostas.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#F0ECE6]">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    COMPANY_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs interactive-tap cursor-pointer"
                >
                  <span>Iniciar Atendimento no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="block text-[11px] text-center text-neutral-500 mt-2 font-normal">
                  Resposta rápida em horário comercial
                </span>
              </div>
            </div>

            {/* Email, Instagram & Hours */}
            <div className="bg-white border border-[#E8E4DF] rounded-xl p-6 space-y-4 shadow-2xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#800509] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    E-mail Corporativo
                  </h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs text-neutral-600 hover:text-[#800509] transition-colors font-normal"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#F0ECE6]">
                <Instagram className="w-4 h-4 text-[#800509] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    Instagram Oficial
                  </h4>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-600 hover:text-[#800509] transition-colors font-normal flex items-center gap-1"
                  >
                    <span>@blenddigital_</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#F0ECE6]">
                <Clock className="w-4 h-4 text-[#800509] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    Horário de Atendimento
                  </h4>
                  <p className="text-xs text-neutral-600 font-normal">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantee Statement */}
            <div className="p-4 bg-[#FAF9F6] border border-[#E2DDD6] rounded-xl text-neutral-600 text-xs leading-relaxed font-normal">
              <strong className="text-neutral-900 font-bold block mb-1">
                Compromisso de Clareza &amp; Transparência:
              </strong>
              Não indicamos serviços desnecessários. Analisamos sua presença real para indicar apenas os canais que trazem retorno palpável.
            </div>
          </div>

          {/* Right Column: Contact Form with rounded-xl card and rounded-lg inputs */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E8E4DF] rounded-xl p-6 sm:p-8 shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-3 animate-in fade-in duration-250">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 font-display">
                    Mensagem Recebida com Sucesso!
                  </h3>

                  <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed font-normal">
                    Agradecemos o contato, <strong>{formData.name}</strong>. Nossa equipe comercial analisará suas informações e retornará em breve pelo e-mail ou WhatsApp informado.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Olá! Acabei de enviar o formulário pelo site em nome de ${formData.name}. Gostaria de agilizar o contato.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] rounded-lg transition-colors inline-flex items-center gap-1.5 interactive-tap"
                    >
                      <span>Agilizar no WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={handleReset}
                      className="px-3.5 py-2.5 text-xs font-bold text-neutral-600 hover:text-neutral-900 border border-neutral-300 rounded-lg interactive-tap"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#F0ECE6] pb-3">
                    <h3 className="text-lg font-bold font-display text-neutral-950">
                      Formulário de Contato &amp; Diagnóstico
                    </h3>
                    <p className="text-xs text-neutral-600 mt-0.5 font-normal">
                      Preencha os campos abaixo para entendermos a demanda da sua empresa.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-neutral-800">
                        Seu Nome ou Responsável *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Mariana Silva"
                        className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none font-normal"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-neutral-800">
                        WhatsApp Comercial *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none font-normal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-neutral-800">
                        E-mail para Retorno *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@empresa.com.br"
                        className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none font-normal"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-neutral-800">
                        Serviço Principal de Interesse
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none bg-white font-normal"
                      >
                        <option value="Estratégia de Posicionamento">Estratégia de Posicionamento</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Identidade Visual & Design">Identidade Visual & Design</option>
                        <option value="Produção Audiovisual, Videomaker & Storymaker">Produção Audiovisual, Videomaker & Storymaker</option>
                        <option value="Google & Presença Local">Google & Presença Local</option>
                        <option value="WhatsApp Comercial & Scripts de Atendimento">WhatsApp Comercial & Scripts de Atendimento</option>
                        <option value="Criação de Sites & Landing Pages">Criação de Sites & Landing Pages</option>
                        <option value="Pacote Essencial">Pacote Essencial (12 conteúdos/mês)</option>
                        <option value="Pacote Crescimento">Pacote Crescimento (16 conteúdos/mês + diária)</option>
                        <option value="Pacote Performance">Pacote Performance (20 conteúdos/mês + 3 diárias)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-800">
                      Mensagem ou Detalhes da sua Empresa *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte um pouco sobre o momento do seu negócio e objetivos..."
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none font-normal"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-5 text-xs sm:text-sm font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-70 interactive-tap"
                    >
                      {isSubmitting ? (
                        <span>Enviando dados...</span>
                      ) : (
                        <>
                          <span>Enviar Solicitação de Contato</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
