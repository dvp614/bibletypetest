import React from 'react';
import { BookOpen, Users, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onGoHome: () => void;
  onShowCollection: () => void;
  onShowAbout: () => void;
  onStartTest: () => void;
  isAtStart: boolean;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onGoHome, 
  onShowCollection, 
  onShowAbout, 
  onStartTest, 
  isAtStart,
  isDarkMode,
  onToggleDarkMode
}) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300 dark:bg-slate-900/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <button onClick={onGoHome} className="flex items-center gap-1.5 sm:gap-2 group transition-transform active:scale-95">
          <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 transition-all group-hover:rotate-6 overflow-hidden">
             <img src="/favicon.svg" alt="경이로운 성경" className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert" title="Logo Icon" />
          </div>
          <span className="font-black text-[13px] sm:text-xl tracking-tighter text-slate-800 dark:text-white whitespace-nowrap">{t('app.logo.1')} <span className="text-brand-primary">{t('app.logo.2')}</span></span>
        </button>
        
        <div className="flex items-center gap-2 sm:gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={onShowCollection} className="text-xs font-black text-slate-500 hover:text-brand-primary transition-all uppercase tracking-[0.2em] relative group dark:text-slate-500">
              {t('nav.collection')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </button>
            <button onClick={onShowAbout} className="text-xs font-black text-slate-500 hover:text-brand-primary transition-all uppercase tracking-[0.2em] relative group dark:text-slate-500">
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 border-l border-slate-100 pl-4 sm:pl-8 dark:border-slate-800">
            <button 
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="px-3 flex items-center gap-1.5 py-1.5 rounded-full text-xs font-bold border border-slate-200 text-slate-500 hover:text-brand-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-primary/50"
            >
              <Globe size={14} />
              {language === 'ko' ? 'EN' : 'KR'}
            </button>

            <button 
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-slate-400 hover:text-brand-primary hover:bg-slate-50 transition-all dark:text-slate-500 dark:hover:bg-slate-800"
              title={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
