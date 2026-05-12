import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronRight, 
  Users,
  ArrowUp
} from 'lucide-react';
import { QUESTIONS, CHARACTERS, Character, Language } from './constants';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Internal Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CollectionModal } from './components/CollectionModal';
import { LegalModal } from './components/LegalModal';
import { TestSection } from './components/TestSection';
import { ResultSection } from './components/ResultSection';

type AppState = 'START' | 'TEST' | 'RESULT';
type LegalPage = 'privacy' | 'terms' | 'about' | null;

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  
  // Parse query params for sharing
  const getInitialState = (): { state: AppState, result: Character | null } => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const resultId = params.get('result');
      if (resultId && Object.prototype.hasOwnProperty.call(CHARACTERS, resultId)) {
        return { state: 'RESULT', result: CHARACTERS[resultId] };
      }
    }
    return { state: 'START', result: null };
  };

  const initial = getInitialState();
  const [state, setState] = useState<AppState>(initial.state);
  const [resultCharacter, setResultCharacter] = useState<Character | null>(initial.result);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      // If no manual preference, follow system settings
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Handle manual theme toggle and persistence
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  // Sync with document element for dark mode styling
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  }, [isDarkMode]);

  // Listen for system theme changes (only if user hasn't set a manual preference)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const [testQuestions, setTestQuestions] = useState<typeof QUESTIONS>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [showCollection, setShowCollection] = useState(false);
  const [legalPage, setLegalPage] = useState<LegalPage>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  /**
   * Automatically updates React Helmet-style native SEO tags based on language & state
   * Sets appropriate Title, Description, and OG/Twitter tags
   */
  useEffect(() => {
    let title = '';
    let description = '';

    document.documentElement.lang = language;

    if (state === 'RESULT' && resultCharacter) {
      const charName = language === 'ko' ? resultCharacter.name.ko : resultCharacter.name.en;
      const charTitle = language === 'ko' ? resultCharacter.title.ko : resultCharacter.title.en;
      
      if (language === 'ko') {
        title = `${charName} - 성경 인물 테스트`;
        description = `나의 영적 유형은 ${charName}입니다! "${charTitle}" 성경 인물 테스트에서 나와 닮은 인물을 확인해보세요.`;
      } else {
        title = `${charName} - Bible Character Test`;
        description = `My spiritual type is ${charName}! "${charTitle}" Find out which biblical figure you resemble most in the Bible Character Test.`;
      }
    } else {
      if (language === 'ko') {
        title = '성경 인물 테스트: 나의 영적 유형은?';
        description = '나와 닮은 성경 속 인물은 누구일까요? 상황 문답을 통해 당신의 영적 성향을 확인해보세요.';
      } else {
        title = 'Bible Character Test: What is my spiritual type?';
        description = 'Which biblical figure resembles you the most? Discover your spiritual tendency through the situation test.';
      }
    }

    document.title = title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', window.location.href);

  }, [state, resultCharacter, language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state, showCollection, legalPage]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  /**
   * Resets the entire application state back to the START screen
   * Clears out any selected test character and drops the ?result= URL parameter if present
   */
  const goToHome = useCallback(() => {
    setState('START');
    setResultCharacter(null);
    setLegalPage(null);
    setShowCollection(false);
    if (window.history.pushState) {
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.pushState({path:newUrl},'',newUrl);
    }
  }, []);

  /**
   * Starts a new test logic flow
   * 1. Constructs 12 test questions (3 random queries per test category: EI, SN, TF, JP)
   * 2. Shuffles the 12 questions
   * 3. Resets scores and user progress
   */
  const startTest = useCallback(() => {
    if (window.history.pushState) {
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.pushState({path:newUrl},'',newUrl);
    }
    // Pick 3 random questions from each category to ensure balance and reliability (Total 12)
    const categories: ('EI' | 'SN' | 'TF' | 'JP')[] = ['EI', 'SN', 'TF', 'JP'];
    const selected: typeof QUESTIONS = [];
    
    categories.forEach(cat => {
      const catQuestions = QUESTIONS.filter(q => q.category === cat);
      const shuffled = [...catQuestions].sort(() => Math.random() - 0.5);
      selected.push(...shuffled.slice(0, 3));
    });

    // Final shuffle of the 12 questions so they are mixed up for the user
    const finalSelected = selected.sort(() => Math.random() - 0.5);
    
    setTestQuestions(finalSelected);
    setScores({});
    setCurrentQuestionIdx(0);
    setState('TEST');
  }, []);

  /**
   * Translates the cumulative MBTI scores to a matched character
   */
  const calculateResult = useCallback((finalScores: { [key: string]: number }) => {
    const e = finalScores.extraversion || 0;
    const i = finalScores.introversion || 0;
    const s = finalScores.sensing || 0;
    const n = finalScores.intuition || 0;
    const t = finalScores.thinking || 0;
    const f = finalScores.feeling || 0;
    const j = finalScores.judging || 0;
    const p = finalScores.perceiving || 0;

    const isE = e >= i;
    const isN = n >= s;
    const isT = t >= f;
    const isJ = j >= p;

    const mbti = `${isE ? 'E' : 'I'}${isN ? 'N' : 'S'}${isT ? 'T' : 'F'}${isJ ? 'J' : 'P'}`;
    
    // Mapping 16 MBTI types to 12 Bible characters with clear criteria
    const mbtiMapping: { [key: string]: keyof typeof CHARACTERS } = {
      "ESTJ": "PAUL",
      "ENTJ": "PAUL",
      "ENTP": "ABRAHAM",
      "ENFP": "DAVID",
      "ENFJ": "DAVID",
      "ESTP": "PETER",
      "ESFP": "PETER",
      "ESFJ": "PETER",
      "ISTJ": "JOSEPH", // Special handling below for NOAH
      "ISFJ": "MARY",
      "INFJ": "MOSES",
      "INTJ": "DANIEL", // Special handling below for ESTHER
      "ISTP": "GIDEON",
      "INTP": "GIDEON",
      "ISFP": "RUTH",
      "INFP": "MOSES"
    };

    let characterKey: keyof typeof CHARACTERS = mbtiMapping[mbti];

    // Refinement logic for duplicate mappings
    if (mbti === "ISTJ") {
      // Noah is more about consistent building (highly structured S), 
      // Joseph is about administration (highly organized J)
      characterKey = s > j ? "NOAH" : "JOSEPH";
    } else if (mbti === "INTJ") {
      // Esther is more about insight and patience (highly intuitive N),
      // Daniel is more about logic and analysis (highly thinking T)
      characterKey = n > t ? "ESTHER" : "DANIEL";
    }

    setResultCharacter(CHARACTERS[characterKey]);
    setState('RESULT');
  }, []);

  const handleAnswer = useCallback((optionScores: { [key: string]: number }) => {
    // 1. Update scores
    setScores(prev => {
      const newScores = { ...prev };
      Object.entries(optionScores).forEach(([key, value]) => {
        newScores[key] = (newScores[key] || 0) + value;
      });
      return newScores;
    });

    // 2. Progress to next question or calculate result
    if (currentQuestionIdx < testQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      // Use the latest scores for calculation
      setScores(currentScores => {
        calculateResult(currentScores);
        return currentScores;
      });
    }
  }, [currentQuestionIdx, testQuestions.length, calculateResult]);

  const progress = useMemo(() => {
    if (testQuestions.length === 0) return 0;
    return ((currentQuestionIdx + 1) / testQuestions.length) * 100;
  }, [currentQuestionIdx, testQuestions.length]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main font-sans selection:bg-brand-primary/10 flex flex-col dark:bg-dark-bg dark:text-dark-text-main transition-colors duration-300">
      <Header 
        onGoHome={goToHome}
        onShowCollection={() => setShowCollection(true)}
        onShowAbout={() => setLegalPage('about')}
        onStartTest={startTest}
        isAtStart={state === 'START'}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleTheme}
      />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16 relative">
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <AnimatePresence mode="wait">
          {state === 'START' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="trendy-card max-w-lg w-full p-6 sm:p-12 text-center z-10 mx-auto bg-white border border-slate-100 shadow-xl dark:bg-slate-900 dark:border-slate-800"
            >
              <div className="flex justify-center mb-10">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="p-6 rounded-[2rem] bg-slate-50 text-brand-primary shadow-inner dark:bg-slate-800/50"
                >
                  <BookOpen size={64} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter leading-[1.2] text-slate-900 dark:text-white">
                {t('hero.title.1')} <br />
                <span className="text-gradient">{t('hero.title.2')}</span>{t('hero.title.3')}
              </h1>
              <p className="text-slate-600 mb-10 text-lg font-bold leading-relaxed break-keep dark:text-slate-400">
                {t('hero.desc.1')} <br />
                {t('hero.desc.2')}
              </p>
              <button onClick={startTest} className="btn-primary w-full text-xl group">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t('btn.start')}
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button 
                className="mt-10 flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-colors text-sm font-bold mx-auto group dark:text-slate-500"
                onClick={() => setShowCollection(true)}
              >
                <Users size={18} className="group-hover:scale-110 transition-transform" /> {t('btn.viewAll')}
              </button>
            </motion.div>
          )}

          {state === 'TEST' && testQuestions.length > 0 && (
            <TestSection 
              currentQuestion={testQuestions[currentQuestionIdx]}
              currentIdx={currentQuestionIdx}
              totalQuestions={testQuestions.length}
              progress={progress}
              onAnswer={handleAnswer}
            />
          )}

          {state === 'RESULT' && resultCharacter && (
            <ResultSection 
              character={resultCharacter}
              onRestart={startTest}
              onGoHome={goToHome}
              onShowCollection={() => setShowCollection(true)}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer onGoHome={goToHome} onSetLegalPage={setLegalPage} />

      <CollectionModal isOpen={showCollection} onClose={() => setShowCollection(false)} />
      
      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col items-center gap-1 p-3 sm:p-4 bg-white shadow-2xl rounded-full sm:rounded-[2rem] text-brand-primary border border-slate-100 hover:bg-brand-primary hover:text-white transition-all active:scale-95 group min-w-[48px] sm:min-w-[64px]"
            title="맨 위로 이동"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-[10px] font-black tracking-tighter sm:block hidden">TOP</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
