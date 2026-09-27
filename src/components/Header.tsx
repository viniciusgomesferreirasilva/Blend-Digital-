import React, { useState, useEffect } from 'react';
import { BlendLogo } from './logos/BlendLogo';
import { NavPage } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Menu, X, ArrowRight, Instagram } from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenContact: _onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { page: NavPage; label: string }[] = [
    { page: 'home', label: 'Início' },
    { page: 'sobre', label: 'A Blend' },
    { page: 'servicos', label: 'Serviços' },
    { page: 'audiovisual', label: 'Audiovisual' },
    { page: 'news', label: 'Blend News' },
    { page: 'colaboradores', label: 'Colaboradores' },
    { page: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (page: NavPage) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8E4DF] shadow-xs py-2.5'
            : 'bg-[#FAF9F6] border-b border-[#EAE6E1] py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Official Vector */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus-visible:outline-2 focus-visible:outline-[#800509] rounded-md interactive-tap cursor-pointer p-0.5"
              aria-label="Ir para a página inicial da Blend Digital"
            >
              <BlendLogo variant="burgundy" withSubtitle={true} size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-[13.5px] font-medium text-neutral-700">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`relative py-1 transition-colors duration-150 cursor-pointer interactive-tap ${
                      isActive
                        ? 'text-[#800509] font-bold'
                        : 'text-neutral-700 hover:text-[#800509]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#800509] rounded-full animate-in fade-in duration-200" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions: Instagram & WhatsApp Button */}
            <div className="flex items-center gap-3">
              {/* Instagram official link */}
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center p-2 text-neutral-700 hover:text-[#800509] hover:bg-[#800509]/5 rounded-lg transition-colors interactive-tap"
                aria-label="Seguir a Blend Digital no Instagram"
                title="Instagram @blenddigital_"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* WhatsApp direct talk */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-lg transition-all shadow-xs interactive-tap whitespace-nowrap"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-800 hover:text-[#800509] hover:bg-neutral-100/80 rounded-lg transition-colors interactive-tap"
                aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-950/50 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF9F6] border-l border-[#E8E4DF] shadow-2xl p-6 pt-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DF]">
                <BlendLogo variant="burgundy" withSubtitle={true} size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`text-left px-3.5 py-3 text-sm rounded-lg transition-colors interactive-tap cursor-pointer ${
                      currentPage === item.page
                        ? 'text-[#800509] bg-[#800509]/8 font-bold'
                        : 'text-neutral-800 hover:text-[#800509] hover:bg-neutral-100/70 font-medium'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8E4DF] space-y-3">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-neutral-800 bg-white hover:bg-neutral-100 border border-[#DCD6CE] rounded-lg transition-colors flex items-center justify-center gap-2 interactive-tap"
              >
                <Instagram className="w-4 h-4 text-[#800509]" />
                <span>Instagram @blenddigital_</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#800509] hover:bg-[#800F10] active:bg-[#760010] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs interactive-tap"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-center text-neutral-500 font-normal">
                {COMPANY_INFO.hours}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
