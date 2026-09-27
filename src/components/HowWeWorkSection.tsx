import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { MessageSquare, ArrowRight, Compass, Route, Sparkles } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Entender a necessidade da empresa',
      description:
        'Ouvimos o seu momento atual, o perfil do seu público e o que a sua empresa oferece. O objetivo é compreender o cenário real antes de propor qualquer ação.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Definir uma direção de comunicação',
      description:
        'Alinhamos o tom de voz, a mensagem central e a prioridade dos canais para que a sua marca se posicione com clareza, coerência e intencionalidade.',
      icon: Route,
    },
    {
      number: '03',
      title: 'Desenvolver as ações combinadas',
      description:
        'Colocamos em prática os conteúdos, as produções e as presenças digitais acordadas, mantendo a comunicação ativa e o padrão visual da sua empresa.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="como-trabalhamos" className="py-20 md:py-24 bg-[#FAF9F6] border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-[#800509] mb-3">
            <span className="w-5 h-px bg-[#800509]"></span>
            <span>COMO TRABALHAMOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.15] text-balance">
            O caminho de um projeto{' '}
            <span className="text-[#800509] font-serif font-normal italic">com a Blend.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Uma abordagem direta e transparente para que você saiba como conduzimos a comunicação da sua marca, do primeiro alinhamento até as entregas do dia a dia.
          </p>
        </div>

        {/* 3 Steps Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-[#E8E4DF] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#D0C9BF] transition-all duration-200 card-hover-lift"
              >
                <div>
                  {/* Top indicator & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#800509] bg-[#800509]/8 px-2.5 py-1 rounded-md">
                      Momento {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 font-display leading-snug tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Subtle base indicator */}
                <div className="pt-6 mt-6 border-t border-[#F0ECE6] flex items-center gap-2 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800509]"></span>
                  <span>Alinhamento &amp; Continuidade</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action leading to Official WhatsApp */}
        <div className="mt-12 bg-white border border-[#E2DDD6] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-neutral-950 font-display">
              Quer avaliar o momento da comunicação da sua empresa?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-normal">
              Fale diretamente com a equipe da Blend Digital pelo WhatsApp e compartilhe os desafios do seu negócio.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Olá! Gostaria de contar a minha ideia para a Blend e entender como podemos trabalhar juntos.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs interactive-tap text-center"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Conte sua ideia para a Blend</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
