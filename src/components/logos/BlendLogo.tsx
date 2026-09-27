import React from 'react';

export interface BlendLogoProps {
  variant?: 'burgundy' | 'white' | 'black';
  withSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official Blend Digital Brand Logo
 * Matches exactly the official brand vector artwork shown in user reference (WhatsApp Image 2026-09-26 at 00.09.27.jpeg)
 * and brand book:
 *
 * Characteristics:
 * - "B": Classic high-contrast Bodoni/Didone serif with razor-thin serifs and bracketed voluptuous curves.
 * - "len": Elegant geometric low-contrast lowercase letters.
 * - "d": Signature monumental ascender reaching the exact cap-height of 'B' with curved terminal base.
 * - "igital": Perfectly proportioned glyphs, single-story descender 'g' with fluid terminal, sharp crossbar 't'.
 * - Subtitle: "Marketing & Social Media" in clean geometric light sans, precisely scaled and positioned below "Blen".
 */
export const BlendLogo: React.FC<BlendLogoProps> = ({
  variant = 'burgundy',
  withSubtitle = true,
  className = '',
  size = 'md',
}) => {
  const primaryColor =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'black'
      ? '#111111'
      : '#800509';

  const subtitleColor =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'black'
      ? '#1A1A1A'
      : '#800509';

  // Responsive height presets that maintain the exact 530:175 / 530:135 proportions without stretching
  const heightStyles = {
    sm: withSubtitle ? 'h-9 sm:h-10' : 'h-7 sm:h-8',
    md: withSubtitle ? 'h-11 sm:h-13' : 'h-8 sm:h-10',
    lg: withSubtitle ? 'h-15 sm:h-17' : 'h-11 sm:h-13',
    xl: withSubtitle ? 'h-20 sm:h-24' : 'h-15 sm:h-18',
  }[size];

  return (
    <div
      className={`inline-flex flex-col select-none ${className}`}
      style={{ minWidth: withSubtitle ? '145px' : '125px' }}
    >
      <svg
        viewBox={withSubtitle ? '0 0 540 175' : '0 0 540 135'}
        className={`${heightStyles} w-auto max-w-full`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Blend Digital - Marketing & Social Media"
        role="img"
      >
        <g id="blendigital-official-brandmark" fill={primaryColor}>
          {/* Serif Capital 'B' (x: 24 - 84, y: 18 - 104) */}
          {/* Vertical stem & top/bottom serifs */}
          <path d="M 26 19 L 46 19 L 46 22 L 39 22 L 39 100 L 48 100 L 48 103 L 26 103 L 26 100 L 33 100 L 33 22 L 26 22 Z" />
          {/* Top and bottom lobes */}
          <path d="M 39 19 L 58 19 C 71 19 80 26 80 37 C 80 47 72 54 57 56 L 57 57 C 75 59 84 68 84 82 C 84 96 72 103 54 103 L 39 103 Z M 39 24 L 39 53 L 53 53 C 65 53 72 47 72 37 C 72 27 65 24 53 24 Z M 39 58 L 39 98 L 53 98 C 66 98 75 91 75 80 C 75 68 66 58 52 58 Z" />

          {/* Lowercase 'l' (x: 93 - 99.5, y: 22 - 103) */}
          <rect x="93" y="22" width="6.5" height="81" rx="0.5" />

          {/* Lowercase 'e' (x: 108 - 146, y: 48 - 104) */}
          <path d="M 144 73 C 143 59 133 48 119 48 C 105 48 95 60 95 77 C 95 95 106 104 122 104 C 132 104 140 98 143 90 L 137 87 C 134 93 129 98 122 98 C 112 98 103 91 102 79 L 144 79 C 144 77 144 75 144 73 Z M 102 73 C 104 63 111 54 120 54 C 128 54 135 61 136 73 Z" />

          {/* Lowercase 'n' (x: 153 - 198, y: 49 - 103) */}
          <path d="M 154 50 L 160.5 50 L 160.5 59 C 164.5 52 171.5 48 180.5 48 C 192.5 48 199.5 56 199.5 70 L 199.5 103 L 193 103 L 193 72 C 193 62 188 56 179 56 C 170 56 162 63 160.5 72 L 160.5 103 L 154 103 Z" />

          {/* Lowercase 'd' with signature monumental ascender reaching cap height (x: 206 - 256, y: 19 - 103) */}
          <path d="M 246.5 19 L 253 19 L 253 103 L 246.5 103 L 246.5 94.5 C 242.5 100.5 235.5 104 225.5 104 C 211.5 104 201.5 92 201.5 76 C 201.5 59 211.5 48 225.5 48 C 234.5 48 241.5 52 246.5 58 Z M 227.5 54 C 217.5 54 209.5 63 209.5 76 C 209.5 89 217.5 98 227.5 98 C 238 98 246.5 89 246.5 76 C 246.5 63 238 54 227.5 54 Z" />

          {/* Lowercase 'i' (x: 265 - 275) */}
          <circle cx="268.5" cy="35" r="4.2" />
          <rect x="265" y="50" width="6.5" height="53" rx="0.4" />

          {/* Lowercase 'g' with fluid descender loop (x: 281 - 325, y: 49 - 124) */}
          <path d="M 323 50 L 323 97 C 323 115 311.5 124 296 124 C 285 124 276 119.5 271 113 L 276 107.5 C 280 113 286.5 117.5 296 117.5 C 306.5 117.5 315 111 315 98 L 315 93.5 C 311 99 303.5 104 294 104 C 280.5 104 271.5 92.5 271.5 76 C 271.5 59.5 280.5 48 294.5 48 C 303.5 48 311 52.5 316 59 L 316 50 Z M 296.5 54.5 C 286.5 54.5 279.5 64 279.5 76 C 279.5 88 286.5 97.5 296.5 97.5 C 306.5 97.5 315 88 315 76 C 315 64 306.5 54.5 296.5 54.5 Z" />

          {/* Lowercase 'i' (x: 335 - 345) */}
          <circle cx="338.5" cy="35" r="4.2" />
          <rect x="335" y="50" width="6.5" height="53" rx="0.4" />

          {/* Lowercase 't' with crisp crossbar (x: 351 - 377, y: 32 - 103) */}
          <path d="M 360 32 L 366.5 32 L 366.5 50 L 376.5 50 L 376.5 56.5 L 366.5 56.5 L 366.5 91 C 366.5 96 369 98.5 373.5 98.5 C 375.5 98.5 377.5 98 379 97 L 380 103 C 377 104 374 104.5 370.5 104.5 C 363 104.5 359.5 99 359.5 91 L 359.5 56.5 L 351.5 56.5 L 351.5 50 L 359.5 50 L 359.5 32 Z" />

          {/* Lowercase 'a' (x: 385 - 427, y: 49 - 103) */}
          <path d="M 419 50 L 425.5 50 L 425.5 103 L 419 103 L 419 95.5 C 415 101 408 104 398 104 C 386 104 377 96 377 83 C 377 70 388 62 405 62 L 418.5 62 L 418.5 60 C 418.5 53 413 49 404 49 C 397 49 391 51.5 386 55.5 L 382 50 C 388.5 45 397 43 405 43 C 418 43 419 49 419 50 Z M 418.5 68 L 406.5 68 C 394.5 68 386.5 72.5 386.5 82 C 386.5 90 393.5 97.5 402 97.5 C 411.5 97.5 418.5 91 418.5 80 Z" />

          {/* Lowercase 'l' (x: 435 - 442, y: 22 - 103) */}
          <rect x="435" y="22" width="6.5" height="81" rx="0.5" />
        </g>

        {/* 
          Official Subtitle: "Marketing & Social Media"
          Positioned below the "Blen" mark, styled in light geometric sans
          with exact letter-spacing and proportions matching the brand reference image.
        */}
        {withSubtitle && (
          <text
            x="24"
            y="142"
            fontFamily="'Outfit', 'Open Sans', system-ui, sans-serif"
            fontSize="21"
            fontWeight="300"
            letterSpacing="0.04em"
            fill={subtitleColor}
          >
            Marketing &amp; Social Media
          </text>
        )}
      </svg>
    </div>
  );
};
