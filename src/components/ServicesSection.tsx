import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content';
import { ServiceItem } from '../types';
import {
  Compass,
  Share2,
  Palette,
  Video,
  MapPin,
  MessageSquare,
  Globe,
  ArrowRight,
  Check,
  X,
  Layers,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (prefilledService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Share2':
        return Share2;
      case 'Palette':
        return Palette;
      case 'Video':
        return Video;
      case 'MapPin':
        return MapPin;
      case 'MessageSquare':
        return MessageSquare;
      case 'Globe':
        return Globe;
      default:
        return Compass;
    }
  };

  // Structured packages from the reference screenshot ("03 — PACOTES: Escolha o ritmo. A gente constrói o caminho.")
  const packages = [
    {
      index: '01',
      name: 'Essencial',
      badge: null,
      description: 'Para empresas que precisam começar a construir presença digital de forma profissional e consistente.',
      items: [
        '12 conteúdos/mês',
        '4 Reels/mês',
        'Stories estratégicos',
        'Planejamento mensal de conteúdo',
        'Legendas estratégicas',
        'CTAs',
        'Calendário editorial',
        'Relatório de resultados',
      ],
      whatsappPill: 'Quero este pacote',
    },
    {
      index: '02',
      name: 'Crescimento',
      badge: null,
      description: 'Para empresas que querem crescer, fortalecer a marca e gerar mais oportunidades através do digital.',
      items: [
        'Tudo do Plano Essencial',
        '16 conteúdos/mês',
        '8 Reels/mês',
        'Fotos e vídeos',
        '1 diária de produção',
        'Gestão do Instagram',
        'Gestão do WhatsApp',
        'Google Meu Negócio',
        'Campanhas estratégicas',
        'Análise de métricas',
        'Reunião estratégica',
      ],
      whatsappPill: 'Quero este pacote',
    },
    {
      index: '03',
      name: 'Performance',
      badge: null,
      description: 'Para empresas que querem um posicionamento digital completo, com produção, estratégia, presença multicanal e foco em performance.',
      items: [
        'Tudo do Plano Crescimento',
        'Até 20 conteúdos/mês',
        'Até 12 Reels/mês',
        '3 diárias audiovisuais',
        'Gestão do Instagram',
        'Google Meu Negócio',
        'WhatsApp',
        'Campanhas',
        'Comunicação corporativa',
        'Estratégias de fidelização',
        'Tráfego pago',
        'Otimização contínua',
        'Análise de resultados',
        'Reunião estratégica',
      ],
      whatsappPill: 'Quero este pacote',
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-24 bg-[#FAF9F6] border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 
          Section Header matching the user's reference screenshot:
          Kicker: 02 — O QUE FAZEMOS
          Título: Uma operação completa para a sua marca.
          Texto explicativo: Do diagnóstico à publicação. Escolha um serviço para entender exatamente o que a Blend faz e como ele pode ajudar sua empresa.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 md:mb-16 pb-8 border-b border-[#EAE6E1]">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-[#800509] mb-3">
              <span className="w-5 h-px bg-[#800509]"></span>
              <span>02 — O QUE FAZEMOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-display text-balance leading-[1.12]">
              Uma operação completa{' '}
              <span className="text-[#800509] block sm:inline">para a sua marca.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Do diagnóstico à publicação. Escolha um serviço para entender exatamente o que a Blend faz e como ele pode ajudar sua empresa.
            </p>
          </div>
        </div>

        {/* Services Grid - All 7 integrated services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            const isSiteService = service.id === 'criacao-sites-landing-pages';

            return (
              <div
                key={service.id}
                className={`bg-white border rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 card-hover-lift group ${
                  isSiteService
                    ? 'border-[#800509]/30 bg-gradient-to-b from-white to-[#FAF9F6]'
                    : 'border-[#E2DDD6] hover:border-[#800509]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#800509]/8 text-[#800509] flex items-center justify-center group-hover:bg-[#800509] group-hover:text-white transition-colors duration-150">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-left w-full group/title cursor-pointer focus-visible:outline-2 focus-visible:outline-[#800509] rounded-md mb-3"
                    aria-label={`Ver detalhes e escopo completo de ${service.title}`}
                  >
                    <h3 className="text-lg sm:text-[1.1875rem] font-bold text-neutral-950 font-display group-hover/title:text-[#800509] group-hover:text-[#800509] transition-colors leading-[1.38] tracking-tight pb-0.5 overflow-visible text-balance">
                      {service.title}
                    </h3>
                  </button>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-[1.65] mb-6 font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0ECE6] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="py-2.5 px-2 -ml-2 text-xs sm:text-[13px] font-bold text-neutral-900 hover:text-[#800509] hover:bg-[#800509]/5 active:bg-[#800509]/10 rounded-md inline-flex items-center gap-1.5 transition-colors cursor-pointer interactive-tap group/action focus-visible:outline-2 focus-visible:outline-[#800509]"
                    aria-label={`Abrir escopo completo de ${service.title}`}
                  >
                    <span>Ver escopo completo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/action:translate-x-1 group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá! Gostaria de conversar com a Blend Digital sobre o serviço de ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2.5 -mr-2 text-[11px] sm:text-xs font-bold text-neutral-500 hover:text-[#800509] hover:bg-[#800509]/5 active:bg-[#800509]/10 rounded-md transition-colors interactive-tap shrink-0 focus-visible:outline-2 focus-visible:outline-[#800509]"
                    aria-label={`Conversar no WhatsApp sobre ${service.title}`}
                  >
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          03 — PACOTES
          Reference image:
          "Escolha o ritmo. A gente constrói o caminho."
          Compare as opções e, quando encontrar a mais adequada, clique em "Quero este pacote" para falar diretamente com a Blend no WhatsApp.
          3 Cards: Essencial / Crescimento (Mais procurado) / Performance
        */}
        <div className="mt-20 pt-16 border-t border-[#EAE6E1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-[#800509] mb-3">
                <span className="w-5 h-px bg-[#800509]"></span>
                <span>03 — PACOTES</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.12]">
                Escolha o ritmo.{' '}
                <span className="text-[#800509] block sm:inline">A gente constrói o caminho.</span>
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                Compare as opções e, quando encontrar a mais adequada, clique em &ldquo;Quero este pacote&rdquo; para falar diretamente com a Blend no WhatsApp.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const isPopular = pkg.badge !== null;
              return (
                <div
                  key={pkg.index}
                  className="bg-[#800509] text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden transition-all duration-200 card-hover-lift"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-white/70 uppercase tracking-widest mb-4">
                      <span>{pkg.index}</span>
                      {isPopular && (
                        <span className="bg-white/20 text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
                      {pkg.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal mb-6 min-h-[48px]">
                      {pkg.description}
                    </p>

                    <div className="pt-5 border-t border-white/15 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-3">
                        Entregas inclusas:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-100 font-normal">
                        {pkg.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-white/60 font-bold shrink-0 mt-0.5">+</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Olá! Gostaria de conversar com a Blend Digital sobre o Pacote ${pkg.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 bg-white text-[#800509] hover:bg-neutral-100 active:bg-neutral-200 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs interactive-tap text-center"
                    >
                      <span>Quero este pacote</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Callout */}
        <div className="mt-14 bg-white border border-[#E2DDD6] p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-wider text-[#800509] uppercase">Por onde começar</span>
            <h4 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display mt-2">
              Não sabe qual serviço faz sentido para sua empresa?
            </h4>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal leading-relaxed">
              Conte qual é seu desafio. A Blend ajuda a definir as prioridades antes de escolher um pacote.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenContact()}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-lg transition-colors cursor-pointer interactive-tap text-center shadow-xs"
            >
              Explicar meu projeto
            </button>
          </div>
        </div>
      </div>

      {/* Scope Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative bg-white border border-[#E2DDD6] max-w-xl w-full rounded-xl shadow-xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-4 border-b border-[#E8E4DF]">
              <div>
                <span className="text-[11px] font-bold text-[#800509] uppercase tracking-wider">
                  SERVIÇO ESPECIALIZADO
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 font-display mt-0.5 leading-[1.3] pb-0.5 overflow-visible">
                  {selectedService.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors interactive-tap"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  Visão Geral
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {selectedService.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                  Entregas Principais
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-normal">
                      <span className="w-4 h-4 rounded-full bg-[#800509]/10 text-[#800509] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] border border-[#E8E4DF] rounded-lg">
                <span className="text-[11px] font-bold text-[#800509] block uppercase tracking-wider">
                  Como este serviço se conecta:
                </span>
                <p className="text-xs text-neutral-700 mt-0.5 font-normal">
                  {selectedService.connectedTo}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E4DF] flex flex-wrap items-center justify-between gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Gostaria de conversar com a Blend Digital sobre o serviço de ${selectedService.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] rounded-lg transition-colors inline-flex items-center gap-1.5 interactive-tap"
              >
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenContact(serviceName);
                }}
                className="px-3.5 py-2 text-xs font-bold text-neutral-700 hover:text-neutral-900 border border-[#DCD6CE] rounded-lg hover:bg-neutral-50 interactive-tap"
              >
                Enviar por Formulário
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
