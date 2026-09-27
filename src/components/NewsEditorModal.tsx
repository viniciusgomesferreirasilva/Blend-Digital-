import React, { useState } from 'react';
import { NewsArticle } from '../types';
import { FormattedInline } from './FormattedArticle';
import { X, Plus, Trash2, Check, ArrowLeft } from 'lucide-react';

interface NewsEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: NewsArticle[];
  onSaveArticle: (article: NewsArticle) => void;
  onDeleteArticle: (id: string) => void;
}

export const NewsEditorModal: React.FC<NewsEditorModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSaveArticle,
  onDeleteArticle,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<NewsArticle>>({
    title: '',
    category: 'Estratégia & Mercado',
    date: new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    readTime: '4 min de leitura',
    author: 'Equipe Blend Digital',
    authorRole: 'Estratégia & Comunicação',
    imageUrl: '',
    excerpt: '',
    content: '',
  });

  const [message, setMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelectToEdit = (article: NewsArticle) => {
    setEditingId(article.id);
    setFormData(article);
    setMessage(null);
  };

  const handleCreateNew = () => {
    setEditingId('new');
    setFormData({
      id: 'news-' + Date.now(),
      title: '',
      slug: '',
      category: 'Estratégia & Mercado',
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      readTime: '3 min de leitura',
      author: 'Equipe Blend Digital',
      authorRole: 'Comunicação & Estratégia',
      imageUrl: '',
      excerpt: '',
      content: '',
      featured: false,
    });
    setMessage(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('Preencha pelo menos o título e o conteúdo da matéria.');
      return;
    }

    const idToUse = editingId === 'new' ? `art-${Date.now()}` : (editingId || `art-${Date.now()}`);
    const articleToSave: NewsArticle = {
      id: idToUse,
      title: formData.title || '',
      slug: (formData.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: formData.category || 'Geral',
      date: formData.date || 'Data Recente',
      readTime: formData.readTime || '3 min de leitura',
      author: formData.author || 'Equipe Blend Digital',
      authorRole: formData.authorRole || 'Comunicação',
      imageUrl: formData.imageUrl || '',
      excerpt: formData.excerpt || '',
      content: formData.content || '',
      featured: formData.featured || false,
    };

    onSaveArticle(articleToSave);
    setEditingId(articleToSave.id);
    setMessage('Matéria salva com sucesso!');
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
      <div className="bg-white border border-[#E2DDD6] max-w-4xl w-full rounded-xl shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DF]">
          <div>
            <span className="text-[11px] font-bold text-[#800509] uppercase tracking-wider">
              Painel Editorial Interno
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950">
              Gerenciar Matérias da Blend News
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status message */}
        {message && (
          <div className="mt-4 p-3 bg-neutral-900 text-white text-xs rounded-lg flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{message}</span>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Article List */}
          <div className="lg:col-span-4 border border-[#E8E4DF] rounded-xl p-4 bg-[#FAF9F6] space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Matérias ({articles.length})
              </h4>
              <button
                type="button"
                onClick={handleCreateNew}
                className="text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer interactive-tap shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Nova</span>
              </button>
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer flex items-start justify-between gap-2 ${
                    editingId === art.id
                      ? 'bg-white border-[#800509] shadow-xs'
                      : 'bg-white border-[#E8E4DF] hover:border-neutral-400'
                  }`}
                  onClick={() => handleSelectToEdit(art)}
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] text-neutral-500 block truncate font-normal">
                      {art.date} · {art.category}
                    </span>
                    <h5 className="text-xs font-bold text-neutral-900 truncate">
                      <FormattedInline text={art.title} />
                    </h5>
                  </div>
                  {articles.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Deseja excluir a matéria "${art.title}"?`)) {
                          onDeleteArticle(art.id);
                        }
                      }}
                      className="text-neutral-400 hover:text-red-600 p-1 rounded-md"
                      title="Excluir"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 border border-[#E8E4DF] rounded-xl p-5 bg-white">
            {editingId ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE6]">
                  <h4 className="text-sm font-bold text-neutral-900">
                    {editingId === 'new' ? 'Criar Nova Matéria' : 'Editar Conteúdo'}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="text-xs text-neutral-500 hover:underline flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Fechar editor</span>
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-800">
                    Título da Matéria *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Ex: Como alinhar identidade visual ao tráfego do WhatsApp"
                    className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-800">
                      Categoria
                    </label>
                    <input
                      type="text"
                      value={formData.category || ''}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="Ex: Posicionamento, Audiovisual, Redes"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-800">
                      Data de Publicação
                    </label>
                    <input
                      type="text"
                      value={formData.date || ''}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="Ex: 25 Setembro 2026"
                      className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-800">
                    URL ou Caminho da Imagem de Capa
                  </label>
                  <input
                    type="text"
                    value={formData.imageUrl || ''}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="Ex: /src/assets/images/... ou link web"
                    className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-800">
                    Resumo / Subtítulo da Matéria (Lead)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.excerpt || ''}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Breve síntese do assunto para atrair leitores na lista..."
                    className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none font-normal"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-800">
                    Texto Completo da Matéria
                  </label>
                  <textarea
                    rows={8}
                    required
                    value={formData.content || ''}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Escreva os parágrafos da matéria. Use ### Título para subtítulos e listas com - item ou 1. item."
                    className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:border-[#800509] focus:outline-none font-normal font-sans"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 text-xs font-bold text-neutral-600 hover:text-neutral-900 border border-neutral-300 rounded-lg"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] rounded-lg transition-colors cursor-pointer interactive-tap shadow-xs"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-16 text-center text-neutral-500 space-y-3">
                <p className="text-xs sm:text-sm font-normal">
                  Selecione uma matéria à esquerda para editar seus dados ou clique em &ldquo;Nova&rdquo; para criar um novo artigo.
                </p>
                <button
                  type="button"
                  onClick={handleCreateNew}
                  className="px-4 py-2 text-xs font-bold text-[#800509] bg-[#800509]/8 hover:bg-[#800509]/15 rounded-lg transition-colors interactive-tap"
                >
                  Criar Nova Matéria
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
