import React, { useState } from 'react';
import { NewsArticle } from '../types';
import { COMPANY_INFO } from '../data/content';
import { BlendNewsLogo } from './logos/BlendNewsLogo';
import { NewsEditorModal } from './NewsEditorModal';
import { ArticleBody, FormattedInline } from './FormattedArticle';
import {
  Search,
  ArrowRight,
  ArrowLeft,
  Share2,
  Edit3,
  Instagram,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface BlendNewsSectionProps {
  articles: NewsArticle[];
  onSaveArticle: (article: NewsArticle) => void;
  onDeleteArticle: (id: string) => void;
}

export const BlendNewsSection: React.FC<BlendNewsSectionProps> = ({
  articles,
  onSaveArticle,
  onDeleteArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Dedicated cover article: "A música que transforma vidas" (or the first featured article)
  const coverArticle =
    articles.find((a) => a.id === 'a-musica-que-transforma-vidas') ||
    articles.find((a) => a.featured) ||
    articles[0];

  // The 6 key editorial highlights from the reference screenshots
  const latestArticles = articles.filter((a) => a.id !== coverArticle?.id);

  const categories = [
    'Todas',
    ...Array.from(new Set(articles.map((a) => a.category))),
  ];

  const filteredArticles = latestArticles.filter((art) => {
    const matchesCategory =
      selectedCategory === 'Todas' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const peopleBehind = [
    { number: '01', name: 'Ricardo Borges', role: 'Arte Sobre as Cordas' },
    { number: '02', name: 'Elise Madella', role: 'Advocacia' },
    { number: '03', name: 'Susete', role: 'Contabilidade' },
    { number: '04', name: 'Talita', role: 'Nutrição' },
    { number: '05', name: 'David Pedro', role: 'Mercado Imobiliário' },
    { number: '06', name: 'Gabriela', role: 'Arquitetura' },
    { number: '07', name: 'Matheus Matias', role: 'Fotografia' },
  ];

  const editorialThemes = [
    'Negócios',
    'Empreendedorismo',
    'Marketing',
    'Branding',
    'Tecnologia',
    'Cultura',
    'Eventos',
    'Networking',
    'Conexões',
  ];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="news" className="py-20 md:py-24 bg-white border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* If Reading a Single Article */}
        {activeArticle ? (
          <div className="max-w-3xl mx-auto animate-in fade-in duration-200">
            {/* Top Back Bar */}
            <div className="mb-8 flex items-center justify-between pb-4 border-b border-[#E8E4DF]">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  window.scrollTo({ top: document.getElementById('news')?.offsetTop || 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-[#800509] hover:bg-[#800509]/5 px-3 py-2 rounded-lg transition-colors cursor-pointer interactive-tap"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para a Blend News</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 hover:text-[#800509] hover:bg-neutral-100 rounded-lg transition-colors"
                  aria-label="Instagram da Blend Digital"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900 border border-neutral-200 px-3 py-1.5 rounded-lg interactive-tap"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Copiado!' : 'Compartilhar'}</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <article className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-bold uppercase tracking-wider mb-3">
                  <span className="text-[#800509]">{activeArticle.category}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span className="font-normal normal-case text-neutral-600">{activeArticle.date}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span className="font-normal normal-case text-neutral-600">{activeArticle.readTime}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-extrabold text-[#800509] font-display leading-[1.2] tracking-tight pb-1.5 overflow-visible text-balance">
                  <FormattedInline text={activeArticle.title} />
                </h1>

                {activeArticle.author && (
                  <p className="mt-2 text-sm font-bold text-neutral-900">
                    {activeArticle.author} <span className="font-normal text-neutral-500">· {activeArticle.authorRole}</span>
                  </p>
                )}

                <div className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal border-l-2 border-[#800509]/40 pl-4 py-1">
                  <FormattedInline text={activeArticle.excerpt} />
                </div>
              </div>

              {/* Cover Image or Editorial Placeholder */}
              {activeArticle.imageUrl ? (
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E2DDD6] bg-neutral-100 shadow-2xs">
                  <img
                    src={activeArticle.imageUrl}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ) : activeArticle.sourceUrl ? (
                <div className="w-full aspect-[16/9] rounded-2xl bg-[#800509] text-white flex flex-col justify-between p-7 sm:p-10 overflow-hidden">
                  <span className="text-xs font-bold tracking-[.18em] uppercase text-white/80">Blend News / {activeArticle.category}</span>
                  <strong className="text-3xl sm:text-5xl font-extrabold tracking-[-.055em] leading-tight max-w-xl">{activeArticle.title}</strong>
                </div>
              ) : (
                /* Keep the existing editorial image placeholder for older stories awaiting real photos. */
                <div className="w-full aspect-[16/9] rounded-2xl border-2 border-dashed border-[#DCD6CE] bg-[#FAF9F6] flex flex-col items-center justify-center p-6 text-center text-neutral-400">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
                    FOTO EM BREVE
                  </span>
                  <p className="text-[11px] text-neutral-400 max-w-xs font-normal">
                    Espaço reservado para as fotografias reais enviadas pela redação da Blend News.
                  </p>
                </div>
              )}

              {/* Article Prose with Clean Open Sans Typography */}
              <div className="pt-2">
                <ArticleBody content={activeArticle.content} />
              </div>

              {activeArticle.sourceUrl && (
                <div className="border-t border-[#E8E4DF] pt-5 text-sm">
                  <span className="block text-xs font-bold tracking-wider uppercase text-[#800509] mb-2">Fonte oficial</span>
                  <a className="font-bold text-[#800509] hover:underline break-words" href={activeArticle.sourceUrl} target="_blank" rel="noopener noreferrer">{activeArticle.sourceLabel || 'Ler fonte original'} ↗</a>
                </div>
              )}

              {/* CTA at article footer */}
              <div className="mt-10 p-6 bg-[#FAF9F6] border border-[#E8E4DF] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#800509] block">
                    Gostou desta pauta?
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 font-normal mt-0.5">
                    Converse com a redação ou sugira uma história para a próxima edição da Blend News.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Li a matéria "${activeArticle.title}" na Blend News e gostaria de conversar sobre esta pauta.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] rounded-lg transition-colors inline-flex items-center gap-2 shrink-0 interactive-tap shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Falar sobre esta pauta</span>
                </a>
              </div>

              {/* Back to all articles button */}
              <div className="pt-8 border-t border-[#EAE6E1] flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    window.scrollTo({ top: document.getElementById('news')?.offsetTop || 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 text-xs font-bold text-neutral-700 hover:text-[#800509] border border-neutral-300 rounded-lg transition-colors cursor-pointer interactive-tap"
                >
                  &larr; Voltar para todas as matérias
                </button>
              </div>
            </article>
          </div>
        ) : (
          /* Main Blend News Editorial Hub Layout */
          <div>
            {/* Top Bar with Instagram Link and Editorial Management */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#EAE6E1]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-wider uppercase text-[#800509]">
                  BLEND NEWS · BLOG
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-[#800509] transition-colors py-1 px-2 rounded-lg hover:bg-neutral-100"
                  aria-label="Instagram da Blend Digital"
                >
                  <Instagram className="w-4 h-4 text-[#800509]" />
                  <span className="hidden sm:inline">Instagram</span>
                </a>

                <button
                  onClick={() => setIsEditorOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-[#800509] border border-neutral-300 hover:border-[#800509] px-3 py-1.5 rounded-lg transition-colors cursor-pointer interactive-tap shadow-2xs"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Editar Conteúdo</span>
                </button>
              </div>
            </div>

            {/* 
              Headline matching screenshot:
              "Conectando pessoas, negócios e oportunidades."
              Subtítulo: "A revista da Blend Digital agora continua como blog: um espaço para contar histórias, apresentar profissionais, destacar negócios, registrar acontecimentos e compartilhar ideias que movimentam Santana de Parnaíba e região."
              Tag lateral: EDIÇÃO #01 · AGOSTO 2026
            */}
            <div className="mb-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                <div className="lg:col-span-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#800509] font-display leading-[1.08] tracking-tight text-balance">
                    Histórias e ideias que <span className="font-serif italic font-normal">movimentam o mercado.</span>
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed font-normal">
                    Da primeira edição da revista às pautas de marketing, audiovisual e tecnologia: histórias de pessoas e ideias úteis para quem constrói marcas.
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right">
                  <div className="inline-block lg:border-l-2 lg:border-[#800509]/30 lg:pl-4 py-1 text-left lg:text-right">
                    <span className="text-[11px] font-extrabold tracking-widest text-neutral-900 uppercase block">
                      EDIÇÃO #01
                    </span>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                      AGOSTO 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 
              01 — MATÉRIA DE CAPA
              Reference screenshot:
              "A música que transforma vidas"
              "Ricardo Borges e a Escola Livre de Música Arte Sobre as Cordas mostram como a música pode aproximar pessoas, desenvolver talentos e transformar trajetórias."
              Botão: "Quero conhecer a Blend News ↗" / "Ler matéria de capa ↗"
            */}
            {coverArticle && (
              <div className="mb-16">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800509]">
                    <span className="w-5 h-px bg-[#800509]"></span>
                    <span>01 — MATÉRIA DE CAPA</span>
                  </div>
                  <span className="text-xs text-neutral-500 font-normal hidden sm:inline">
                    Da primeira edição para o blog, as histórias continuam.
                  </span>
                </div>

                <div
                  onClick={() => setActiveArticle(coverArticle)}
                  className="bg-[#800509] text-white rounded-2xl p-7 sm:p-10 md:p-12 shadow-md cursor-pointer hover:shadow-xl transition-all duration-200 card-hover-lift group relative overflow-hidden"
                >
                  <div className="max-w-2xl space-y-4">
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest text-white/80 uppercase">
                      <span>01</span>
                      <span aria-hidden="true" className="text-white/40">·</span>
                      <span>CAPA · EDIÇÃO #01 · AGOSTO 2026</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight leading-[1.18] group-hover:text-white/95">
                      {coverArticle.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-100 font-normal leading-relaxed">
                      {coverArticle.excerpt}
                    </p>

                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white group-hover:underline">
                        <span>Ler matéria completa na Blend News</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 
              02 — ÚLTIMAS MATÉRIAS
              Reference screenshot:
              Grid com 6 matérias da edição:
              - Negócios: Nasce a Blend News: uma revista para quem faz acontecer
              - Marketing: Instagram, Reels e posicionamento: presença digital virou estratégia
              - Negócios Locais: Google Meu Negócio: quando ser encontrado também é oportunidade
              - Tecnologia: Inteligência artificial e criatividade no dia a dia das empresas
              - Conexões: Networking também é estratégia
              - Empreendedorismo: Quem faz parte dessa história
            */}
            <div className="mb-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-[#EAE6E1]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800509] mb-1">
                    <span className="w-5 h-px bg-[#800509]"></span>
                    <span>02 — ÚLTIMAS MATÉRIAS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950">
                    Últimas matérias da Blend News
                  </h3>
                </div>

                <span className="text-xs text-neutral-500 font-normal">
                  Negócios, marketing, empreendedorismo, tecnologia, cultura e conexões.
                </span>
              </div>

              {/* Category Filter & Search Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pb-6 mb-8">
                <div className="flex flex-wrap items-center gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 text-xs rounded-lg transition-colors cursor-pointer interactive-tap ${
                        selectedCategory === cat
                          ? 'bg-[#800509] text-white shadow-2xs font-bold'
                          : 'bg-[#FAF9F6] text-neutral-700 hover:bg-neutral-200 font-normal'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative max-w-xs w-full">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar matérias..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF9F6] border border-[#E2DDD6] rounded-lg focus:outline-none focus:border-[#800509] font-normal"
                  />
                </div>
              </div>

              {/* Matérias Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <button
                    type="button"
                    key={article.id}
                    onClick={() => setActiveArticle(article)}
                    className="group text-left w-full bg-white border border-[#E8E4DF] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-[#D0C9BF] transition-all duration-200 cursor-pointer card-hover-lift focus-visible:outline-2 focus-visible:outline-[#800509]"
                  >
                    <div>
                      {/* Top tag: CATEGORIA · EDIÇÃO #01 */}
                      <div className="flex items-center justify-between text-[11px] font-bold text-neutral-500 mb-4 pb-2 border-b border-[#F0ECE6]">
                        <span className="text-[#800509] uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {article.date}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-neutral-950 font-display leading-[1.3] tracking-tight group-hover:text-[#800509] transition-colors mb-2.5 pb-0.5 overflow-visible">
                        <FormattedInline text={article.title} />
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6 line-clamp-3">
                        <FormattedInline text={article.excerpt} />
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#F0ECE6] flex items-center justify-between text-xs">
                      <span className="font-bold text-neutral-900 group-hover:text-[#800509] inline-flex items-center gap-1.5 transition-colors">
                        <span>Ler matéria completa</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 
              03 — AS PESSOAS POR TRÁS
              Reference screenshot:
              Fundo escuro/preto (#111111 / #0A0A0A)
              Kicker: 03 — EDIÇÃO DE INAUGURAÇÃO
              Título: As pessoas por trás
              Texto: "A primeira edição da Blend News foi criada para aproximar diferentes áreas, trajetórias e negócios. Estes são alguns dos profissionais que fazem parte desse começo."
              Lista de 7 profissionais:
              01 Ricardo Borges · Arte Sobre as Cordas ↗
              02 Elise Madella · Advocacia ↗
              03 Susete · Contabilidade ↗
              04 Talita · Nutrição ↗
              05 David Pedro · Mercado Imobiliário ↗
              06 Gabriela · Arquitetura ↗
              07 Matheus Matias · Fotografia ↗
            */}
            <div className="mb-20 bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#800509]">
                    03 — EDIÇÃO DE INAUGURAÇÃO
                  </span>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                    As pessoas por trás
                  </h3>

                  <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-2">
                    A primeira edição da Blend News foi criada para aproximar diferentes áreas, trajetórias e negócios. Estes são alguns dos profissionais que fazem parte desse começo.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {peopleBehind.map((person) => (
                      <div
                        key={person.number}
                        className="p-4 bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-between select-none cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-bold text-neutral-500 font-mono">
                            {person.number}
                          </span>
                          <div>
                            <span className="text-sm font-bold text-white block">
                              {person.name}
                            </span>
                            <span className="text-xs text-neutral-400 font-normal">
                              {person.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 
              04 — O QUE VOCÊ ENCONTRA AQUI
              Reference screenshot:
              Lista dos temas com separadores:
              Negócios | Empreendedorismo | Marketing | Branding | Tecnologia | Cultura | Eventos | Networking | Conexões
            */}
            <div className="mb-20 py-10 px-6 sm:px-10 bg-[#FAF9F6] border border-[#E8E4DF] rounded-2xl">
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#800509] block mb-1">
                  04 — O QUE VOCÊ ENCONTRA AQUI
                </span>
                <h4 className="text-lg font-bold text-neutral-900 font-display">
                  Pautas Estratégicas &amp; Editoriais
                </h4>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base sm:text-lg font-bold text-neutral-900">
                {editorialThemes.map((theme, idx) => (
                  <React.Fragment key={theme}>
                    <span className="hover:text-[#800509] transition-colors">{theme}</span>
                    {idx < editorialThemes.length - 1 && (
                      <span aria-hidden="true" className="text-neutral-300 font-normal">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 
              05 — PARTICIPE: Tem uma história para contar?
              Reference screenshot:
              Kicker: 05 — PARTICIPE
              Título: Tem uma história para contar?
              Botão: Falar com a Blend ↗
            */}
            <div className="bg-white border-2 border-[#800509] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#800509] block">
                  05 — PARTICIPE
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight">
                  Tem uma história para contar?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  A Blend News é um espaço aberto para profissionais e empresas que estão fazendo a diferença em Santana de Parnaíba e região. Compartilhe sua trajetória com a gente.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Olá! Tenho uma história e gostaria de sugerir uma pauta para a Blend News.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs interactive-tap cursor-pointer"
                >
                  <span>Falar com a Blend</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* News Editor Modal */}
      <NewsEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        articles={articles}
        onSaveArticle={onSaveArticle}
        onDeleteArticle={onDeleteArticle}
      />
    </section>
  );
};
