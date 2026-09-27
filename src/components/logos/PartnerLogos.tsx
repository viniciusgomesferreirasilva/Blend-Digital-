import React from 'react';

/**
 * Faithfully vector-crafted logos replicating with precision the 8 partner brands
 * shown in the user's reference photo (WhatsApp Image 2026-09-25 at 23.03.16.jpeg):
 *
 * 1. APT CONTAINERS:
 *    - Globe dotted matrix with blue gradient dots
 *    - Magenta-red folded/angled container base wedge
 *    - Bold slate "APT" + tracked red "CONTAINERS"
 *
 * 2. CONTIS:
 *    - Bold black interlocking hexagonal prism badge (folded ribbon geometric shape)
 *    - High-contrast black "CONTIS" + uppercase "CONSULTORIA DE NEGOCIOS"
 *
 * 3. FATTO Industrial:
 *    - High-impact bold black sans "FATTO"
 *    - Wide-spaced lowercase "i n d u s t r i a l"
 *    - Centered tagline "PRESENTE EM SEU FUTURO"
 *
 * 4. YUCARD:
 *    - Blue tilted rounded badge (solid blue shape with lighter border) + bold white "YU"
 *    - Heavy bold black "CARD"
 *
 * 5. PURIFY:
 *    - Vibrant cyan/turquoise modern geometric lowercase/rounded uppercase glyphs:
 *      P: The stem of the P flows seamlessly down into a royal blue water droplet.
 *      U: Rounded rectangular U.
 *      r: Rounded arch.
 *      i: Vertical stem with round dot.
 *      F: Rounded crossbars.
 *      y: Rounded descender loop.
 *    - Subtitle in italic dark slate text: "Tratamento e Filtragem de Água."
 *
 * 6. VENDRAME:
 *    - Stylized engineer icon wearing a safety hard-hat, with cupped hands forming a protective base
 *    - Heavy navy/royal blue uppercase "VENDRAME"
 *
 * 7. MOURA FONSECA:
 *    - Stylized logo icon: two interconnected human figures (left: blue, right: cyan) with square heads and curved shoulders
 *    - Classic serif typography "MOURA FONSECA" + "Assessoria em Recursos Humanos"
 *
 * 8. Helfen MOTORS:
 *    - Multi-layered chrome/silver winged heraldic crest with 3 tiers of feather plumes,
 *      top arrow crest and gradient metallic finish.
 *    - Stylized wide automotive "Helfen" typography with high-gloss chrome gradient:
 *      light silver top reflection (#FFFFFF, #E2E8F0), dark gunmetal mid-band (#334155, #1E293B)
 *      and polished silver base (#94A3B8, #CBD5E1) with 3D drop shadow outline.
 *    - Wide tracked clean sans "MOTORS" in metallic gray.
 */

export const AptContainersLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex items-center justify-center gap-3 select-none ${className}`}>
    <svg
      viewBox="0 0 76 76"
      className="h-full w-auto max-w-[68px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Globe Dotted Matrix */}
      <circle cx="20" cy="18" r="2.3" fill="#38BDF8" />
      <circle cx="29" cy="15" r="2.4" fill="#0EA5E9" />
      <circle cx="38" cy="14" r="2.5" fill="#0284C7" />
      <circle cx="47" cy="16" r="2.2" fill="#1D4ED8" />

      <circle cx="14" cy="27" r="2.4" fill="#38BDF8" />
      <circle cx="23" cy="25" r="2.8" fill="#0EA5E9" />
      <circle cx="32" cy="24" r="2.9" fill="#0284C7" />
      <circle cx="41" cy="25" r="2.6" fill="#1D4ED8" />

      <circle cx="10" cy="37" r="2.4" fill="#7DD3FC" />
      <circle cx="18" cy="36" r="2.8" fill="#38BDF8" />
      <circle cx="27" cy="35" r="3.1" fill="#0284C7" />
      <circle cx="36" cy="36" r="2.8" fill="#1D4ED8" />

      <circle cx="12" cy="47" r="2.3" fill="#BAE6FD" />
      <circle cx="20" cy="46" r="2.7" fill="#38BDF8" />
      <circle cx="29" cy="47" r="2.9" fill="#0284C7" />

      <circle cx="18" cy="56" r="2.2" fill="#BAE6FD" />
      <circle cx="25" cy="56" r="2.5" fill="#38BDF8" />

      {/* Folded red/magenta container wedge */}
      <path d="M 37 46 L 47 28 L 57 44 L 46 62 Z" fill="#DC2626" />
      <path d="M 47 30 L 59 39 L 51 57 Z" fill="#B91C1C" />
      <path d="M 35 48 L 45 63 L 37 66 Z" fill="#991B1B" />
      <path d="M 44 60 L 52 56 L 49 63 Z" fill="#7F1D1D" />
    </svg>

    <div className="flex flex-col text-left leading-none">
      <span className="font-extrabold text-2xl sm:text-[1.75rem] tracking-tight text-[#1E293B] font-sans">
        APT
      </span>
      <span className="font-bold text-[9px] sm:text-[10px] tracking-[0.24em] text-[#E11D48] uppercase mt-1">
        CONTAINERS
      </span>
    </div>
  </div>
);

export const ContisLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex items-center justify-center gap-3.5 select-none ${className}`}>
    <svg
      viewBox="0 0 68 68"
      className="h-full w-auto max-w-[60px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer Hexagon */}
      <polygon
        points="34,4 62,20 62,50 34,66 6,50 6,20"
        stroke="#111827"
        strokeWidth="5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner Interlocking Ribbon Facets */}
      <path
        d="M 34 13 L 52 23 L 52 45 L 34 55 L 24 49"
        stroke="#111827"
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 23 27 L 34 20 L 43 25 L 43 41 L 34 46 L 27 42"
        stroke="#111827"
        strokeWidth="3.6"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="23" y1="27" x2="23" y2="38" stroke="#111827" strokeWidth="3.6" strokeLinecap="round" />
    </svg>

    <div className="flex flex-col text-left">
      <span className="font-black text-2xl sm:text-[1.75rem] tracking-tight text-neutral-950 font-sans leading-none">
        CONTIS
      </span>
      <span className="text-[7.5px] sm:text-[8px] font-bold tracking-[0.18em] text-neutral-800 uppercase mt-1.5 leading-none">
        CONSULTORIA DE NEGOCIOS
      </span>
    </div>
  </div>
);

export const FattoIndustrialLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
    <span className="font-black text-3xl sm:text-[2.1rem] tracking-tight text-black font-sans leading-none">
      FATTO
    </span>
    <span className="text-[10px] sm:text-[11.5px] font-bold tracking-[0.48em] text-neutral-900 uppercase mt-1.5 pl-1.5 leading-none">
      i n d u s t r i a l
    </span>
    <span className="text-[7px] sm:text-[7.5px] font-bold tracking-[0.2em] text-neutral-600 uppercase mt-2 leading-none">
      PRESENTE EM SEU FUTURO
    </span>
  </div>
);

export const YucardLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex items-center justify-center gap-2 select-none ${className}`}>
    <svg
      viewBox="0 0 76 60"
      className="h-full w-auto max-w-[66px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bottom dark card */}
      <rect
        x="6"
        y="12"
        width="60"
        height="40"
        rx="9"
        transform="rotate(-9 36 32)"
        fill="#1E3A8A"
      />
      {/* Top primary blue card with subtle white rim */}
      <rect
        x="10"
        y="8"
        width="58"
        height="40"
        rx="9"
        transform="rotate(3 39 28)"
        fill="#2563EB"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      {/* "YU" embossed in white */}
      <text
        x="39"
        y="35"
        fill="#FFFFFF"
        fontFamily="'Open Sans', system-ui, sans-serif"
        fontWeight="900"
        fontSize="23"
        letterSpacing="-0.04em"
        textAnchor="middle"
        transform="rotate(3 39 35)"
      >
        YU
      </text>
    </svg>

    <span className="font-black text-2xl sm:text-[1.8rem] tracking-[-0.04em] text-neutral-950 font-sans">
      CARD
    </span>
  </div>
);

/**
 * PURIFY Logo:
 * Exact match to reference photo:
 * - Rounded modern turquoise/cyan typography for "PURIFY"
 * - The stem of the 'P' connects and transitions directly into a royal blue teardrop water droplet at the bottom-left
 * - Subtitle: "Tratamento e Filtragem de Água." in crisp italic script font
 */
export const PurifyLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex flex-col items-center justify-center select-none text-center ${className}`}>
    <div className="flex items-center justify-center leading-none">
      <svg
        viewBox="0 0 200 60"
        className="h-9 sm:h-10 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="purifyDropletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
          <linearGradient id="purifyCyanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Royal Blue Water Droplet at the lower base of P */}
        <path
          d="M 23 28 C 23 28 12 37 12 46 C 12 52.5 17 57 23.5 57 C 30 57 35 52.5 35 46 C 35 37 23 28 23 28 Z"
          fill="url(#purifyDropletGrad)"
        />
        {/* Subtle droplet specular highlight */}
        <ellipse cx="20" cy="45" rx="3.5" ry="5.5" transform="rotate(-20 20 45)" fill="#38BDF8" opacity="0.6" />

        {/* 
          Stylized "PURIFY" glyphs in vibrant turquoise/cyan:
          Carefully drafted rounded technical geometry as in the original trademark.
        */}
        {/* Letter P: loop on top, vertical stem ending at droplet */}
        <path
          d="M 23 10 L 40 10 C 47.5 10 52 14.5 52 22 C 52 29.5 47.5 34 40 34 L 29.5 34 L 29.5 35.5 C 27 34 24.5 33 23 33 Z"
          fill="url(#purifyCyanGrad)"
        />
        <path
          d="M 23 10 L 29.5 10 L 29.5 34 L 23 34 Z"
          fill="url(#purifyCyanGrad)"
        />
        {/* P inner counter cutout */}
        <rect x="29.5" y="16.5" width="10.5" height="11" rx="5.5" fill="#FFFFFF" />

        {/* Letter U: rounded bottom trough */}
        <path
          d="M 59 10 L 65.5 10 L 65.5 26 C 65.5 30 68.5 33 73.5 33 C 78.5 33 81.5 30 81.5 26 L 81.5 10 L 88 10 L 88 26 C 88 34.5 81.5 39.5 73.5 39.5 C 65.5 39.5 59 34.5 59 26 Z"
          fill="url(#purifyCyanGrad)"
        />

        {/* Letter r: lowercase rounded arch */}
        <path
          d="M 96 15 L 102.5 15 L 102.5 19 C 105 16 109 14.5 113.5 14.5 C 117 14.5 119.5 15.5 121 17 L 118 22.5 C 116.5 21.5 114.5 21 112 21 C 107.5 21 102.5 24 102.5 30 L 102.5 39 L 96 39 Z"
          fill="url(#purifyCyanGrad)"
        />

        {/* Letter i: rounded stem and circular dot */}
        <circle cx="130" cy="11.5" r="3.5" fill="url(#purifyCyanGrad)" />
        <rect x="126.5" y="18" width="7" height="21" rx="2" fill="url(#purifyCyanGrad)" />

        {/* Letter F: rounded upper horizontal bar & middle bar */}
        <path
          d="M 141 10 L 160 10 L 160 16 L 148 16 L 148 22.5 L 158 22.5 L 158 28.5 L 148 28.5 L 148 39 L 141 39 Z"
          fill="url(#purifyCyanGrad)"
        />

        {/* Letter y: modern rounded diagonal junction with curved tail */}
        <path
          d="M 166 18 L 173 18 L 178 30 L 183 18 L 190 18 L 181.5 35 C 179 40 175 43.5 169 43.5 L 166 43.5 L 166 38 L 168.5 38 C 171.5 38 173.5 36.5 174.5 34 Z"
          fill="url(#purifyCyanGrad)"
        />
      </svg>
    </div>

    <span className="text-[9px] sm:text-[10px] font-semibold tracking-tight text-neutral-800 italic mt-1 leading-none font-sans">
      Tratamento e Filtragem de Água.
    </span>
  </div>
);

export const VendrameLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex items-center justify-center gap-3 select-none ${className}`}>
    <svg
      viewBox="0 0 54 54"
      className="h-full w-auto max-w-[48px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Safety engineer figure with protective hard hat */}
      <path
        d="M 27 5 C 19 5 13 10 12 16 L 42 16 C 41 10 35 5 27 5 Z"
        fill="#1E3A8A"
      />
      <rect x="10" y="16" width="34" height="4" rx="2" fill="#1E3A8A" />
      {/* Face */}
      <circle cx="27" cy="24" r="6" fill="#1D4ED8" />
      {/* Cupped protective hands supporting torso */}
      <path
        d="M 9 44 C 9 32 17 28 27 28 C 37 28 45 32 45 44 Z"
        fill="#1E40AF"
      />
      <path
        d="M 9 44 C 11 36 17 33 22 36 L 27 41 L 32 36 C 37 33 43 36 45 44 Z"
        fill="#1D4ED8"
        opacity="0.9"
      />
    </svg>

    <span className="font-black text-2xl sm:text-[1.65rem] tracking-tight text-[#0F2864] font-sans">
      VENDRAME
    </span>
  </div>
);

export const MouraFonsecaLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex items-center justify-center gap-3 select-none ${className}`}>
    <svg
      viewBox="0 0 50 48"
      className="h-full w-auto max-w-[44px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Interlinked Human Figures (Human Resources) */}
      {/* Left person (cyan square head + shoulder) */}
      <rect x="11" y="6" width="9" height="9" rx="2" fill="#0EA5E9" />
      <path
        d="M 6 36 C 6 26 11 19 16 19 C 22 19 25 25 25 36 Z"
        fill="#0EA5E9"
      />

      {/* Right person (darker blue square head + shoulder) */}
      <rect x="29" y="6" width="9" height="9" rx="2" fill="#0369A1" />
      <path
        d="M 23 36 C 23 26 27 19 32 19 C 38 19 43 26 43 36 Z"
        fill="#0284C7"
      />
      {/* Interconnected center connection */}
      <line x1="16" y1="26" x2="33" y2="26" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>

    <div className="flex flex-col text-left">
      <span className="font-semibold text-lg sm:text-[1.25rem] tracking-tight text-neutral-900 font-serif leading-none">
        MOURA FONSECA
      </span>
      <span className="text-[7.5px] sm:text-[8px] font-normal tracking-wide text-neutral-600 uppercase mt-1 leading-none">
        Assessoria em Recursos Humanos
      </span>
    </div>
  </div>
);

/**
 * Helfen MOTORS Logo:
 * Exact match to reference photo:
 * - Chrome / silver winged heraldic crest symbol placed above the brand name
 * - Heavy stylized automotive "Helfen" lettering with polished chrome bevel gradient
 *   (bright silver highlight at top, dark gunmetal reflection horizon at mid-body, silver-white bevel at base)
 * - Tracked uppercase "MOTORS" in silver-gray placed centered beneath the name
 */
export const HelfenMotorsLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12' }) => (
  <div className={`flex flex-col items-center justify-center select-none text-center ${className}`}>
    <svg
      viewBox="0 0 160 88"
      className="h-14 sm:h-16 w-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Multi-stop Chrome Reflection Gradient */}
        <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="28%" stopColor="#E2E8F0" />
          <stop offset="48%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#1E293B" />
          <stop offset="53%" stopColor="#0F172A" />
          <stop offset="75%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Chrome Crest Gradient */}
        <linearGradient id="crestMetalLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="45%" stopColor="#CBD5E1" />
          <stop offset="80%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        <linearGradient id="crestMetalDark" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* Drop shadow filter for automotive 3D badge depth */}
        <filter id="chromeShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#0F172A" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 
        1. Silver/Chrome Winged Crest above the name:
        Features layered heraldic feather facets with sharp center spine and arrow tip
      */}
      <g filter="url(#chromeShadow)">
        {/* Central arrow spire */}
        <polygon points="80,4 85,16 80,14 75,16" fill="url(#crestMetalLight)" />
        <polygon points="80,4 80,14 75,16" fill="url(#crestMetalDark)" />

        {/* Upper tier wings */}
        <polygon points="80,14 96,10 89,19 80,16" fill="url(#crestMetalLight)" />
        <polygon points="80,14 64,10 71,19 80,16" fill="url(#crestMetalDark)" />

        {/* Middle tier wings (widest) */}
        <polygon points="80,16 102,14 91,25 80,21" fill="url(#crestMetalLight)" />
        <polygon points="80,16 58,14 69,25 80,21" fill="url(#crestMetalDark)" />

        {/* Lower tier feather base */}
        <polygon points="80,21 87,27 80,31 73,27" fill="url(#crestMetalLight)" />
        <polygon points="80,21 80,31 73,27" fill="url(#crestMetalDark)" />
      </g>

      {/* 
        2. "Helfen" Chrome Lettering:
        Rendered with custom automotive chrome gradient and dark reflection horizon
      */}
      <g filter="url(#chromeShadow)">
        {/* Stroke base for metallic extrusion edge */}
        <text
          x="80"
          y="62"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="900"
          fontSize="31"
          letterSpacing="-0.02em"
          fill="#334155"
          stroke="#1E293B"
          strokeWidth="3.5"
          strokeLinejoin="round"
        >
          Helfen
        </text>

        {/* Chrome Fill with light/dark horizon */}
        <text
          x="80"
          y="62"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="900"
          fontSize="31"
          letterSpacing="-0.02em"
          fill="url(#chromeGradient)"
        >
          Helfen
        </text>

        {/* Inner white highlight stroke for polished specular gleam */}
        <text
          x="80"
          y="62"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="900"
          fontSize="31"
          letterSpacing="-0.02em"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          opacity="0.85"
        >
          Helfen
        </text>
      </g>

      {/* 
        3. "MOTORS" Subtitle:
        Clean, widely spaced capital sans in metallic slate below the Helfen name
      */}
      <text
        x="80"
        y="78"
        textAnchor="middle"
        fontFamily="'Open Sans', system-ui, sans-serif"
        fontWeight="700"
        fontSize="10"
        letterSpacing="0.32em"
        fill="#64748B"
      >
        MOTORS
      </text>
    </svg>
  </div>
);
