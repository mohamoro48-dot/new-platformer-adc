
import React, { useState, useCallback } from 'react';
import CollapsibleSection from '../CollapsibleSection';
import { SIMULATED_PLANS, SIMULATED_REPORT, SIMULATED_QNA } from '../../constants';
import { generateMarketingContent } from '../../services/geminiService';
import type { Specialty, PlanData, MarketingAngle } from '../../types';

interface AiToolsSectionProps {
    id: string;
}

const AiToolCard: React.FC<{ title: string; description: string; children: React.ReactNode; icon: string; borderColor: string; }> = ({ title, description, children, icon, borderColor }) => (
    <div className={`p-6 bg-gray-50/50 rounded-xl border-2 ${borderColor} shadow-lg`}>
        <h4 className={`text-lg font-bold flex items-center mb-4 text-gray-800`}>
            <span className="text-3xl ml-3">{icon}</span> {title}
        </h4>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        {children}
    </div>
);

const AiToolsSection: React.FC<AiToolsSectionProps> = ({ id }) => {
    const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);
    const [showReport, setShowReport] = useState(false);
    const [showQnA, setShowQnA] = useState(false);
    
    const [marketingIdea, setMarketingIdea] = useState('');
    const [marketingResult, setMarketingResult] = useState<MarketingAngle[]>([]);
    const [isLoadingMarketing, setIsLoadingMarketing] = useState(false);

    const handlePlanGeneration = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const key = e.target.value as Specialty;
        setSelectedPlan(key ? SIMULATED_PLANS[key] : null);
    };
    
    const handleMarketingGeneration = useCallback(async () => {
        if (!marketingIdea.trim()) return;
        setIsLoadingMarketing(true);
        setMarketingResult([]);
        try {
            const result = await generateMarketingContent(marketingIdea);
            setMarketingResult(result);
        } catch (error) {
            console.error("Failed to generate marketing content", error);
        } finally {
            setIsLoadingMarketing(false);
        }
    }, [marketingIdea]);

    return (
        <CollapsibleSection id={id} title="2. المنصة الرقمية: أدوات الذكاء الاصطناعي" icon="💡" borderColorClass="border-trust-blue">
            <p className="mb-6 text-gray-600 font-medium text-lg">هنا تكمن القيمة الحقيقية للاستثمار. الأخصائي هو قائد العملية، بينما تضاعف أدوات الذكاء الاصطناعي من كفاءته ودقة الخدمة المقدمة، مما يضمن جودة عالية بتكلفة أقل.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-highlight-cyan border-b-2 border-highlight-cyan pb-2">⚙️ كفاءة الأخصائي والأتمتة</h3>
                    <AiToolCard title="مُنشئ خطط العمل الفردية السريع" description="يولد خطط فردية قابلة للتنفيذ في ثوانٍ. دور الأخصائي: مراجعة الخطة المولدة، تعديلها، وتخصيصها لتناسب حالة الطالب بدقة." icon="🤖" borderColor="border-highlight-cyan/50">
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <select onChange={handlePlanGeneration} className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-highlight-cyan focus:border-highlight-cyan bg-white text-primary-stone">
                                <option value="">اختر مجال التخصص...</option>
                                <option value="life_skills">مهارات حياتية</option>
                                <option value="behavior_mod">تعديل سلوك</option>
                                <option value="vocational">تأهيل مهني (Canva)</option>
                                <option value="occupational">علاج وظيفي</option>
                                <option value="academic">أكاديمي (القراءة)</option>
                            </select>
                        </div>
                        {selectedPlan && (
                            <div className="p-4 bg-white rounded-lg border border-gray-300 text-sm animate-fade-in">
                                <h5 className="font-bold text-primary-stone mb-2">{selectedPlan.title}</h5>
                                <pre className="whitespace-pre-wrap font-mono text-gray-800 text-xs">{selectedPlan.content}</pre>
                            </div>
                        )}
                    </AiToolCard>
                    <AiToolCard title="مستشار الدعم السلوكي الفوري" description="يقدم إرشادات سريعة ومصاغة باحترافية للرد الفوري على أسئلة الولي. دور الأخصائي: يستخدم الرد كمسودة ويصيغ الرد النهائي بلمسة شخصية." icon="💬" borderColor="border-highlight-cyan/50">
                        <button onClick={() => setShowQnA(!showQnA)} className="w-full px-6 py-2 bg-highlight-cyan text-white font-semibold rounded-lg hover:bg-cyan-600 transition duration-300 shadow-lg mb-4">
                            {showQnA ? 'إخفاء النموذج' : 'عرض نموذج استشارة'}
                        </button>
                        {showQnA && (
                            <div className="space-y-2 animate-fade-in">
                                <div className="p-4 bg-gray-100 rounded-lg border border-gray-300 text-sm">
                                    <h5 className="font-bold mb-1 text-gray-700">سؤال الولي (المدخل):</h5>
                                    <p className="text-gray-800">{SIMULATED_QNA.question}</p>
                                </div>
                                <div className="mt-2 p-4 bg-white rounded-lg border border-gray-300 text-sm">
                                    <h5 className="font-bold text-primary-stone mb-1">إجابة المستشار (المخرج):</h5>
                                    <pre className="whitespace-pre-wrap font-mono text-gray-800 text-xs">{SIMULATED_QNA.answer}</pre>
                                </div>
                            </div>
                        )}
                    </AiToolCard>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-highlight-emerald border-b-2 border-highlight-emerald pb-2">💖 التواصل والاستبقاء</h3>
                    <AiToolCard title="مُلخص التقارير الدورية الآلي" description="يلخص التقارير المعقدة إلى ملخصات موجزة وإجراءات منزلية. دور الأخصائي: يراجع الملخص الآلي للتأكد من دقته ثم يرسله لولي الأمر." icon="📊" borderColor="border-highlight-emerald/50">
                        <button onClick={() => setShowReport(!showReport)} className="w-full px-6 py-2 bg-highlight-emerald text-white font-semibold rounded-lg hover:bg-emerald-600 transition duration-300 shadow-lg mb-4">
                            {showReport ? 'إخفاء النموذج' : 'عرض نموذج الملخص'}
                        </button>
                        {showReport && (
                            <div className="space-y-2 animate-fade-in">
                                <div className="p-4 bg-gray-100 rounded-lg border border-gray-300 text-xs">
                                    <h5 className="font-bold mb-1 text-gray-700">تقرير الأخصائي المفصل (المدخل):</h5>
                                    <pre className="whitespace-pre-wrap font-mono text-gray-800">{SIMULATED_REPORT.input}</pre>
                                </div>
                                <div className="mt-2 p-4 bg-white rounded-lg border border-gray-300 text-xs">
                                    <h5 className="font-bold text-primary-stone mb-1">الملخص المقترح (المخرج):</h5>
                                    <pre className="whitespace-pre-wrap font-mono text-gray-800">{SIMULATED_REPORT.summary}</pre>
                                    <pre className="whitespace-pre-wrap font-mono text-gray-800 mt-2 border-t pt-2">{SIMULATED_REPORT.recommendations}</pre>
                                </div>
                            </div>
                        )}
                    </AiToolCard>
                     <AiToolCard title="مُولِّد الأفكار التسويقية" description="أداة تسويقية لتوليد أفكار وشعارات جديدة ومناسبة لتحسين محركات البحث (SEO) بناءً على مفاهيم مبتكرة." icon="🚀" borderColor="border-accent-amber/50">
                        <input type="text" value={marketingIdea} onChange={(e) => setMarketingIdea(e.target.value)} placeholder="اكتب فكرة تسويقية (مثلاً: ضمان استمرارية العلاج)..." className="w-full p-2 border border-gray-300 rounded-lg focus:ring-accent-amber focus:border-accent-amber mb-3 text-sm text-primary-stone" />
                        <button onClick={handleMarketingGeneration} disabled={isLoadingMarketing} className="w-full px-6 py-2 bg-accent-amber text-primary-stone font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                            {isLoadingMarketing ? '...جاري التوليد' : 'توليد زوايا تسويقية (AI)'}
                        </button>
                         {isLoadingMarketing && <div className="text-center p-4">جاري التواصل مع Gemini...</div>}
                         {marketingResult.length > 0 && (
                             <div className="mt-4 p-4 bg-white rounded-lg border border-gray-300 text-sm animate-fade-in space-y-3">
                                <h5 className="font-bold text-trust-blue mb-2">تحليل المفهوم: "{marketingIdea}"</h5>
                                 {marketingResult.map((angle, index) => (
                                     <div key={index} className="p-3 bg-gray-50 rounded-lg shadow-sm">
                                         <p className="font-semibold text-primary-stone text-sm">{angle.title}</p>
                                         <p className="text-accent-amber italic mt-1 text-xs">{angle.slogan}</p>
                                     </div>
                                 ))}
                             </div>
                         )}
                    </AiToolCard>
                </div>
            </div>
        </CollapsibleSection>
    );
};

export default AiToolsSection;
