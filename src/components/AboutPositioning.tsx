import React, { useState } from 'react';
import { NavPage } from '../types';
import { ArrowRight, Compass, Share2, Layers, CheckCircle } from 'lucide-react';

interface AboutPositioningProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutPositioning: React.FC<AboutPositioningProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      index: '01',
      title: 'Apresentação & Identidade',
      subtitle: 'Como a sua marca é percebida no primeiro segundo',
      description:
        'A estética, a clareza da proposta de valor e a consistência visual constroem autoridade instantânea antes mesmo da primeira conversa. Uma apresentação desalinhada afasta clientes antes do orçamento.',
      bullets: [
        'Identidade visual sólida e tipografia padronizada',
        'Bio e destaques institucionais claros e objetivos',
        'Tom de voz profissional e condizente com o mercado',
      ],
      icon: Compass,
    },
    {
      index: '02',
      title: 'Conteúdo & Distribuição',
      subtitle: 'O que você publica e como alcança as pessoas certas',
      description:
        'Postar por postar gera esforço sem recompensa. O conteúdo estratégico responde às dúvidas mais frequentes dos seus clientes e prova que a empresa domina o que faz.',
      bullets: [
        'Planejamento de temas que geram desejo de compra',
        'Vídeos verticais dinâmicos (reels e stories de rotina)',
        'Carrosséis educativos e peças de autoridade no feed',
      ],
      icon: Share2,
    },
    {
      index: '03',
      title: 'Presença Digital & Apoio',
      subtitle: 'A prova de que a sua empresa existe e é confiável',
      description:
        'Quando um interessado busca o nome da sua empresa no Google ou entra no seu site institucional, ele procura segurança. Uma página rápida e um Google estruturado eliminam desconfianças.',
      bullets: [
        'Site institucional moderno e responsivo para celular',
        'Perfil do Google Meu Negócio verificado e com avaliações',
        'Pontos de contato consistentes em toda a web',
      ],
      icon: Layers,
    },
    {
      index: '04',
      title: 'Atendimento & Venda Rápida',
      subtitle: 'A rota direta para fechar negócios sem demora',
      description:
        'De nada adianta atrair centenas de cliques se a sua equipe demora para responder ou não sabe conduzir a conversa. Estruturamos scripts práticos e roteiros de WhatsApp para acelerar o fechamento.',
      bullets: [
        'WhatsApp Business configurado com catálogo e agilidade',
        'Modelos de mensagens rápidas para perguntas frequentes',
        'Condução comercial para transformar dúvidas em vendas',
      ],
      icon: CheckCircle,
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-24 bg-white border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 
          A BLEND - Apresentação oficial da Blend Digital antes dos serviços
          Exatamente conforme as capturas anexadas:
          Kicker: 01 — A BLEND
          Título: Marketing não é só aparecer. É ocupar um lugar.
          Texto de apoio: A Blend Digital nasceu para aproximar estratégia e criatividade...
          Destaques ao final: ESTRATÉGIA  CRIATIVIDADE  RESULTADO
        */}
        <div className="mb-16 pb-12 border-b border-[#EAE6E1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-[#800509]">
                <span className="w-5 h-px bg-[#800509]"></span>
                <span>01 — A BLEND</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#800509] font-display leading-[1.12] text-balance">
                Marketing não é só aparecer.{' '}
                <span className="text-neutral-950 block mt-1">É ocupar um lugar.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between h-full pt-1 lg:pt-8">
              <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                <p>
                  A <strong className="font-bold text-neutral-950">Blend Digital</strong> nasceu para aproximar estratégia e criatividade. A gente acredita que uma empresa boa merece uma comunicação à altura do que entrega.
                </p>
                <p>
                  Por isso, construímos presença digital com intenção: cada conteúdo tem um porquê, cada detalhe reforça o posicionamento e cada ação aponta para um objetivo.
                </p>
              </div>

              {/* 3 Pillars: ESTRATÉGIA · CRIATIVIDADE · RESULTADO */}
              <div className="mt-8 pt-6 border-t border-[#EAE6E1] flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#800509]">
                <span>ESTRATÉGIA</span>
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                <span>CRIATIVIDADE</span>
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                <span>RESULTADO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metodologia de Posicionamento Conectado */}
        <div>
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-3 text-xs font-bold tracking-wider uppercase text-[#800509] mb-2.5">
              <span className="w-5 h-px bg-[#800509]"></span>
              <span>A Metodologia Blend Digital</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-950 font-display text-balance leading-tight">
              Por que posicionamento é um conjunto de{' '}
              <span className="text-[#800509] font-serif font-normal italic">ações conectadas?</span>
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              Ter uma rede social bonita não resolve se o seu WhatsApp demora para responder. Estar no topo do Google não adianta se a identidade visual não gera confiança. Na Blend Digital, cada frente fortalece as demais.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Step Selector List */}
            <div className="lg:col-span-5 space-y-2.5">
              {steps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={step.index}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 cursor-pointer interactive-tap ${
                      isSelected
                        ? 'bg-[#FAF9F6] border-[#800509] shadow-xs'
                        : 'bg-white border-[#EAE6E1] hover:border-[#D0C9BF] hover:bg-[#FAF9F6]/60'
                    }`}
                  >
                    <div
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? 'bg-[#800509] text-white'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {step.index}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`text-sm font-bold leading-tight ${
                            isSelected ? 'text-[#800509]' : 'text-neutral-900'
                          }`}
                        >
                          {step.title}
                        </h4>
                        {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#800509] shrink-0" />}
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5 truncate font-normal">
                        {step.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Showcase Card with rounded-xl */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF9F6] border border-[#E2DDD6] p-6 sm:p-8 rounded-xl shadow-2xs flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8E4DF] gap-2">
                    <div>
                      <span className="text-[11px] font-bold tracking-widest text-[#800509] uppercase">
                        Etapa {steps[activeStep].index} de 04
                      </span>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-neutral-950 font-display mt-0.5 leading-[1.3] pb-0.5 overflow-visible">
                        {steps[activeStep].title}
                      </h4>
                    </div>
                    <span className="text-xs text-neutral-500 font-normal">
                      {steps[activeStep].subtitle}
                    </span>
                  </div>

                  <p className="mt-5 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                    {steps[activeStep].description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#EAE6E1]">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                      Práticas essenciais desta etapa:
                    </h5>
                    <ul className="space-y-2.5">
                      {steps[activeStep].bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#800509] shrink-0 mt-2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E4DF] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-neutral-600 font-normal">
                    Entenda como aplicar essa engrenagem ao seu negócio.
                  </span>
                  <button
                    onClick={() => onNavigate('servicos')}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer interactive-tap shadow-xs"
                  >
                    <span>Ver Serviços Correspondentes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
