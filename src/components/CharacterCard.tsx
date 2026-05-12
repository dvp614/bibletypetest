import React from 'react';
import { Character } from '../constants';
import { SafeImage } from './SafeImage';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getLoc } from '../lib/utils';

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
  variant?: 'compact' | 'match';
  className?: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick, variant = 'compact', className = '' }) => {
  const { language } = useLanguage();

  if (variant === 'compact') {
    return (
      <div 
        onClick={onClick}
        className={`bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all group cursor-pointer h-full flex flex-col overflow-hidden dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 ${className}`}
      >
        {/* Header Banner - Still keeping for collection view but slightly more subtle without the background blend if needed */}
        <div className="h-44 sm:h-52 w-full relative overflow-hidden bg-slate-200/50 dark:bg-slate-800/50">
          <SafeImage 
            src={character.resultImageUrl} 
            alt={`${character.name} result`} 
            fallbackSrc={character.imageUrl}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30 dark:from-slate-900" />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          {/* Identity Section */}
          <div className="flex items-center gap-4 mb-5 border-b border-slate-200 pb-5 dark:border-slate-800">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-sm shrink-0 bg-white group-hover:border-brand-primary/20 transition-colors dark:bg-slate-800 dark:border-slate-800 dark:group-hover:border-brand-primary/30">
              <SafeImage 
                src={character.imageUrl} 
                alt={getLoc(character.name, language)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-xl text-slate-800 tracking-tight leading-tight mb-1 dark:text-white">{getLoc(character.name, language)}</h3>
              <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.15em] leading-none">
                {getLoc(character.title, language)}
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-bold mb-6 dark:text-slate-400">
            {getLoc(character.description, language)}
          </p>
          
          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap gap-1.5 justify-center">
              {Array.isArray(character.traits) ? character.traits.map(trait => (
                <span 
                  key={trait} 
                  className="text-[10px] bg-slate-50 text-slate-600 px-3 py-1.5 rounded-xl font-bold border border-slate-200 group-hover:border-brand-primary/20 group-hover:text-brand-primary transition-all dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700"
                >
                  #{trait}
                </span>
              )) : (character.traits as any)[language]?.map((trait: string) => (
                <span 
                  key={trait} 
                  className="text-[10px] bg-slate-50 text-slate-600 px-3 py-1.5 rounded-xl font-bold border border-slate-200 group-hover:border-brand-primary/20 group-hover:text-brand-primary transition-all dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700"
                >
                  #{trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Match variant used in Result Section
  return (
    <div 
      onClick={onClick}
      className={`bg-white/50 backdrop-blur-md rounded-3xl border border-slate-200 p-4 transition-all group cursor-pointer flex items-center gap-4 dark:bg-slate-800/40 dark:border-slate-800 ${className}`}
    >
      {/* Portrait box */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-sm shrink-0 bg-white dark:bg-slate-800 dark:border-slate-700">
        <SafeImage 
          src={character.imageUrl} 
          alt={getLoc(character.name, language)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
      </div>

      {/* Identity info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-black text-xl text-slate-800 tracking-tighter leading-none dark:text-white group-hover:text-brand-primary transition-colors">{getLoc(character.name, language)}</h3>
        </div>
        <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest leading-none dark:text-slate-500">
          {getLoc(character.title, language)}
        </p>
      </div>

      {/* Action hint icon */}
      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-primary group-hover:text-white transition-all dark:bg-slate-800">
        <BookOpen size={14} />
      </div>
    </div>
  );
};
