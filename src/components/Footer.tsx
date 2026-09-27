import React from 'react';
import { BlendLogo } from './logos/BlendLogo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/content';
import { NavPage } from '../types';
import { ArrowUp, MessageSquare, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#800509] text-white pt-14 pb-10 border-t border-[#760010]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* Column 1: Brand & Definition */}
          <div className="lg:col-span-4 space-y-3.5">
            {/* White version of the original Blend Digital logo */}
            <div className="flex items-center">
              <BlendLogo variant="white" withSubtitle={true} size="md" />
            </div>

            <p className="text-xs text-neutral-200 leading-relaxed max-w-sm mt-2 font-normal">
              Empresa de marketing especialista em posicionamento digital, comunicação estratégica e produção audiovisual para negócios que buscam autoridade e vendas.
            </p>

            <div className="pt-1 text-xs text-neutral-300">
              <span className="block font-bold text-white">Posicionamento Conectado</span>
              <span className="text-[11px] opacity-80 font-normal">{COMPANY_INFO.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/90">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-200 font-normal">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  A Blend &amp; Metodologia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  O Que Fazemos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('como-trabalhamos')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  Como Trabalhamos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('audiovisual')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  Audiovisual &amp; Storymaker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  Blend News (Blog)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('colaboradores')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  Colaboradores
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="hover:text-white transition-colors cursor-pointer interactive-tap py-0.5"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services List without decorative numbers */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/90">
              Serviços Oficiais
            </h4>
            <ul className="space-y-1.5 text-[11px] text-neutral-200 font-normal">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('servicos')}
                    className="hover:text-white text-left transition-colors cursor-pointer interactive-tap py-0.5"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/90">
              Canais Oficiais
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-200">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors interactive-tap py-0.5"
              >
                <MessageSquare className="w-4 h-4 text-white shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors interactive-tap py-0.5"
              >
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors interactive-tap py-0.5"
              >
                <Instagram className="w-4 h-4 text-white shrink-0" />
                <span>Instagram: @blenddigital_</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-white border border-white/20 hover:bg-white/10 px-3.5 py-2 rounded-lg transition-colors cursor-pointer interactive-tap"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-300">
          <div>
            &copy; {new Date().getFullYear()} Blend Digital — Todos os direitos reservados.
          </div>

          <div className="text-[11px] text-neutral-300">
            Identidade visual oficial preservada conforme manual da marca.
          </div>
        </div>
      </div>
    </footer>
  );
};
