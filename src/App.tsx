/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronRight, 
  RotateCcw, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  Quote,
  Users,
  Lightbulb,
  ShieldCheck,
  Home,
  Languages,
  X,
  Shield,
  FileText,
  Mail,
  Brain,
  HelpCircle,
  Info,
  Target,
  Compass,
  ArrowUp,
  Heart,
  Zap
} from 'lucide-react';
import { QUESTIONS, CHARACTERS, Character } from './constants';

type AppState = 'START' | 'TEST' | 'RESULT';
type LegalPage = 'privacy' | 'terms' | 'about' | null;

export default function App() {
  const [state, setState] = useState<AppState>('START');
  const [testQuestions, setTestQuestions] = useState<typeof QUESTIONS>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [resultCharacter, setResultCharacter] = useState<Character | null>(null);
  const [showCollection, setShowCollection] = useState(false);
  const [legalPage, setLegalPage] = useState<LegalPage>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [bibleVersion, setBibleVersion] = useState<'krv' | 'rnksv' | 'klb'>('krv');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state, showCollection, legalPage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bibleVersionLabels = {
    krv: '개역한글',
    rnksv: '새번역',
    klb: '현대인의성경'
  };

  const goToHome = () => {
    setState('START');
    setResultCharacter(null);
    setLegalPage(null);
    setShowCollection(false);
    window.scrollTo(0, 0);
  };

  const startTest = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 12);
    
    setTestQuestions(selected);
    setScores({});
    setCurrentQuestionIdx(0);
    setState('TEST');
  };

  const handleAnswer = (optionScores: { [key: string]: number }) => {
    const newScores = { ...scores };
    Object.entries(optionScores).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    if (currentQuestionIdx < testQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores: { [key: string]: number }) => {
    let characterKey = "JOSEPH";
    const e = finalScores.extraversion || 0;
    const i = finalScores.introversion || 0;
    const s = finalScores.sensing || 0;
    const n = finalScores.intuition || 0;
    const t = finalScores.thinking || 0;
    const f = finalScores.feeling || 0;

    if (e >= i) {
      if (t >= f) characterKey = n >= s ? "PAUL" : "JOSEPH";
      else characterKey = s >= n ? "PETER" : "DAVID";
    } else {
      if (f >= t) characterKey = s >= n ? "MARY" : "DAVID";
      else characterKey = n >= s ? "ESTHER" : "JOSEPH";
    }

    setResultCharacter(CHARACTERS[characterKey]);
    setState('RESULT');
  };

  const progress = useMemo(() => {
    if (testQuestions.length === 0) return 0;
    return ((currentQuestionIdx + 1) / testQuestions.length) * 100;
  }, [currentQuestionIdx, testQuestions]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-brand-primary/10 flex flex-col">
      {/* Header for SEO and Professional Look */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={goToHome} className="flex items-center gap-2 group transition-transform active:scale-95">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 transition-all group-hover:rotate-6 overflow-hidden">
               {/* 
                 [커스텀 로고 적용방법]
                 로고 이미지를 직접 만드셨다면 (예: logo.png) 우측 파일 탐색기에서
                 /public 에 업로드 후 아래 코드를 수정하세요:
                 <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
               */}
               <img src="/favicon.svg" alt="경이로운 성경" className="w-5 h-5 brightness-0 invert" title="Logo Icon" />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-800">성경<span className="text-brand-primary">테스트</span></span>
          </button>
          
          <nav className="hidden md:flex items-center gap-10">
            <button onClick={() => setShowCollection(true)} className="text-xs font-black text-slate-400 hover:text-brand-primary transition-all uppercase tracking-[0.2em] relative group">
              인물도감
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => setLegalPage('about')} className="text-xs font-black text-slate-400 hover:text-brand-primary transition-all uppercase tracking-[0.2em] relative group">
              소개
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </button>
          </nav>
          
          <button 
            onClick={() => {
              if (state === 'START') {
                startTest();
              } else {
                goToHome();
              }
            }}
            className="text-[10px] font-black bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-brand-primary transition-all shadow-xl active:scale-90 uppercase tracking-widest"
          >
            {state === 'START' ? '테스트 시작' : '홈으로'}
          </button>
        </div>
      </header>

      {/* Main Content Area with Ad Slots */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10 md:py-16 relative">
        {/* Background Orbs (Integrated) */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Top Ad Slot Placeholder */}
        <div className="mb-12 w-full min-h-[90px] bg-slate-50/50 border border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center text-slate-300 group hover:border-brand-primary/20 transition-colors">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] mb-1 opacity-50">홍보 콘텐츠 영역</span>
          <p className="text-[10px] font-bold">애드센스 연결 완료 (광고 승인 대기 중)</p>
        </div>

        <AnimatePresence mode="wait">
          {state === 'START' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="trendy-card max-w-lg w-full p-6 sm:p-12 text-center z-10 mx-auto"
            >
              <div className="flex justify-center mb-10">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="p-6 rounded-[2rem] bg-indigo-50 text-brand-primary shadow-inner"
                >
                  <BookOpen size={64} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-[1.2] text-slate-800">
                나와 닮은 <br />
                <span className="text-gradient">성경 인물</span>은?
              </h1>
              <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                당신은 성경 속 수많은 주역 중 <br />
                어떤 인물의 뜨거운 심장을 가졌을까요?
              </p>
              <button
                onClick={startTest}
                className="btn-primary w-full text-xl group"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  나만의 유형 찾기
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button 
                className="mt-10 flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-colors text-sm font-bold mx-auto group"
                onClick={() => setShowCollection(true)}
              >
                <Users size={18} className="group-hover:scale-110 transition-transform" /> 모든 인물 유형 보기
              </button>

              <div className="mt-20 text-left border-t border-slate-100 pt-16 space-y-10">
                 <div>
                   <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                     <Brain className="text-brand-primary" size={24} />
                     성경 인물 테스트(BibleType)란?
                   </h2>
                   <p className="text-slate-600 leading-relaxed font-medium text-lg break-keep">
                     우리는 매일 수많은 결정을 내리며 살아갑니다. 성경 속 수많은 영웅들 역시 자신들의 성향과 방식에 따라 하나님과 교제하고 각자의 삶을 살아냈습니다. 성경 인물 테스트는 현대 심리학의 성격 분석 도구를 활용하여, 당신의 라이프스타일이 성경 속 어떤 인물과 가장 닮아 있는지 분석해 드립니다. 12개의 직관적인 상황 문답을 통해 다윗, 바울, 모세, 에스더 등 나와 영적으로 통하는 성경 인물을 찾아보세요.
                   </p>
                 </div>
                 <div>
                   <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                     <BookOpen className="text-brand-secondary" size={24} />
                     분석 알고리즘과 결과
                   </h2>
                   <p className="text-slate-600 leading-relaxed font-medium text-lg break-keep">
                     외향성과 내향성, 직관과 감각, 사고와 감정에 이르기까지 개개인의 생활 방식 데이터를 종합하여 고도화된 매칭 알고리즘을 구동합니다. 결과 페이지에서는 매칭된 인물의 핵심 강점과 영적 원형, 삶을 관통하는 성경 구절을 함께 살펴볼 수 있으며, 각 인물에 대한 깊은 인사이트를 제공합니다. 또한 '인물 도감'을 통해 나와 다른 인물들의 아름다운 스토리와 라이프스타일 강점도 추가로 탐색할 수 있습니다.
                   </p>
                 </div>
               </div>
            </motion.div>
          )}

          {state === 'TEST' && testQuestions.length > 0 && (
            <motion.div
              key="test"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="max-w-xl w-full z-10 mx-auto"
            >
              <div className="mb-10 px-2 text-center">
                <span className="px-4 py-2 rounded-full bg-white shadow-sm text-brand-primary text-sm font-bold border border-slate-100">
                  질문 {currentQuestionIdx + 1} / {testQuestions.length}
                </span>
                <div className="mt-6 h-3 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="trendy-card p-6 sm:p-12 mb-8 bg-gradient-to-br from-white to-indigo-50/20">
                <h2 className="text-3xl font-bold text-center text-slate-800 leading-[1.4] break-keep">
                  {testQuestions[currentQuestionIdx].text}
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {testQuestions[currentQuestionIdx].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.scores)}
                    className="btn-option text-base md:text-lg py-6 sm:py-7 break-keep px-6"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {state === 'RESULT' && resultCharacter && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl w-full z-10 py-12 mx-auto"
            >
              <div className="trendy-card shadow-2xl">
                <div className="h-64 sm:h-80 w-full relative overflow-hidden">
                  <img 
                    src={resultCharacter.imageUrl} 
                    alt={resultCharacter.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-lg bg-brand-primary/20 text-white backdrop-blur-md text-xs font-bold border border-white/20 uppercase tracking-widest">
                        영적 원형
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-brand-secondary/20 text-white backdrop-blur-md text-xs font-bold border border-white/20 uppercase tracking-wider">
                        {resultCharacter.mbti}
                      </span>
                    </div>
                    <h3 className="text-5xl sm:text-6xl font-serif italic text-white leading-none">
                      {resultCharacter.name}
                    </h3>
                    <p className="text-brand-accent text-xl font-bold mt-2 uppercase tracking-wide">
                      {resultCharacter.title}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-10">
                  {/* Detailed Analysis Section */}
                  <div className="mb-12">
                    <h4 className="flex items-center gap-2 text-slate-800 font-extrabold text-lg tracking-widest mb-4">
                      <Target size={20} className="text-brand-primary" /> 심층 결과 분석
                    </h4>
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium break-keep bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
                      {resultCharacter.description} 당신은 일상과 신앙 사이에서 자신만의 고유한 밸런스를 찾아내는 유형입니다. 하나님께서는 이러한 당신의 기질을 통해 공동체에 특별한 역할을 맡기고자 하십니다.
                    </p>
                  </div>

                  {/* Bible Verse Section */}
                  <div className="mb-12 glass-box p-6 sm:p-8 border border-brand-primary/10 bg-gradient-to-br from-brand-primary/5 to-transparent relative rounded-3xl shadow-sm">
                    <Quote className="text-brand-primary/20 absolute top-4 left-4" size={64} />
                    <div className="flex justify-end gap-2 mb-6">
                      {(['krv', 'rnksv', 'klb'] as const).map((v) => (
                        <button
                          key={v}
                          onClick={() => setBibleVersion(v)}
                          className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                            bibleVersion === v 
                            ? 'bg-slate-800 text-white shadow-lg' 
                            : 'bg-white text-slate-400 hover:text-brand-primary border border-slate-100'
                          }`}
                        >
                          {bibleVersionLabels[v]}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={bibleVersion}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-2xl font-serif text-slate-800 leading-relaxed px-4 text-center break-keep whitespace-pre-line relative z-10"
                      >
                        "{resultCharacter.verse[bibleVersion]}"
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Info Bento Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 sm:p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100 flex flex-col h-full shadow-sm">
                      <h4 className="flex items-center gap-2 text-indigo-600 font-extrabold text-sm uppercase tracking-widest mb-6">
                        <ShieldCheck size={18} /> 핵심 강점 & 은사
                      </h4>
                      <div className="space-y-4 flex-1">
                        {resultCharacter.strengths.map((s, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-700 font-bold bg-white p-4 rounded-2xl shadow-sm border border-indigo-50/50">
                            <div className="w-1.5 h-6 bg-indigo-400 rounded-full" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/50 border border-rose-100 flex flex-col h-full shadow-sm">
                      <h4 className="flex items-center gap-2 text-rose-500 font-extrabold text-sm uppercase tracking-widest mb-6">
                        <Compass size={18} /> 성장 포인트 & 영적 과제
                      </h4>
                      <div className="space-y-4 flex-1">
                        {resultCharacter.weaknesses.map((w, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-700 font-bold bg-white p-4 rounded-2xl shadow-sm border border-rose-50/50">
                            <div className="w-1.5 h-6 bg-rose-400 rounded-full" />
                            {w}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <h4 className="flex items-center gap-2 text-slate-800 font-extrabold text-sm uppercase tracking-widest">
                          <Lightbulb size={18} className="text-amber-500" /> 라이프스타일 키워드
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 md:justify-end flex-1">
                        {resultCharacter.traits.map((t, i) => (
                          <span key={i} className="px-4 py-2 rounded-2xl bg-slate-50 text-slate-600 text-sm font-bold border border-slate-200 cursor-default">
                            #{t}
                          </span>
                        ))}
                      </div>
                  </div>
                  
                  {/* Compatibility Section */}
                  {(resultCharacter.bestMatch && resultCharacter.worstMatch) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                      {/* Best Match */}
                      <div className="p-6 md:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 flex flex-col items-center text-center shadow-sm relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl group-hover:bg-emerald-300/30 transition-all duration-700" />
                        <h4 className="flex items-center justify-center gap-2 text-emerald-600 font-extrabold text-sm uppercase tracking-widest mb-6">
                          <Heart size={18} /> 가장 잘 맞는 영적 파트너
                        </h4>
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                           <img 
                            src={CHARACTERS[resultCharacter.bestMatch as keyof typeof CHARACTERS].imageUrl} 
                            alt={CHARACTERS[resultCharacter.bestMatch as keyof typeof CHARACTERS].name}
                            className="w-full h-full object-cover bg-slate-100"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[10px] font-black bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                          {CHARACTERS[resultCharacter.bestMatch as keyof typeof CHARACTERS].mbti}
                        </span>
                        <h5 className="font-extrabold text-lg text-slate-800 mb-1">
                          {CHARACTERS[resultCharacter.bestMatch as keyof typeof CHARACTERS].name}
                        </h5>
                        <p className="text-xs text-slate-500 font-bold capitalize mb-4">
                          {CHARACTERS[resultCharacter.bestMatch as keyof typeof CHARACTERS].title}
                        </p>
                        <p className="text-sm text-emerald-800/80 font-medium leading-relaxed bg-emerald-100/50 p-4 rounded-2xl w-full">
                          {resultCharacter.bestMatchDescription}
                        </p>
                      </div>

                      {/* Worst Match */}
                      <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center shadow-sm relative overflow-hidden group">
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-200/50 rounded-full blur-3xl group-hover:bg-slate-300/50 transition-all duration-700" />
                        <h4 className="flex items-center justify-center gap-2 text-slate-600 font-extrabold text-sm uppercase tracking-widest mb-6">
                          <Zap size={18} /> 서로 보완이 필요한 파트너
                        </h4>
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-500">
                           <img 
                            src={CHARACTERS[resultCharacter.worstMatch as keyof typeof CHARACTERS].imageUrl} 
                            alt={CHARACTERS[resultCharacter.worstMatch as keyof typeof CHARACTERS].name}
                            className="w-full h-full object-cover bg-slate-100"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[10px] font-black bg-slate-200 text-slate-600 px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                          {CHARACTERS[resultCharacter.worstMatch as keyof typeof CHARACTERS].mbti}
                        </span>
                        <h5 className="font-extrabold text-lg text-slate-800 mb-1">
                          {CHARACTERS[resultCharacter.worstMatch as keyof typeof CHARACTERS].name}
                        </h5>
                        <p className="text-xs text-slate-500 font-bold capitalize mb-4">
                          {CHARACTERS[resultCharacter.worstMatch as keyof typeof CHARACTERS].title}
                        </p>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed bg-slate-100 p-4 rounded-2xl w-full">
                          {resultCharacter.worstMatchDescription}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={startTest}
                        className="btn-primary flex-1 bg-slate-100 !text-slate-800 !shadow-none hover:bg-slate-200"
                      >
                        <RotateCcw size={20} className="inline mr-2" /> 다시 테스트하기
                      </button>
                      <button
                        className="btn-primary flex-1 bg-gradient-to-r from-brand-primary to-brand-secondary"
                        onClick={() => {
                          const shareUrl = "https://bibletypetest.com/";
                          const shareText = `✨ [성경 인물 테스트 결과] ✨\n\n나의 영적 유형은... [${resultCharacter.name}]입니다!\n="${resultCharacter.title}"\n[영적 원형: ${resultCharacter.mbti}]\n\n과연 당신은 어떤 성경 인물을 닮았을까요? 지금 바로 테스트해보세요! 👇\n\n#성경인물테스트 #영적유형 #${resultCharacter.mbti}`;
                          
                          const shareData = {
                            title: '성경 인물 유형 테스트',
                            text: shareText,
                            url: shareUrl,
                          };

                          if (navigator.share) {
                            navigator.share(shareData).catch(() => {
                              navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                              alert("멋진 결과와 링크가 복사되었습니다! 🚀");
                            });
                          } else {
                            navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                            alert("멋진 결과와 링크가 복사되었습니다! 🚀");
                          }
                        }}
                      >
                        <Share2 size={20} className="inline mr-2" /> 결과 공유하기
                      </button>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={goToHome}
                        className="flex-1 py-4 text-slate-400 font-bold hover:text-brand-primary transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <Home size={16} /> 홈으로
                      </button>
                      <button
                        onClick={() => setShowCollection(true)}
                        className="flex-1 py-4 text-slate-400 font-bold hover:text-brand-secondary transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <Users size={16} /> 인물 도감
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer for AdSense Compliance */}
      <footer className="bg-slate-50 border-t border-slate-100 py-16 mt-auto relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div onClick={goToHome} className="cursor-pointer group flex items-center justify-center md:justify-start gap-3 w-full md:w-auto">
               <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md overflow-hidden">
                <img src="/favicon.svg" alt="Footer Logo" className="w-6 h-6" style={{ filter: 'hue-rotate(240deg) saturate(1.5)' }} />
              </div>
              <span className="font-black text-xl tracking-tighter text-slate-500 group-hover:text-slate-800 transition-colors">Bible<span className="text-slate-300 group-hover:text-brand-primary">Type</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
              <button onClick={() => setLegalPage('privacy')} className="text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest flex items-center gap-2">
                개인정보 처리방침
              </button>
              <button onClick={() => setLegalPage('terms')} className="text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest flex items-center gap-2">
                이용약관
              </button>
              <button onClick={() => setLegalPage('about')} className="text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest flex items-center gap-2">
                서비스 소개
              </button>
            </div>
          </div>
          
          <div className="border-t border-slate-200/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] leading-relaxed text-slate-400 font-medium tracking-wide text-center md:text-left">
              본 서비스는 성경 인물을 통해 영적 통찰을 제공하기 위해 설계되었습니다. <br className="hidden md:block" />
              개인 데이터는 결과 계산을 위해서만 사용되며 영구 저장되지 않습니다.
            </p>
            <p className="text-[11px] font-bold text-slate-400 tracking-wider text-center md:text-right uppercase">
              © 2026 BibleType Research. <br className="md:hidden" />All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Character Collection Modal */}
      <AnimatePresence>
        {showCollection && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setShowCollection(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2 tracking-tight">
                    <Sparkles className="text-brand-primary" size={24} />
                    성경 인물 <span className="text-brand-primary">도감</span>
                  </h2>
                  <p className="text-slate-400 text-sm font-medium mt-1">성경 속 인물들의 다양한 영적 유형을 탐색해보세요.</p>
                </div>
                <button 
                  onClick={() => setShowCollection(false)}
                  className="p-3 hover:bg-slate-200 rounded-2xl transition-all hover:scale-110 active:scale-95"
                >
                  <X size={28} className="text-slate-500" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 bg-white custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.values(CHARACTERS).map((char) => (
                    <motion.div 
                      key={char.id}
                      whileHover={{ y: -4 }}
                      className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-brand-primary/20 transition-all group"
                    >
                      <div className="flex gap-5">
                        <div className="w-24 h-24 rounded-2xl bg-white overflow-hidden flex-shrink-0 shadow-inner border border-slate-100">
                          <img 
                            src={char.imageUrl} 
                            alt={char.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-extrabold text-xl text-slate-800">{char.name}</h3>
                            <span className="text-[10px] font-black bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-md uppercase tracking-widest border border-brand-primary/20">
                              {char.mbti}
                            </span>
                          </div>
                          <p className="text-xs font-black text-brand-secondary mb-3 uppercase tracking-wider">{char.title}</p>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">
                            {char.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {char.traits.map(trait => (
                          <span key={trait} className="text-[11px] bg-white text-slate-500 px-3 py-1.5 rounded-xl font-bold shadow-sm border border-slate-100 group-hover:border-brand-primary/10 group-hover:text-brand-primary transition-colors">#{trait}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

         {/* Legal/About Modal */}
         {legalPage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-10 bg-slate-900/60 backdrop-blur-2xl"
            onClick={() => setLegalPage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 150, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 150, scale: 0.95 }}
              className="bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[85vh] md:rounded-[4.5rem] overflow-hidden flex flex-col shadow-4xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-10 md:p-14 border-b border-slate-50 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    {legalPage === 'privacy' && '개인정보 처리방침'}
                    {legalPage === 'terms' && '이용약관'}
                    {legalPage === 'about' && '서비스 소개'}
                  </h2>
                   <div className="h-1.5 w-12 bg-brand-primary rounded-full mt-4" />
                </div>
                <button 
                  onClick={() => setLegalPage(null)}
                  className="p-5 hover:bg-slate-50 rounded-3xl transition-all active:scale-90"
                >
                  <X size={32} className="text-slate-300" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-10 md:p-16 custom-scrollbar bg-white">
                <article className="prose prose-slate prose-lg max-w-none">
                  {legalPage === 'privacy' && (
                    <div className="space-y-8 text-left">
                      <p className="text-xl font-bold text-slate-800 leading-relaxed mb-6">성경 인물 테스트(BibleType)는 사용자의 개인정보 보호를 최우선으로 하며, 관련 법령을 준수합니다.</p>
                      
                      <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-brand-primary mb-3 uppercase tracking-widest text-xs">1. 수집하는 정보 및 이용 목적</h4>
                        <p className="text-slate-600 font-medium leading-relaxed mb-4">본 서비스는 회원의 가입 없이 누구나 이용할 수 있으며, 이 과정에서 이름, 연락처 등 개인 식별 정보를 직접 수집하거나 저장하지 않습니다. 사용자의 테스트 답변 데이터는 결과 도출을 위한 일회성 연산에만 사용되며, 브라우저 종료 및 테스트 완료 시 서버에 영구적으로 저장되지 않습니다.</p>
                      </section>

                      <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-brand-primary mb-3 uppercase tracking-widest text-xs">2. 쿠키(Cookie)의 운용 및 거부</h4>
                        <p className="text-slate-600 font-medium leading-relaxed">쿠키는 웹사이트를 운영하는 데 이용되는 서버가 사용자의 브라우저에 보내는 아주 작은 텍스트 파일로, 사용자의 컴퓨터 단말기에 저장됩니다. 서비스는 원활한 서비스 제공 및 사이트 트래픽 분석용으로만 제한적으로 쿠키를 사용할 수 있습니다. 사용자는 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>
                      </section>
                    </div>
                  )}

                  {legalPage === 'terms' && (
                    <div className="space-y-8 text-left">
                      <p className="text-xl font-bold text-slate-800 leading-relaxed mb-6">BibleType 서비스 이용에 대한 기본 약관입니다. 서비스를 이용하심으로써 본 약관에 동의하는 것으로 간주됩니다.</p>
                      
                      <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">1. 서비스의 목적 및 성격</h4>
                        <p className="text-slate-600 font-medium leading-relaxed">본 서비스(성경 인물 테스트)는 성경적 가치관과 대중적인 심리 분석 프레임을 결합하여 제작된 가볍고 흥미로운 웹 콘텐츠입니다. 제공되는 결과는 절대적인 심리 진단이나 신학적 잣대가 아니며, 개인의 재미와 성찰을 위한 참고용으로만 사용해 주시기 바랍니다.</p>
                      </section>

                      <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">2. 저작권 보호 및 지식재산권</h4>
                        <p className="text-slate-600 font-medium leading-relaxed">서비스 내의 모든 문구, 디자인 요소 및 결과 리포트에 관한 지식재산권은 원칙적으로 서비스 제공자에게 있습니다. 본 서비스를 영리 목적으로 무단 복제, 배포, 변형하는 행위는 금지됩니다. (단, 개인적인 소셜 미디어 결과 공유 기능의 이용은 적극 권장합니다.)</p>
                      </section>

                      <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">3. 서비스의 변경 및 중단</h4>
                        <p className="text-slate-600 font-medium leading-relaxed">서비스는 운영상 또는 기술상의 필요에 따라 사전 공지 없이 일부 또는 전체 내용을 수정, 일시 정지, 혹은 영구 종료할 수 있습니다. 무료 콘텐츠의 특성상 서비스 중단으로 인한 별도의 책임은 지지 않습니다.</p>
                      </section>
                    </div>
                  )}

                  {legalPage === 'about' && (
                    <div className="space-y-12 text-center py-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[2.5rem] flex items-center justify-center text-white mx-auto shadow-2xl rotate-3">
                        <Sparkles size={48} />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                         나와 닮은 <br />
                        <span className="text-brand-primary italic">성경 인물</span>은?
                      </h3>
                      <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto break-keep">
                        우리는 매일 수많은 결정을 내리며 각자의 모습으로 삶을 살아냅니다. 
                        고대 성경 속 수많은 인물들 역시 각자의 독특한 성향, 약점, 강점을 가진 채로 
                        하나님과 교제하며 각자의 삶을 써내려갔습니다.
                      </p>
                      
                      <div className="bg-slate-50 p-10 rounded-[2.5rem] text-left border border-slate-100">
                        <p className="text-slate-600 font-medium leading-relaxed break-keep mb-6">
                          <strong>성경 인물 테스트(BibleType)</strong>는 나와 영적으로, 성향적으로 가장 유사한 
                          성경 속 인물을 매칭해주는 프로젝트입니다. 일상적인 직관적 상황 문답을 통해 당신이 
                          어떤 방식으로 소통하고 행동하는지를 고유한 성향 조합으로 분석하여 결과를 안내합니다.
                        </p>
                        <p className="text-slate-600 font-medium leading-relaxed break-keep">
                          때로는 모세의 우직함이, 때로는 다윗의 감수성이, 어쩌면 바울의 논리 정연함이 
                          당신의 라이프스타일 속에 녹아 있을지도 모릅니다. 본 테스트를 통해 재미있는 통찰을 얻고 
                          자신의 긍정적 강점을 새롭게 발견하는 시간이 되기를 바랍니다!
                        </p>
                      </div>

                      <div className="pt-8 grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col items-center group shadow-sm hover:shadow-xl transition-all">
                          <Brain className="text-brand-primary mb-4 transition-transform group-hover:scale-125" size={32} />
                          <p className="font-black text-slate-800 text-sm tracking-widest uppercase">Psychology</p>
                        </div>
                        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col items-center group shadow-sm hover:shadow-xl transition-all">
                          <BookOpen className="text-brand-secondary mb-4 transition-transform group-hover:scale-125" size={32} />
                          <p className="font-black text-slate-800 text-sm tracking-widest uppercase">Bible Core</p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] p-4 bg-brand-primary text-white rounded-full shadow-2xl hover:bg-brand-secondary hover:scale-110 active:scale-95 transition-all outline-none"
            aria-label="맨 위로 가기"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
