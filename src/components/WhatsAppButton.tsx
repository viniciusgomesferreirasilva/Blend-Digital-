import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-5 right-5 z-40">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
          COMPANY_INFO.whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-103 interactive-tap group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#800509]"
        aria-label="Abrir conversa no WhatsApp comercial da Blend Digital"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="text-xs font-semibold pr-1 hidden sm:inline whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
