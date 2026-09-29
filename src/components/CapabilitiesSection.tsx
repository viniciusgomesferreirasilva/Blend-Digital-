import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavPage } from '../types';

interface Props { onNavigate: (page: NavPage) => void }

export const CapabilitiesSection: React.FC<Props> = ({ onNavigate }) => (
  <>
    <section aria-label="Especialidades da Blend" className="bg-neutral-950 text-white overflow-hidden border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs font-bold tracking-[.18em] uppercase">
        {['Estratégia', 'Social', 'Audiovisual', 'Design', 'Performance', 'Web', 'Conteúdo'].map((item, i) => <React.Fragment key={item}>{i > 0 && <span aria-hidden="true" className="text-[#be6c72]">✦</span>}<span>{item}</span></React.Fragment>)}
      </div>
    </section>
    <section className="bg-[#171717] text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.25fr_.75fr] gap-8 md:gap-16 items-end mb-10">
          <div><span className="text-xs tracking-[.16em] font-bold text-[#d7a7a9] uppercase">As frentes da Blend</span><h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-.055em] leading-[1.05] mt-5">Uma marca. <span className="font-serif italic font-normal text-[#d7a7a9]">Vários pontos de contato.</span></h2></div>
          <p className="text-base text-neutral-300 leading-relaxed">Estratégia, conteúdo e tecnologia trabalhando como uma única experiência — do primeiro contato até a conversa comercial.</p>
        </div>
        <div className="grid md:grid-cols-[1.35fr_1fr] gap-4">
          <button onClick={() => onNavigate('servicos')} className="group text-left bg-[#50080c] border border-white/15 rounded-2xl p-8 sm:p-10 md:min-h-[440px] flex flex-col justify-between hover:bg-[#65090e] transition-colors focus-visible:outline-2 focus-visible:outline-white">
            <span className="text-xs font-bold tracking-[.13em] text-[#e2b7ba]">01 / POSICIONAMENTO</span><div><h3 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight max-w-md">Marcas com direção antes de ganhar volume.</h3><p className="text-neutral-200 mt-4 leading-relaxed max-w-md">Estratégia, identidade e linguagem conectadas para construir reconhecimento.</p><span className="inline-flex items-center gap-2 mt-8 text-sm font-bold">Explorar estratégia <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span></div>
          </button>
          <div className="grid gap-4">
            <article className="bg-[#242020] border border-white/15 rounded-2xl p-8 flex flex-col justify-end min-h-[210px]"><span className="text-xs font-bold tracking-[.13em] text-[#d7a7a9]">02 / CONTEÚDO</span><h3 className="text-2xl font-bold leading-tight mt-4">Social que parece marca, não calendário.</h3><p className="text-sm text-neutral-300 leading-relaxed mt-2">Conteúdo pensado para consistência, retenção e presença.</p></article>
            <article className="bg-[#242020] border border-white/15 rounded-2xl p-8 flex flex-col justify-end min-h-[210px]"><span className="text-xs font-bold tracking-[.13em] text-[#d7a7a9]">03 / EXPERIÊNCIA</span><h3 className="text-2xl font-bold leading-tight mt-4">Digital que transforma atenção em ação.</h3><p className="text-sm text-neutral-300 leading-relaxed mt-2">Sites, Google e canais comerciais conectados à comunicação.</p></article>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-20 md:py-24 border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-20">
        <div><span className="text-xs font-bold tracking-[.16em] text-[#800509] uppercase">Por que Blend?</span><h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-[-.055em] mt-4">Menos peças soltas.<br/><span className="font-serif italic font-normal text-[#800509]">Mais conexão.</span></h2></div>
        <div className="grid sm:grid-cols-3 gap-5">{[
          ['01','Visão integrada','Posicionamento, conteúdo, audiovisual e presença digital pensados para falar a mesma língua.'],
          ['02','Estratégia antes da estética','O visual chama atenção. A direção certa faz essa atenção trabalhar a favor da marca.'],
          ['03','Contato que vira ação','Da descoberta ao WhatsApp, desenhamos caminhos claros para a comunicação continuar avançando.'],
        ].map(([n,title,body]) => <article key={n} className="border-t-2 border-[#800509] pt-5"><span className="text-xs font-bold text-[#800509]">{n}</span><h3 className="text-lg font-bold mt-7 mb-3 leading-tight">{title}</h3><p className="text-sm text-neutral-600 leading-relaxed">{body}</p></article>)}</div>
      </div>
    </section>
  </>
);
