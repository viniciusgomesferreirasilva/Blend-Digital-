import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { NavPage } from '../types';

interface HeroProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#EAE6E1] overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start text-left space-y-6">
          {/* Subtle Category Kicker */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-[#800509]">
            <span className="w-5 h-px bg-[#800509]"></span>
            <span>Marketing, Posicionamento &amp; Audiovisual</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-neutral-950 font-display leading-[1.14] max-w-3xl text-balance">
            Posicionamento digital é um conjunto de{' '}
            <span className="text-[#800509] italic font-serif font-normal">ações conectadas.</span>
          </h1>

          {/* Clear Definition & Value Proposition */}
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-2xl">
            A <strong className="font-bold text-neutral-900">Blend Digital</strong> é uma empresa de marketing que estrutura o posicionamento digital, a comunicação estratégica e a produção audiovisual para negócios que buscam autoridade e vendas reais.
          </p>

          {/* 3 Pillar Cards - Cleanly distributed with consistent subtle rounded corners */}
          <div className="w-full pt-4 pb-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-white border border-[#E2DDD6] rounded-xl shadow-2xs card-hover-lift">
                <div className="flex items-center gap-2 text-xs font-bold text-[#800509] uppercase tracking-wider mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#800509]" />
                  <span>Apresentação</span>
                </div>
                <h3 className="text-sm font-bold text-neutral-950 mb-1">
                  Estratégia &amp; Identidade
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  Definição da essência da marca, tom de voz coerente e design que transmite segurança imediata.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#E2DDD6] rounded-xl shadow-2xs card-hover-lift">
                <div className="flex items-center gap-2 text-xs font-bold text-[#800509] uppercase tracking-wider mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#800509]" />
                  <span>Conteúdo &amp; Ritmo</span>
                </div>
                <h3 className="text-sm font-bold text-neutral-950 mb-1">
                  Social Media &amp; Vídeos
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  Produção audiovisual cinematográfica e dinâmica de stories que geram lembrança constante.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#E2DDD6] rounded-xl shadow-2xs card-hover-lift">
                <div className="flex items-center gap-2 text-xs font-bold text-[#800509] uppercase tracking-wider mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#800509]" />
                  <span>Conversão Real</span>
                </div>
                <h3 className="text-sm font-bold text-neutral-950 mb-1">
                  Sites, Google &amp; WhatsApp
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  Canais integrados com atendimento estruturado para transformar contatos em clientes ativos.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons with rounded-lg */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => onNavigate('servicos')}
              className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-lg transition-all duration-150 inline-flex items-center gap-2 shadow-xs group cursor-pointer interactive-tap"
            >
              <span>Conhecer os Serviços da Blend</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs sm:text-sm font-bold text-neutral-900 bg-white hover:bg-neutral-50 active:bg-neutral-100 border border-[#DCD6CE] rounded-lg transition-colors duration-150 inline-flex items-center gap-2 shadow-2xs interactive-tap"
            >
              <span>Iniciar Conversa no WhatsApp</span>
            </a>

            <button
              onClick={() => onNavigate('sobre')}
              className="px-4 py-3 text-xs sm:text-sm font-bold text-neutral-600 hover:text-[#800509] hover:bg-[#800509]/5 rounded-lg transition-colors cursor-pointer interactive-tap"
            >
              <span>Como Funciona o Método</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
