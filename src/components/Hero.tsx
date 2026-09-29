import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { NavPage } from '../types';

interface HeroProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 border-b border-[#EAE6E1] overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start text-left space-y-7">
          {/* Subtle Category Kicker */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-[#800509]">
            <span className="w-5 h-px bg-[#800509]"></span>
            <span>Marketing, Posicionamento &amp; Audiovisual</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-extrabold tracking-[-.065em] text-neutral-950 font-display leading-[.98] max-w-5xl text-balance">
            Posicionamento que <span className="text-[#800509] italic font-serif font-normal">conecta.</span><br/>
            Comunicação que <span className="text-[#800509]">movimenta.</span>
          </h1>

          {/* Clear Definition & Value Proposition */}
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-2xl">
            A Blend Digital aproxima estratégia, comunicação e produção audiovisual para construir uma presença digital coerente em cada ponto de contato com o cliente.
          </p>

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
