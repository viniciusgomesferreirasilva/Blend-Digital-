import React from 'react';

export interface BlendNewsLogoProps {
  variant?: 'burgundy' | 'white' | 'dark';
  withSlogan?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official Blend NEWS Brand Logo
 * Rendered from page 2 of "LOGO BLEND(1).pdf".
 *
 * Typography:
 * - "Blend": Bold grotesque uppercase/titlecase sans with negative tracking.
 * - "NEWS": Heavy high-impact geometric all-caps with solid square cutouts.
 * - Slogan: "Quem movimenta aparece!" in light, airy rounded geometric sans.
 */
export const BlendNewsLogo: React.FC<BlendNewsLogoProps> = ({
  variant = 'burgundy',
  withSlogan = true,
  className = '',
  size = 'md',
}) => {
  const primaryColor =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'dark'
      ? '#111111'
      : '#800509';

  const sloganColor =
    variant === 'white'
      ? 'rgba(255, 255, 255, 0.94)'
      : variant === 'dark'
      ? 'rgba(17, 17, 17, 0.85)'
      : '#800509';

  const heightClasses = {
    sm: withSlogan ? 'h-14 md:h-16' : 'h-10 md:h-12',
    md: withSlogan ? 'h-20 md:h-24' : 'h-14 md:h-16',
    lg: withSlogan ? 'h-28 md:h-32' : 'h-20 md:h-24',
    xl: withSlogan ? 'h-36 md:h-40' : 'h-26 md:h-30',
  }[size];

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <svg
        viewBox={withSlogan ? '0 0 380 230' : '0 0 380 180'}
        className={`${heightClasses} w-auto max-w-full`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Blend NEWS - Quem movimenta aparece!"
        role="img"
      >
        <defs>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=Outfit:wght@300;400&display=swap');
            .blend-news-title {
              font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
              font-weight: 800;
              letter-spacing: -0.035em;
            }
            .blend-news-block {
              font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
              font-weight: 900;
              letter-spacing: 0.01em;
            }
            .blend-news-slogan {
              font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif;
              font-weight: 300;
              letter-spacing: 0.04em;
            }
          `}</style>
        </defs>

        {/* 'Blend' */}
        <text
          x="190"
          y="72"
          textAnchor="middle"
          className="blend-news-title"
          fontSize="76"
          fill={primaryColor}
        >
          Blend
        </text>

        {/* 'NEWS' in massive heavyweight sans */}
        <text
          x="190"
          y="152"
          textAnchor="middle"
          className="blend-news-block"
          fontSize="88"
          fill={primaryColor}
        >
          NEWS
        </text>

        {/* Slogan: "Quem movimenta aparece!" */}
        {withSlogan && (
          <text
            x="190"
            y="204"
            textAnchor="middle"
            className="blend-news-slogan"
            fontSize="23"
            fill={sloganColor}
          >
            Quem movimenta aparece!
          </text>
        )}
      </svg>
    </div>
  );
};
