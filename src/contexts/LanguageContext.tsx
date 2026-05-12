import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ko' | 'en' | 'cn' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const uiTranslations: Partial<Record<Language, Record<string, string>>> = {
  ko: {
    'app.logo.1': '성경',
    'app.logo.2': '인물 테스트',
    'nav.collection': '도감',
    'nav.about': '정보',
    'nav.start': '테스트',
    'hero.title.1': '나와 닮은',
    'hero.title.2': '성경 인물',
    'hero.title.3': '은?',
    'hero.desc.1': '당신은 성경 속 수많은 주역 중',
    'hero.desc.2': '어떤 인물의 뜨거운 심장을 가졌을까요?',
    'btn.start': '나만의 유형 찾기',
    'btn.viewAll': '모든 인물 유형 보기',
    'test.progress': '진행도',
    'test.question': '질문 {number} / {total}',
    'result.title': '당신의 성경 인물 유형은...',
    'result.matching': '매칭 결과',
    'result.description': '인물 설명',
    'result.traits': '핵심 키워드',
    'result.strengths': '영적 강점',
    'result.weaknesses': '주의할 점',
    'result.verse': '오늘의 말씀',
    'result.bestMatch': '최고의 동역자',
    'result.worstMatch': '주의가 필요한 관계',
    'result.analysis': '심층 결과 분석',
    'result.strengths.title': '핵심 강점 & 은사',
    'result.weaknesses.title': '성장 포인트 & 영적 과제',
    'result.traits.title': '라이프스타일 키워드',
    'result.partnership': '영적 파트너 도감',
    'result.best.tag': '베스트 파트너',
    'result.best.desc': '나와 환상의 호흡을 자랑하는 유형',
    'result.worst.tag': '노력이 필요한 파트너',
    'result.worst.desc': '서로의 다름을 이해하며 맞춰가야 할 유형',
    'result.shareBtn': '결과 공유하기',
    'result.retryBtn': '다시 테스트하기',
    'result.homeBtn': '홈으로',
    'result.collectionBtn': '인물 도감',
    'result.copied': '멋진 결과와 링크가 복사되었습니다! 🚀',
    'result.shareText': '✨ [성경 인물 테스트 결과] ✨\n\n나의 영적 유형은... [{name}]입니다!\n"{title}"\n\n과연 당신은 어떤 성경 인물을 닮았을까요?\n\n#성경인물테스트 #영적유형',
    'btn.retry': '다시 테스트하기',
    'btn.share': '결과 공유하기',
    'btn.save': '이미지로 저장',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관',
    'footer.about': '서비스 소개',
    'footer.desc': '개인 데이터는 결과 계산을 위해서만 사용되며 영구 저장되지 않습니다.',
    'footer.copy': '© 2026 성경인물테스트. All rights reserved.',
    'modal.collection.title': '성경 인물',
    'modal.collection.subtitle': '도감',
    'modal.collection.desc': '성경 속 인물들의 다양한 영적 유형을 탐색해보세요.',
    'modal.about.title': '성경인물테스트란?',
    'modal.about.desc': '일상에서 마주하는 다양한 상황들 속에서 당신이 내리는 선택들은, 기록된 성경 속 누군가의 발걸음과 놀랍도록 닮아 있을 수 있습니다. 성경인물테스트는 단순한 성격 테스트를 넘어, 성경 이야기 속 인물들이 가졌던 고유한 가치관과 행동 양식을 현대인의 시각으로 재해석한 매칭 프로젝트입니다.',
    'verse.tab.title': '성경 버전',
    'bible.krv': '개역한글',
    'bible.rnksv': '새번역',
    'bible.klb': '현대인의성경',
    'bible.niv': 'NIV',
    'bible.nlt': 'NLT',
    'bible.esv': 'ESV',
    'bible.kjv': 'KJV'
  },
  en: {
    'app.logo.1': 'Bible',
    'app.logo.2': 'Character Test',
    'nav.collection': 'Collection',
    'nav.about': 'About',
    'nav.start': 'Test',
    'hero.title.1': 'Which Biblical Figure',
    'hero.title.2': 'Are You Most Like?',
    'hero.title.3': '',
    'hero.desc.1': 'Among the many heroes in the Bible,',
    'hero.desc.2': 'whose passionate heart do you share?',
    'btn.start': 'Discover Your Type',
    'btn.viewAll': 'View All Characters',
    'test.progress': 'Progress',
    'test.question': 'Question {number} of {total}',
    'result.title': 'Your Bible Character Match is...',
    'result.matching': 'Result',
    'result.description': 'Description',
    'result.traits': 'Key Traits',
    'result.strengths': 'Spiritual Strengths',
    'result.weaknesses': 'Points for Growth',
    'result.verse': 'Verse of the Day',
    'result.bestMatch': 'Best Match',
    'result.worstMatch': 'Challenging Match',
    'result.analysis': 'In-Depth Analysis',
    'result.strengths.title': 'Core Strengths & Gifts',
    'result.weaknesses.title': 'Growth Points & Focus Areas',
    'result.traits.title': 'Lifestyle Keywords',
    'result.partnership': 'Spiritual Partnerships',
    'result.best.tag': 'Best Partner',
    'result.best.desc': 'A type you collaborate wonderfully with',
    'result.worst.tag': 'Challenging Partner',
    'result.worst.desc': 'A type that requires mutual understanding of differences',
    'result.shareBtn': 'Share Result',
    'result.retryBtn': 'Retake Test',
    'result.homeBtn': 'Back to Home',
    'result.collectionBtn': 'Character Collection',
    'result.copied': 'Results and link copied! 🚀',
    'result.shareText': '✨ [Bible Character Test] ✨\n\nMy spiritual type is... [{name}]!\n"{title}"\n\nWhich Bible character do you resemble most?\n\n#BibleCharacterTest #SpiritualType',
    'btn.retry': 'Retake Test',
    'btn.share': 'Share Result',
    'btn.save': 'Save as Image',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.about': 'About Us',
    'footer.desc': 'Your personal data is used solely for calculating results and is not stored permanently.',
    'footer.copy': '© 2026 Bible Character Test. All rights reserved.',
    'modal.collection.title': 'Bible Character',
    'modal.collection.subtitle': 'Collection',
    'modal.collection.desc': 'Explore the diverse spiritual types of biblical figures.',
    'modal.about.title': 'What is the Bible Character Test?',
    'modal.about.desc': 'The choices you make in everyday situations may be surprisingly similar to the footsteps of someone in the Bible. The Bible Character Test goes beyond a simple personality quiz; it is a matching project that reinterprets the unique values and behaviors of biblical characters from a modern perspective.',
    'verse.tab.title': 'Bible Version',
    'bible.krv': 'KRV',
    'bible.rnksv': 'RNKSV',
    'bible.klb': 'KLB',
    'bible.niv': 'NIV',
    'bible.nlt': 'NLT',
    'bible.esv': 'ESV',
    'bible.kjv': 'KJV'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_lang');
      if (saved === 'ko' || saved === 'en') return saved as Language;
      
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') return 'en';
      if (browserLang === 'ko') return 'ko';
    }
    return 'ko';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_lang', lang);
  };

  const t = (key: string, params?: Record<string, any>): string => {
    let translation = uiTranslations[language]?.[key] ?? uiTranslations['ko']?.[key] ?? key;
    if (params) {
      Object.keys(params).forEach(k => {
        translation = translation.replace(new RegExp(`{${k}}`, 'g'), params[k]);
      });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
