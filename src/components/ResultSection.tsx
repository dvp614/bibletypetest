import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RotateCcw, 
  Share2, 
  Target, 
  Quote, 
  ShieldCheck, 
  Compass, 
  Lightbulb, 
  Heart, 
  Zap,
  Home,
  Users
} from 'lucide-react';
import { Character, CHARACTERS } from '../constants';
import { SafeImage } from './SafeImage';
import { CharacterCard } from './CharacterCard';
import { useLanguage } from '../contexts/LanguageContext';
import { getLoc, getLocArray } from '../lib/utils';

interface ResultSectionProps {
  character: Character;
  onRestart: () => void;
  onGoHome: () => void;
  onShowCollection: () => void;
}

export const ResultSection: React.FC<ResultSectionProps> = ({
  character,
  onRestart,
  onGoHome,
  onShowCollection
}) => {
  const { language, t } = useLanguage();
  const [bibleVersion, setBibleVersion] = useState<string>('krv');

  const [showToast, setShowToast] = useState(false);

  const versionsByLanguage: Record<string, typeof bibleVersion[]> = {
    ko: ['krv', 'rnksv', 'klb'],
    en: ['niv', 'nlt', 'esv', 'kjv']
  };

  const currentVersions = versionsByLanguage[language] || versionsByLanguage.ko;

  // Ensure selected version is valid for the language
  React.useEffect(() => {
    if (!currentVersions.includes(bibleVersion)) {
      setBibleVersion(currentVersions[0]);
    }
  }, [language, currentVersions, bibleVersion]);

  const bibleVersionLabels: Record<string, string> = {
    krv: t('bible.krv'),
    rnksv: t('bible.rnksv'),
    klb: t('bible.klb'),
    niv: t('bible.niv') || 'NIV',
    nlt: t('bible.nlt') || 'NLT',
    esv: t('bible.esv') || 'ESV',
    kjv: t('bible.kjv') || 'KJV',
  };

  const handleShare = () => {
    const shareText = t('result.shareText', {
      name: getLoc(character.name, language),
      title: getLoc(character.title, language)
    });
    const baseUrl = window.location.origin + window.location.pathname;
    const resultUrl = `${baseUrl}?result=${character.id}`;
    
    let copyText = shareText;
    
    if (language === 'ko') {
      copyText += `\n\n👉 친구의 결과 보기:\n${resultUrl}`;
      copyText += `\n\n🏠 테스트하러 가기:\n${baseUrl}`;
    } else {
      copyText += `\n\n👉 See my friend's result:\n${resultUrl}`;
      copyText += `\n\n🏠 Take the test:\n${baseUrl}`;
    }
    
    const shareData = {
      title: 'Bible Character Test',
      text: copyText,
    };

    const showSuccess = () => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        // If aborted by user, it throws an AbortError. We shouldn't show copied toast.
        // If it fails for other reasons, fallback to clipboard.
        if (err.name !== 'AbortError') {
          navigator.clipboard.writeText(copyText).then(showSuccess).catch(console.error);
        }
      });
    } else {
      navigator.clipboard.writeText(copyText).then(showSuccess).catch(() => {
        // Fallback for browsers that don't support clipboard API directly
        const textArea = document.createElement("textarea");
        textArea.value = copyText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          showSuccess();
        } catch (err) {
          console.error("Copy failed", err);
        }
        document.body.removeChild(textArea);
      });
    }
  };

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl w-full z-10 pt-20 pb-12 mx-auto"
    >
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm border border-slate-700 dark:bg-white dark:text-slate-900 dark:border-slate-200"
          >
            {t('result.copied')}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="trendy-card shadow-2xl relative overflow-hidden">
        {/* Result Image Section (Now at Top) */}
        <div className="h-[300px] sm:h-[480px] w-full relative overflow-hidden bg-white border-b border-slate-200 flex items-center justify-center dark:bg-slate-950 dark:border-slate-800">
          {/* Main Result Image (Slightly scaled up to fit better) */}
          <SafeImage 
            src={character.resultImageUrl} 
            fallbackSrc={character.imageUrl}
            alt={`${character.name} Result`}
            className="relative z-10 w-full h-full object-contain scale-[1.03] drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-transform duration-700 hover:scale-[1.05]"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none z-20" />
        </div>

        {/* Character Profile Header (Now at Bottom of Image Section) */}
        <div className="bg-white border-b border-slate-100 p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-end gap-5 sm:gap-8 relative z-30 dark:bg-slate-900 dark:border-slate-800">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 sm:w-36 sm:h-36 rounded-[1.8rem] overflow-hidden border-4 border-slate-50 shadow-xl relative transform -rotate-3 hover:rotate-0 transition-all duration-500 flex-shrink-0 dark:border-slate-800"
          >
            <SafeImage 
              src={character.imageUrl} 
              alt={`${character.name} Portrait`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left flex-1"
          >
            <h3 className="text-4xl sm:text-6xl md:text-8xl font-serif italic text-slate-800 leading-none tracking-tight mb-4 dark:text-white break-words">
              {getLoc(character.name, language)}
            </h3>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="h-px w-8 sm:w-16 bg-brand-primary/40" />
              <p className="text-brand-primary text-xl sm:text-3xl font-black uppercase tracking-[0.1em] italic">
                {getLoc(character.title, language)}
              </p>
            </div>
          </motion.div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        </div>

        <div className="p-6 sm:p-10 dark:bg-slate-900">
          <div className="mb-12">
            <h4 className="flex items-center gap-2 text-slate-800 font-extrabold text-lg tracking-widest mb-4 dark:text-slate-200">
              <Compass size={20} className="text-brand-primary" /> {t('result.analysis')}
            </h4>
            <div className="text-lg sm:text-xl text-slate-800 leading-relaxed font-sans break-keep bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group dark:bg-slate-800/50 dark:border-slate-800 dark:text-slate-200">
              <span className="relative z-10">{getLoc(character.description, language)}</span>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-primary/10 transition-colors" />
            </div>
          </div>

          <div className="mb-12 glass-box p-6 sm:p-8 border border-brand-primary/10 bg-gradient-to-br from-brand-primary/5 to-transparent relative rounded-3xl shadow-sm">
            <Quote className="text-brand-primary/20 absolute top-4 left-4" size={64} />
            <div className="flex flex-wrap justify-end gap-2 mb-6">
              {currentVersions.map((v) => (
                <button
                  key={v}
                  onClick={() => setBibleVersion(v)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                    bibleVersion === v 
                    ? 'bg-slate-800 text-white shadow-lg dark:bg-brand-primary' 
                    : 'bg-white text-slate-400 hover:text-brand-primary border border-slate-100 dark:bg-slate-800 dark:text-slate-500 dark:border-slate-700'
                  }`}
                >
                  {bibleVersionLabels[v]}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={bibleVersion}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 px-4"
              >
                <p className="text-2xl sm:text-3xl font-serif text-slate-800 leading-relaxed text-center break-keep whitespace-pre-line italic dark:text-slate-200">
                  "{
                    character.verse[language] 
                      ? (character.verse[language] as any[]).find((v: any) => v.version.toLowerCase() === bibleVersion)?.text || (character.verse[language] as any[])[0]?.text
                      : character.verse[bibleVersion as keyof typeof character.verse] 
                  }"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100 flex flex-col h-full shadow-sm dark:bg-indigo-900/10 dark:border-indigo-900/30">
              <h4 className="flex items-center gap-2 text-indigo-600 font-extrabold text-sm uppercase tracking-widest mb-6 dark:text-indigo-400">
                <ShieldCheck size={18} /> {t('result.strengths.title')}
              </h4>
              <div className="space-y-4 flex-1">
                {getLocArray(character.strengths, language).map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-indigo-900/20">
                    <div className="w-1.5 h-6 bg-indigo-400 rounded-full" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/50 border border-rose-100 flex flex-col h-full shadow-sm dark:bg-rose-900/10 dark:border-rose-900/30">
              <h4 className="flex items-center gap-2 text-rose-500 font-extrabold text-sm uppercase tracking-widest mb-6 dark:text-rose-400">
                <Compass size={18} /> {t('result.weaknesses.title')}
              </h4>
              <div className="space-y-4 flex-1">
                {getLocArray(character.weaknesses, language).map((w, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-rose-900/20">
                    <div className="w-1.5 h-6 bg-rose-400 rounded-full" />
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 p-6 sm:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-200 shadow-inner relative overflow-hidden dark:bg-slate-800/30 dark:border-slate-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50" />
              <div className="flex flex-col items-center text-center gap-8">
                <div>
                  <h4 className="flex items-center justify-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.25em] mb-1 dark:text-slate-500">
                    Character Traits
                  </h4>
                  <p className="text-slate-800 font-extrabold text-lg tracking-tight dark:text-slate-200 flex items-center gap-2">
                    <Lightbulb size={20} className="text-amber-500 fill-amber-500/10" /> {t('result.traits.title')}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {getLocArray(character.traits, language).map((t, i) => (
                    <span 
                      key={i} 
                      className="px-6 py-3 rounded-2xl bg-white text-slate-800 text-sm font-bold border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-amber-200 hover:text-amber-600 cursor-default dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
          </div>
          
          {(character.bestMatches?.length > 0 && character.worstMatches?.length > 0) && (
            <div className="space-y-8 mb-16">
              <h4 className="flex items-center gap-3 text-slate-800 font-extrabold text-lg tracking-tight px-2 dark:text-slate-200">
                <Users size={24} className="text-brand-primary" /> {t('result.partnership')}
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Best Partners */}
                <div className="flex flex-col bg-emerald-50/30 rounded-[2.5rem] p-6 sm:p-8 border border-emerald-100/50 shadow-sm dark:bg-emerald-900/10 dark:border-emerald-900/30">
                  <div className="mb-8 text-center">
                    <span className="inline-flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest bg-white px-5 py-2 rounded-full border border-emerald-100 shadow-sm mb-4 dark:bg-slate-800 dark:text-emerald-400 dark:border-emerald-900/50">
                        <Heart size={14} className="fill-emerald-500" /> {t('result.best.tag')}
                    </span>
                    <h5 className="font-bold text-slate-400 text-xs uppercase tracking-widest dark:text-slate-500">{t('result.best.desc')}</h5>
                  </div>
                  
                  <div className="space-y-4">
                    {character.bestMatches.map((match) => (
                      <div key={match.id} className="group bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-3 border border-emerald-100/30 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 dark:bg-slate-800/40 dark:border-emerald-900/10 dark:hover:bg-slate-800">
                        <CharacterCard 
                          character={CHARACTERS[match.id]} 
                          variant="match" 
                          className="!bg-transparent !border-none shadow-none !p-2"
                        />
                        <div className="px-5 pb-5 pt-1">
                          <div className="h-px w-full bg-emerald-100/20 mb-4 dark:bg-emerald-900/10" />
                          <p className="text-[13px] text-slate-800 font-bold leading-relaxed text-center break-keep min-h-[3.5rem] dark:text-slate-400">
                              {getLoc(match.description, language)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Worst Partners */}
                <div className="flex flex-col bg-rose-50/30 rounded-[2.5rem] p-6 sm:p-8 border border-rose-100/50 shadow-sm dark:bg-rose-900/10 dark:border-rose-900/30">
                  <div className="mb-8 text-center">
                    <span className="inline-flex items-center gap-2 text-rose-500 font-black text-xs uppercase tracking-widest bg-white px-5 py-2 rounded-full border border-rose-100 shadow-sm mb-4 dark:bg-slate-800 dark:text-rose-400 dark:border-rose-900/50">
                        <Zap size={14} className="fill-rose-400" /> {t('result.worst.tag')}
                    </span>
                    <h5 className="font-bold text-slate-400 text-xs uppercase tracking-widest dark:text-slate-500">{t('result.worst.desc')}</h5>
                  </div>
                  
                  <div className="space-y-4">
                    {character.worstMatches.map((match) => (
                      <div key={match.id} className="group bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-3 border border-rose-100/30 hover:bg-white hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-500 dark:bg-slate-800/40 dark:border-rose-900/10 dark:hover:bg-slate-800">
                        <CharacterCard 
                          character={CHARACTERS[match.id]} 
                          variant="match" 
                          className="!bg-transparent !border-none shadow-none !p-2"
                        />
                        <div className="px-5 pb-5 pt-1">
                          <div className="h-px w-full bg-rose-100/20 mb-4 dark:bg-rose-900/10" />
                          <p className="text-[13px] text-slate-800 font-bold leading-relaxed text-center break-keep min-h-[3.5rem] dark:text-slate-400">
                              {getLoc(match.description, language)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-6 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn-primary flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-brand-primary to-brand-secondary py-5 text-lg shadow-xl hover:shadow-brand-primary/30 transition-all active:scale-95 group"
                onClick={handleShare}
              >
                <Share2 size={24} className="group-hover:rotate-12 transition-transform" /> {t('result.shareBtn')}
              </button>
              <button
                onClick={onRestart}
                className="btn-primary flex-1 flex items-center justify-center gap-3 bg-slate-900 !text-white !shadow-none hover:bg-slate-800 py-5 text-lg transition-all active:scale-95 group font-extrabold dark:bg-white dark:!text-slate-900 dark:hover:bg-slate-100"
              >
                <RotateCcw size={24} className="group-hover:-rotate-45 transition-transform" /> {t('result.retryBtn')}
              </button>
            </div>
            
            <div className="flex gap-4 p-2 bg-slate-50 rounded-[2.5rem] border border-slate-100 dark:bg-slate-800/50 dark:border-slate-800">
              <button
                onClick={onGoHome}
                className="flex-1 group flex flex-col items-center justify-center gap-1.5 py-3 text-slate-400 hover:text-brand-primary transition-all rounded-3xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 active:scale-95 dark:hover:bg-slate-800 dark:hover:border-slate-700"
              >
                <div className="p-1 transition-transform group-hover:-translate-y-0.5">
                  <Home size={22} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">{t('result.homeBtn')}</span>
              </button>
              
              <div className="w-px h-12 bg-slate-200/50 self-center dark:bg-slate-700" />
              
              <button
                onClick={onShowCollection}
                className="flex-1 group flex flex-col items-center justify-center gap-1.5 py-3 text-slate-400 hover:text-brand-secondary transition-all rounded-3xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 active:scale-95 dark:hover:bg-slate-800 dark:hover:border-slate-700"
              >
                <div className="p-1 transition-transform group-hover:-translate-y-0.5">
                  <Users size={22} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">{t('result.collectionBtn')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
