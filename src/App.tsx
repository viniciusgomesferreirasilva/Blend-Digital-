import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutPositioning } from './components/AboutPositioning';
import { ServicesSection } from './components/ServicesSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { AudiovisualSection } from './components/AudiovisualSection';
import { CollaboratorsSection } from './components/CollaboratorsSection';
import { BlendNewsSection } from './components/BlendNewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { INITIAL_NEWS_ARTICLES } from './data/content';
import { NavPage, NewsArticle } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [prefilledService, setPrefilledService] = useState<string | null>(null);

  // Persistent articles state (stored in localStorage with v4 key for updated August 2026 edition)
  const [articles, setArticles] = useState<NewsArticle[]>(() => {
    try {
      const saved = localStorage.getItem('blend_digital_articles_v4');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_NEWS_ARTICLES;
  });

  useEffect(() => {
    try {
      localStorage.setItem('blend_digital_articles_v4', JSON.stringify(articles));
    } catch {
      // Ignore storage errors
    }
  }, [articles]);

  const handleSaveArticle = (articleToSave: NewsArticle) => {
    setArticles((prev) => {
      const exists = prev.some((a) => a.id === articleToSave.id);
      if (exists) {
        return prev.map((a) => (a.id === articleToSave.id ? articleToSave : a));
      }
      return [articleToSave, ...prev];
    });
  };

  const handleDeleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(page);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    handleNavigate('contato');
  };

  // Update active navigation item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: NavPage[] = ['contato', 'como-trabalhamos', 'colaboradores', 'news', 'audiovisual', 'servicos', 'sobre'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentPage(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-900 flex flex-col font-sans selection:bg-[#800509] selection:text-white">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContactWithService()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Presentation */}
        <Hero
          onNavigate={handleNavigate}
          onOpenContact={() => handleOpenContactWithService()}
        />

        {/* 
          2. A BLEND (Imediatamente antes da seção de serviços)
          01 — A BLEND: Marketing não é só aparecer. É ocupar um lugar.
          Estratégia · Criatividade · Resultado + Metodologia de Posicionamento Conectado
        */}
        <AboutPositioning onNavigate={handleNavigate} />

        {/* 
          3. O QUE FAZEMOS: Uma operação completa para a sua marca.
          Serviços essenciais integrados + 03 — PACOTES (Essencial, Crescimento, Performance)
        */}
        <ServicesSection
          onOpenContact={handleOpenContactWithService}
        />

        {/* 4. Audiovisual, Videomaker & Storymaker */}
        <AudiovisualSection />

        {/* 
          5. Blend News (Blog Integrado)
          Conectando pessoas, negócios e oportunidades · Edição #01
          Capa: A música que transforma vidas (Ricardo Borges)
          Últimas Matérias + As pessoas por trás + Tem uma história para contar?
        */}
        <BlendNewsSection
          articles={articles}
          onSaveArticle={handleSaveArticle}
          onDeleteArticle={handleDeleteArticle}
        />

        {/* 6. Colaboradores (As 8 marcas parceiras da referência, com Purify e Helfen Motors fiéis) */}
        <CollaboratorsSection />

        {/* 7. Como Trabalhamos (O caminho de um projeto com a Blend em 3 momentos) */}
        <HowWeWorkSection />

        {/* 8. Contato Oficial (+55 11 93941-7912, Blenddigitalmkt@gmail.com, Instagram @blenddigital_) */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Discrete Floating WhatsApp Commercial Action */}
      <WhatsAppButton />
    </div>
  );
}
