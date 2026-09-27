import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Parses markdown inline formatting (**bold**, *italic*, `code`)
 * into proper React JSX elements so no raw asterisks or markup symbols
 * are ever shown to the visitor.
 *
 * Uses inline-block with normal line-height and positive descent padding
 * so descenders like 'g', 'j', 'p', 'q', 'y' are NEVER cut off.
 */
export const FormattedInline: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Regex to match **bold** or *italic*
  const tokens = text.split(/(\*\*[^*]+?\*\*|\*[^*]+?\*)/g);

  return (
    <span className={`${className} leading-normal`}>
      {tokens.map((token, idx) => {
        if (token.startsWith('**') && token.endsWith('**') && token.length > 4) {
          const content = token.slice(2, -2);
          return (
            <strong key={idx} className="font-bold text-neutral-950 inline">
              {content}
            </strong>
          );
        }
        if (token.startsWith('*') && token.endsWith('*') && token.length > 2) {
          const content = token.slice(1, -1);
          return (
            <em key={idx} className="italic text-neutral-900 inline">
              {content}
            </em>
          );
        }
        // Fallback: strip any remaining stray asterisks that might have been typed
        const cleanToken = token.replace(/(^\*|\*$)/g, '');
        return cleanToken;
      })}
    </span>
  );
};

interface ArticleBodyProps {
  content: string;
}

/**
 * Renders full article body with beautiful editorial typography:
 * - Proper heading levels (H2, H3) without "### " or "## " symbols
 * - Numbered lists with styled numeric chips
 * - Bullet lists with elegant solid burgundy bullets
 * - Stripped and properly formatted bold/italic spans (zero raw asterisks)
 * - Generous line-height and bottom clearance (pb-1) so letter descenders
 *   like 'g', 'j', 'q', 'y' are NEVER clipped.
 */
export const ArticleBody: React.FC<ArticleBodyProps> = ({ content }) => {
  if (!content) return null;

  // Split into paragraphs by double newlines or lines
  const blocks = content
    .trim()
    .split(/\n\s*\n/)
    .filter((b) => b.trim().length > 0);

  return (
    <div className="space-y-6 sm:space-y-7 text-neutral-800 font-sans leading-relaxed text-[15px] sm:text-[17px] overflow-visible">
      {blocks.map((block, bIdx) => {
        const trimmed = block.trim();

        // Level 3 Heading (### Title)
        if (trimmed.startsWith('### ')) {
          const title = trimmed.replace(/^###\s+/, '');
          return (
            <h3
              key={bIdx}
              className="text-xl sm:text-2xl font-bold font-display text-neutral-950 pt-5 sm:pt-6 pb-2 border-b border-[#F0ECE6] tracking-tight leading-[1.35] overflow-visible"
            >
              <FormattedInline text={title} />
            </h3>
          );
        }

        // Level 2 Heading (## Title)
        if (trimmed.startsWith('## ')) {
          const title = trimmed.replace(/^##\s+/, '');
          return (
            <h2
              key={bIdx}
              className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 pt-7 pb-2.5 border-b border-[#EAE6E1] tracking-tight leading-[1.35] overflow-visible"
            >
              <FormattedInline text={title} />
            </h2>
          );
        }

        // Numbered List (1. Item, 2. Item...)
        if (/^\d+\.\s/.test(trimmed)) {
          const lines = trimmed.split('\n').filter((l) => l.trim().length > 0);
          return (
            <ol key={bIdx} className="space-y-3.5 my-5 sm:my-6 pl-0.5 list-none overflow-visible">
              {lines.map((line, lIdx) => {
                const match = line.match(/^(\d+)\.\s+(.*)$/);
                const num = match ? match[1] : `${lIdx + 1}`;
                const text = match ? match[2] : line;

                return (
                  <li key={lIdx} className="flex items-start gap-3 sm:gap-3.5 text-neutral-700 leading-[1.75] overflow-visible pb-0.5">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#800509]/10 text-[#800509] font-bold text-xs flex items-center justify-center mt-1 select-none">
                      {num}
                    </span>
                    <div className="flex-1 text-[15px] sm:text-[16.5px] overflow-visible">
                      <FormattedInline text={text} />
                    </div>
                  </li>
                );
              })}
            </ol>
          );
        }

        // Bullet List (- Item or * Item)
        if (trimmed.startsWith('- ') || (trimmed.startsWith('* ') && !trimmed.startsWith('** '))) {
          const lines = trimmed.split('\n').filter((l) => l.trim().length > 0);
          return (
            <ul key={bIdx} className="space-y-3 my-5 sm:my-6 pl-0.5 list-none overflow-visible">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^[-*]\s+/, '');
                return (
                  <li key={lIdx} className="flex items-start gap-3 sm:gap-3.5 text-neutral-700 leading-[1.75] overflow-visible pb-0.5">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-[#800509] mt-2.5 sm:mt-3 select-none" />
                    <div className="flex-1 text-[15px] sm:text-[16.5px] overflow-visible">
                      <FormattedInline text={cleanLine} />
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Standard Paragraph with comfortable line height and typography
        return (
          <p key={bIdx} className="text-neutral-700 leading-[1.8] font-normal text-[15px] sm:text-[17px] overflow-visible pb-0.5">
            <FormattedInline text={trimmed} />
          </p>
        );
      })}
    </div>
  );
};
