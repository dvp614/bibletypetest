import React from 'react';
import { motion } from 'motion/react';
import { Question } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { getLoc } from '../lib/utils';

interface TestSectionProps {
  currentQuestion: Question;
  currentIdx: number;
  totalQuestions: number;
  progress: number;
  onAnswer: (scores: { [key: string]: number }) => void;
}

export const TestSection: React.FC<TestSectionProps> = ({
  currentQuestion,
  currentIdx,
  totalQuestions,
  progress,
  onAnswer
}) => {
  const { language, t } = useLanguage();

  if (!currentQuestion) return null;

  return (
    <motion.div
      key="test"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-xl w-full z-10 mx-auto"
    >
      <div className="mb-10 px-2 text-center">
        <span className="px-4 py-2 rounded-full bg-white shadow-sm text-brand-primary text-sm font-bold border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
          {t('test.question', { number: currentIdx + 1, total: totalQuestions })}
        </span>
        <div className="mt-6 h-3 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner dark:bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="trendy-card p-6 sm:p-12 mb-8 bg-white border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 leading-[1.4] break-keep dark:text-white">
          {getLoc(currentQuestion.text, language)}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option.scores)}
            className="btn-option text-base sm:text-lg py-5 sm:py-7 break-keep px-5 sm:px-6"
          >
            {getLoc(option.text, language)}
          </button>
        ))}
      </div>
    </motion.div>
  );
};
