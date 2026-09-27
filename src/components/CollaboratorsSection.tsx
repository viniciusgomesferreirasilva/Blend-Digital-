import React from 'react';
import {
  AptContainersLogo,
  ContisLogo,
  FattoIndustrialLogo,
  YucardLogo,
  PurifyLogo,
  VendrameLogo,
  MouraFonsecaLogo,
  HelfenMotorsLogo,
} from './logos/PartnerLogos';

export const CollaboratorsSection: React.FC = () => {
  // Exactly 8 official partner brands in the identical order shown in reference screenshot:
  // 1. APT CONTAINERS
  // 2. CONTIS
  // 3. FATTO industrial
  // 4. YUCARD
  // 5. PURIFY
  // 6. VENDRAME
  // 7. MOURA FONSECA
  // 8. Helfen MOTORS
  const partners = [
    {
      id: 'apt',
      name: 'APT CONTAINERS',
      component: <AptContainersLogo className="h-11 sm:h-12" />,
    },
    {
      id: 'contis',
      name: 'CONTIS Consultoria de Negócios',
      component: <ContisLogo className="h-11 sm:h-12" />,
    },
    {
      id: 'fatto',
      name: 'FATTO Industrial',
      component: <FattoIndustrialLogo className="h-11 sm:h-12" />,
    },
    {
      id: 'yucard',
      name: 'YUCARD',
      component: <YucardLogo className="h-11 sm:h-12" />,
    },
    {
      id: 'purify',
      name: 'PURIFY Tratamento e Filtragem de Água',
      component: <PurifyLogo className="h-11 sm:h-12" />,
    },
    {
      id: 'vendrame',
      name: 'VENDRAME',
      component: <VendrameLogo className="h-11 sm:h-12" />,
    },
    {
      id: 'moura-fonseca',
      name: 'MOURA FONSECA Assessoria em Recursos Humanos',
      component: <MouraFonsecaLogo className="h-11 sm:h-12" />,
    },
    {
      id: 'helfen',
      name: 'Helfen MOTORS',
      component: <HelfenMotorsLogo className="h-11 sm:h-12" />,
    },
  ];

  return (
    <section id="colaboradores" className="py-20 md:py-24 bg-white border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header exactly matching the reference screenshot */}
        <div className="max-w-2xl mb-12">
          {/* Subtle accent bar matching reference */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-8 h-1 bg-[#800509] rounded-full inline-block"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#800509]">
              Quem confia na gente
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.2] text-balance">
            Empresas de diferentes setores, o mesmo objetivo:{' '}
            <span className="text-[#800509] font-serif font-normal italic">vender mais.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Parceiros e clientes que contam com o posicionamento digital da Blend Digital para construir autoridade contínua e atrair clientes qualificados.
          </p>
        </div>

        {/* 
          Individual Partner Cards:
          - Ordered exactly: row 1 (APT, Contis), row 2 (FATTO, Yucard), row 3 (Purify, Vendrame), row 4 (Moura Fonseca, Helfen)
          - Pure crisp white background
          - Rounded-2xl borders matching reference
          - Ample breathing room around each logo
          - Zero distortion, no stretching
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-[#E8E4DF] rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[140px] sm:min-h-[160px] shadow-2xs hover:shadow-md hover:border-[#D0C9BF] transition-all duration-200 card-hover-lift"
            >
              <div className="w-full flex items-center justify-center overflow-visible">
                {partner.component}
              </div>
              <span className="sr-only">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center">
          <span className="text-xs text-neutral-500 font-normal">
            Marcas parceiras e clientes atendidos pela metodologia da Blend Digital
          </span>
        </div>
      </div>
    </section>
  );
};
