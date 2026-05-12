import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Brain, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type LegalPage = 'privacy' | 'terms' | 'about' | null;

interface LegalModalProps {
  page: LegalPage;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ page, onClose }) => {
  const { language, t } = useLanguage();

  if (!page) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-10 bg-slate-900/60 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, y: 150, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 150, scale: 0.95 }}
          className="bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[85vh] md:rounded-[4.5rem] overflow-hidden flex flex-col shadow-4xl border border-white/20 dark:bg-slate-900 dark:border-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 sm:p-10 md:p-14 border-b border-slate-200 flex items-center justify-between dark:border-slate-800">
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 uppercase tracking-tighter dark:text-white">
                {page === 'privacy' && t('footer.privacy')}
                {page === 'terms' && t('footer.terms')}
                {page === 'about' && t('footer.about')}
              </h2>
               <div className="h-1.5 w-8 sm:w-12 bg-brand-primary rounded-full mt-2 sm:mt-4" />
            </div>
            <button 
              onClick={onClose}
              className="p-3 sm:p-5 hover:bg-slate-50 rounded-3xl transition-all active:scale-90 dark:hover:bg-slate-800"
            >
              <X size={24} className="text-slate-300 dark:text-slate-600 sm:w-8 sm:h-8" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16 custom-scrollbar bg-white dark:bg-slate-900">
            <article className="prose prose-slate prose-lg max-w-none dark:prose-invert">
              {page === 'privacy' && language === 'en' && (
                <div className="space-y-8 text-left">
                  <p className="text-xl font-bold text-slate-800 leading-relaxed mb-6 dark:text-slate-200">
                    Bible Character Test is committed to protecting your valuable personal information.
                  </p>
                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-primary mb-3 uppercase tracking-widest text-xs">1. Purpose of Information Collection</h4>
                    <p className="text-slate-600 font-medium leading-relaxed mb-4 dark:text-slate-400">This service is available to anyone without creating an account. We do not directly collect or store personal identification information such as your name or contact details. Your test responses are used solely for generating one-time results and are not permanently stored on our servers once your browser is closed or the test is completed.</p>
                  </section>

                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-primary mb-3 uppercase tracking-widest text-xs">2. Use of Cookies</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">Cookies are small text files sent by our servers and stored on your device. We use them in a limited capacity to ensure smooth service and analyze site traffic. You may configure your browser to accept all cookies, notify you when a cookie is sent, or reject all cookies.</p>
                  </section>
                </div>
              )}
              {page === 'privacy' && language !== 'en' && (
                <div className="space-y-8 text-left">
                  <p className="text-xl font-bold text-slate-800 leading-relaxed mb-6 dark:text-slate-200">
                    성경인물테스트는 사용자의 소중한 개인정보를 보호하기 위해 최선을 다합니다.
                  </p>
                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-primary mb-3 uppercase tracking-widest text-xs">1. 수집하는 정보 및 이용 목적</h4>
                    <p className="text-slate-600 font-medium leading-relaxed mb-4 dark:text-slate-400">본 서비스는 회원의 가입 없이 누구나 이용할 수 있으며, 이 과정에서 이름, 연락처 등 개인 식별 정보를 직접 수집하거나 저장하지 않습니다. 사용자의 테스트 답변 데이터는 결과 도출을 위한 일회성 연산에만 사용되며, 브라우저 종료 및 테스트 완료 시 서버에 영구적으로 저장되지 않습니다.</p>
                  </section>

                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-primary mb-3 uppercase tracking-widest text-xs">2. 쿠키(Cookie)의 운용 및 거부</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">쿠키는 웹사이트를 운영하는 데 이용되는 서버가 사용자의 브라우저에 보내는 아주 작은 텍스트 파일로, 사용자의 컴퓨터 단말기에 저장됩니다. 서비스는 원활한 서비스 제공 및 사이트 트래픽 분석용으로만 제한적으로 쿠키를 사용할 수 있습니다. 사용자는 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>
                  </section>
                </div>
              )}

              {page === 'terms' && language === 'en' && (
                <div className="space-y-8 text-left">
                  <p className="text-xl font-bold text-slate-800 leading-relaxed mb-6 dark:text-slate-200">These are the fundamental terms governing the use of the Bible Character Test service. By using this service, you agree to these terms.</p>
                  
                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">1. Purpose and Nature of the Service</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">This service (Bible Character Test) is a lighthearted and engaging web application that combines biblical values with popular psychological frameworks. The generated results are neither absolute psychological diagnoses nor theological standards. Please use them solely as a fun reference for personal reflection.</p>
                  </section>

                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">2. Copyright and Intellectual Property</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">In principle, the service provider retains all intellectual property rights to the texts, design elements, and result reports within this service. Unauthorized reproduction, distribution, or modification of this service for commercial purposes is prohibited. (However, personal sharing of results on social media is highly encouraged!)</p>
                  </section>

                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">3. Modification and Suspension of Service</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">We reserve the right to modify, temporarily suspend, or permanently terminate any or all parts of the service without prior notice due to operational or technical necessities. Given the free nature of this content, we accept no separate liability stemming from service interruptions.</p>
                  </section>
                </div>
              )}
              {page === 'terms' && language !== 'en' && (
                <div className="space-y-8 text-left">
                  <p className="text-xl font-bold text-slate-800 leading-relaxed mb-6 dark:text-slate-200">성경인물테스트 서비스 이용에 대한 기본 약관입니다. 서비스를 이용하심으로써 본 약관에 동의하는 것으로 간주됩니다.</p>
                  
                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">1. 서비스의 목적 및 성격</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">본 서비스(성경 인물 테스트)는 성경적 가치관과 대중적인 심리 분석 프레임을 결합하여 제작된 가볍고 흥미로운 웹 콘텐츠입니다. 제공되는 결과는 절대적인 심리 진단이나 신학적 잣대가 아니며, 개인의 재미와 성찰을 위한 참고용으로만 사용해 주시기 바랍니다.</p>
                  </section>

                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">2. 저작권 보호 및 지식재산권</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">서비스 내의 모든 문구, 디자인 요소 및 결과 리포트에 관한 지식재산권은 원칙적으로 서비스 제공자에게 있습니다. 본 서비스를 영리 목적으로 무단 복제, 배포, 변형하는 행위는 금지됩니다. (단, 개인적인 소셜 미디어 결과 공유 기능의 이용은 적극 권장합니다.)</p>
                  </section>

                  <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <h4 className="font-black text-brand-secondary mb-3 uppercase tracking-widest text-xs">3. 서비스의 변경 및 중단</h4>
                    <p className="text-slate-600 font-medium leading-relaxed dark:text-slate-400">서비스는 운영상 또는 기술상의 필요에 따라 사전 공지 없이 일부 또는 전체 내용을 수정, 일시 정지, 혹은 영구 종료할 수 있습니다. 무료 콘텐츠의 특성상 서비스 중단으로 인한 별도의 책임은 지지 않습니다.</p>
                  </section>
                </div>
              )}

              {page === 'about' && (
                <div className="space-y-12 text-center py-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[2.5rem] flex items-center justify-center text-white mx-auto shadow-2xl rotate-3 overflow-hidden">
                    <BookOpen size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-tight dark:text-white">
                    {t('hero.title.1')} <br />
                    <span className="text-brand-primary italic">{t('hero.title.2')}</span>{t('hero.title.3')}
                  </h3>
                  <p className="text-xl text-slate-600 font-bold leading-relaxed max-w-2xl mx-auto break-keep dark:text-slate-400">
                    {language === 'en' 
                      ? "Every day, we make countless decisions that shape who we are. Likewise, the many figures of the ancient Bible lived out their own unique lives, complete with individual dispositions, weaknesses, and strengths, as they walked with God." 
                      : "우리는 매일 수많은 결정을 내리며 각자의 모습으로 삶을 살아냅니다. 고대 성경 속 수많은 인물들 역시 각자의 독특한 성향, 약점, 강점을 가진 채로 하나님과 교제하며 각자의 삶을 써내려갔습니다."}
                  </p>
                  
                  <div className="bg-slate-100/50 p-8 sm:p-12 rounded-[2.5rem] text-left border border-slate-200 dark:bg-slate-800/50 dark:border-slate-800">
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3 dark:text-slate-200">
                          <Brain className="text-brand-primary" size={24} />
                          {t('modal.about.title')}
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-bold break-keep dark:text-slate-400">
                          {t('modal.about.desc')}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3 dark:text-slate-200">
                          <BookOpen className="text-brand-secondary" size={24} />
                          {language === 'en' ? "Algorithm and Results" : "분석 알고리즘과 결과"}
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-bold break-keep dark:text-slate-400">
                          {language === 'en' 
                            ? "Our matching algorithm compiles data about your lifestyle choices—from extroversion and introversion to intuition and sensation, and thinking and feeling. On the results page, you can see the core strengths, spiritual archetypes, and key Bible verses of your matched character, giving you profound insights into each figure." 
                            : "외향성과 내향성, 직관과 감각, 사고과 감정에 이르기까지 개개인의 생활 방식 데이터를 종합하여 매칭 알고리즘을 구동합니다. 결과 페이지에서는 매칭된 인물의 핵심 강점과 영적 원형, 삶을 관통하는 성경 구절을 함께 살펴볼 수 있으며, 각 인물에 대한 깊은 인사이트를 제공합니다."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
