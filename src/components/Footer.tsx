import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onGoHome: () => void;
  onSetLegalPage: (page: 'privacy' | 'terms' | 'about' | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ onGoHome, onSetLegalPage }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/50 py-16 mt-auto relative dark:bg-slate-900/30 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div onClick={onGoHome} className="cursor-pointer group flex items-center justify-center md:justify-start gap-2 w-full md:w-auto">
             <div className="w-9 h-9 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 transition-all group-hover:rotate-6 overflow-hidden">
              <img src="/favicon.svg" alt="Footer Logo" className="w-5 h-5 brightness-0 invert" />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-800 group-hover:text-slate-900 transition-colors dark:text-white dark:group-hover:text-slate-200">
              {t('app.logo.1')} <span className="text-brand-primary">{t('app.logo.2')}</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <button onClick={() => onSetLegalPage('privacy')} className="text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest flex items-center gap-2 dark:text-slate-500 dark:hover:text-slate-300">
              {t('footer.privacy')}
            </button>
            <button onClick={() => onSetLegalPage('terms')} className="text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest flex items-center gap-2 dark:text-slate-500 dark:hover:text-slate-300">
              {t('footer.terms')}
            </button>
            <button onClick={() => onSetLegalPage('about')} className="text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest flex items-center gap-2 dark:text-slate-500 dark:hover:text-slate-300">
              {t('footer.about')}
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-200/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 dark:border-slate-800">
          <p className="text-[11px] leading-relaxed text-slate-400 font-medium tracking-wide text-center md:text-left dark:text-slate-500">
            {t('modal.about.desc').split('.')[0]}. <br className="hidden md:block" />
            {t('footer.desc')}
          </p>
          <p className="text-[11px] font-bold text-slate-400 tracking-wider text-center md:text-right uppercase dark:text-slate-500">
            {t('footer.copy')}
          </p>
        </div>
      </div>
    </footer>
  );
};
