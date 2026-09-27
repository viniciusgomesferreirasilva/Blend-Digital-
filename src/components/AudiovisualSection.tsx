import React, { useState } from 'react';
import { BlendLogo } from './logos/BlendLogo';
import { Video, Plus, X, Sparkles } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

export const AudiovisualSection: React.FC = () => {
  // Empty state by default as requested: Reserved space for future videos
  const [videoList, setVideoList] = useState<VideoItem[]>([]);
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    setVideoList([
      ...videoList,
      {
        id: Date.now().toString(),
        title: newTitle,
        url: newUrl,
      },
    ]);
    setNewTitle('');
    setNewUrl('');
    setIsAddingVideo(false);
  };

  const handleRemoveVideo = (id: string) => {
    setVideoList(videoList.filter((v) => v.id !== id));
  };

  return (
    <section id="audiovisual" className="py-20 md:py-24 bg-[#FAF9F6] border-b border-[#EAE6E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-bold tracking-wider uppercase text-[#800509] mb-3">
              <span className="w-5 h-px bg-[#800509]"></span>
              <span>Linguagem de Retenção &amp; Conexão</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 font-display text-balance leading-tight">
              Produção Audiovisual, Videomaker &amp;{' '}
              <span className="text-[#800509] font-serif font-normal italic">Storymaker.</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              O vídeo é o formato mais eficiente para gerar autoridade imediata e prender a atenção. Desenvolvemos desde a narrativa institucional até a cobertura dinâmica de rotina.
            </p>
          </div>

          {/* Setup / Config button */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => setIsAddingVideo(!isAddingVideo)}
              className="px-3.5 py-2 text-xs font-bold text-neutral-700 bg-white hover:text-[#800509] hover:bg-neutral-50 active:bg-neutral-100 border border-[#DCD6CE] rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs interactive-tap cursor-pointer"
            >
              <Video className="w-3.5 h-3.5 text-[#800509]" />
              <span>{isAddingVideo ? 'Fechar Configuração' : 'Inserir Vídeo da Blend'}</span>
            </button>
          </div>
        </div>

        {/* Video Insertion Form Modal/Card */}
        {isAddingVideo && (
          <div className="mb-10 bg-white border border-[#E2DDD6] p-6 rounded-xl shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E4DF]">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                <Sparkles className="w-4 h-4 text-[#800509]" />
                <span>Adicionar Vídeo Institucional ou Reel</span>
              </div>
              <button
                onClick={() => setIsAddingVideo(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-neutral-600 mt-2 mb-4 font-normal">
              Cole o link de incorporação do YouTube, Vimeo ou arquivo MP4 da Blend Digital para substituir a área de reserva pelos vídeos reais:
            </p>

            <form onSubmit={handleAddVideo} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
              <div className="sm:col-span-5 space-y-1">
                <label className="text-[11px] font-bold text-neutral-700">Título do Vídeo</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Vídeo Institucional 2026"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-4 space-y-1">
                <label className="text-[11px] font-bold text-neutral-700">URL do Vídeo</label>
                <input
                  type="url"
                  required
                  placeholder="https://youtube.com/embed/..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] rounded-lg transition-colors flex items-center justify-center gap-1.5 interactive-tap"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Publicar Vídeo</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 
          Official Display Area
          Requirement: Application of the original Blend logo over pure white background
          with exact text: "Espaço reservado para futuros vídeos e exemplos de trabalhos."
        */}
        {videoList.length === 0 ? (
          /* Reserved Space with Original Blend Logo over crisp white background with rounded-xl */
          <div className="bg-white border border-[#E2DDD6] rounded-xl p-10 sm:p-16 flex flex-col items-center justify-center text-center shadow-2xs">
            <div className="max-w-md w-full flex flex-col items-center space-y-6">
              {/* Application of the original Blend logo over pure white background */}
              <div className="p-6 sm:p-8 bg-white border border-[#F0ECE6] rounded-xl shadow-2xs flex items-center justify-center w-full max-w-sm">
                <BlendLogo variant="burgundy" withSubtitle={true} size="lg" />
              </div>

              {/* Exact required text */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                  Espaço reservado para futuros vídeos e exemplos de trabalhos.
                </p>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed font-normal">
                  Esta vitrine está configurada para exibir as produções oficiais da Blend Digital assim que os links forem adicionados.
                </p>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF9F6] border border-[#E8E4DF] rounded-full text-xs font-bold text-[#800509]">
                  <span className="w-2 h-2 rounded-full bg-[#800509] animate-pulse"></span>
                  <span>Pronto para integração de mídia</span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Active Videos Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoList.map((video) => (
              <div
                key={video.id}
                className="bg-white border border-[#E2DDD6] rounded-xl overflow-hidden shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] w-full bg-neutral-900">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-neutral-950">{video.title}</h4>
                  </div>
                </div>
                <div className="p-4 pt-0 flex justify-end">
                  <button
                    onClick={() => handleRemoveVideo(video.id)}
                    className="text-xs font-bold text-neutral-400 hover:text-red-700 transition-colors rounded-md p-1"
                  >
                    Remover vídeo
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
