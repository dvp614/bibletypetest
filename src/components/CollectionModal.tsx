import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowUp } from 'lucide-react';
import { CHARACTERS } from '../constants';
import { CharacterCard } from './CharacterCard';
import { useLanguage } from '../contexts/LanguageContext';

interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({ isOpen, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { t } = useLanguage();

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowTopBtn(scrollRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isOpen) setShowTopBtn(false);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-white/20 relative dark:bg-slate-900 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 sm:p-8 border-b border-slate-200 flex items-center justify-between bg-slate-100/30 dark:bg-slate-800/30 dark:border-slate-800">
              <div>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2 sm:gap-3 tracking-tight dark:text-white flex-wrap">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 overflow-hidden shrink-0">
                    <img src="/favicon.svg" alt="Logo" className="w-3 h-3 sm:w-4 sm:h-4 brightness-0 invert" />
                  </div>
                  <span>{t('modal.collection.title')} <span className="text-brand-primary">{t('modal.collection.subtitle')}</span></span>
                </h2>
                <p className="text-slate-600 text-[10px] sm:text-sm font-bold mt-1 dark:text-slate-500">{t('modal.collection.desc')}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 sm:p-3 hover:bg-slate-200 rounded-xl sm:rounded-2xl transition-all hover:scale-110 active:scale-95 shrink-0 dark:hover:bg-slate-800"
              >
                <X size={28} className="text-slate-500" />
              </button>
            </div>
            
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-5 sm:p-8 bg-white custom-scrollbar relative dark:bg-slate-900"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(CHARACTERS).map((char) => (
                  <CharacterCard key={char.id} character={char} />
                ))}
              </div>
              
              {/* Internal Back to Top */}
              <AnimatePresence>
                {showTopBtn && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={scrollToTop}
                    className="sticky bottom-0 left-1/2 -translate-x-1/2 mt-8 mb-4 px-6 py-3 bg-slate-900 text-white rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition-transform active:scale-95 z-30 dark:bg-white dark:text-slate-900"
                  >
                    <ArrowUp size={18} />
                    <span className="text-xs font-black uppercase tracking-widest">Top</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
