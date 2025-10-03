
import React from 'react';
import CollapsibleSection from '../CollapsibleSection';

interface OperationsSectionProps {
    id: string;
}

const OperationsSection: React.FC<OperationsSectionProps> = ({ id }) => (
    <CollapsibleSection id={id} title="1. الرؤية وآلية التشغيل" icon="🎯" borderColorClass="border-primary-stone" isOpenDefault={true}>
        <p className="mb-6 text-gray-600 font-medium text-lg">نحن لا ننشئ مركزاً آخر؛ نحن نطور منصة قادرة على التوسع إقليمياً. والآلية التشغيلية مصممة لتقليل التكاليف وزيادة مرونة الخدمة، وهو مفتاح النجاح في الخدمات المتخصصة.</p>

        <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-trust-blue">آلية العمل المتكاملة:</h3>
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-accent-amber shadow-sm flex items-center gap-4">
                <span className="font-bold text-accent-amber text-lg">1. التقييم:</span>
                <span className="text-gray-700">استمارة إلكترونية وتقييم أولي من الأخصائي.</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-accent-amber shadow-sm flex items-center gap-4">
                <span className="font-bold text-accent-amber text-lg">2. الأتمتة:</span>
                <span className="text-gray-700">إنشاء خطة فردية مُولّدة بالذكاء الاصطناعي وربطها بالمكتبة التعليمية.</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-accent-amber shadow-sm flex items-center gap-4">
                <span className="font-bold text-accent-amber text-lg">3. المتابعة:</span>
                <span className="text-gray-700">ولي الأمر يرفع فيديو تطبيق الطالب والأخصائي يقيم ويرسل ملخصاً آلياً.</span>
            </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-stone">العوائد الاستراتيجية المضمونة:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-highlight-emerald/10 rounded-lg shadow-inner text-center border-b-4 border-highlight-emerald">
                <p className="font-bold text-highlight-emerald text-lg">انتشار غير محدود</p>
                <p className="text-sm mt-1 text-gray-600">كسر حاجز الموقع الجغرافي والوصول إلى أسواق إقليمية جديدة.</p>
            </div>
            <div className="p-4 bg-highlight-cyan/10 rounded-lg shadow-inner text-center border-b-4 border-highlight-cyan">
                <p className="font-bold text-highlight-cyan text-lg">تحسين قيمة العميل (LTV)</p>
                <p className="text-sm mt-1 text-gray-600">دعم فوري ومستمر لولي الأمر، مما يضمن بقاء العميل لأطول فترة ممكنة.</p>
            </div>
            <div className="p-4 bg-accent-amber/10 rounded-lg shadow-inner text-center border-b-4 border-accent-amber">
                <p className="font-bold text-accent-amber text-lg">تقليل التكلفة التشغيلية</p>
                <p className="text-sm mt-1 text-gray-600">تفريغ الأخصائيين من 40% من مهامهم الإدارية والورقية عبر الأتمتة.</p>
            </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-trust-blue border-b pb-2">تطوير الأخصائيين: نموذج الحوافز والنمو</h3>
            <p className="mb-4 text-gray-600 font-medium">الاستثمار في المنصة هو استثمار في كفاءة فريق العمل واستبقائه، مما يضمن جودة الخدمة العالية:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-soft-sand rounded-lg shadow-md border-r-4 border-accent-amber">
                    <p className="font-bold text-lg text-accent-amber">زيادة الدخل والحوافز</p>
                    <p className="text-sm mt-1 text-gray-600">يُدفع للأخصائي مقابل كل خطة يتم إنشاؤها وكل تقييم دوري يتم إنجازه، مما يحول كفاءتهم إلى دخل إضافي مباشر.</p>
                </div>
                <div className="p-4 bg-soft-sand rounded-lg shadow-md border-r-4 border-highlight-cyan">
                    <p className="font-bold text-lg text-highlight-cyan">التأهيل الرقمي المتقدم</p>
                    <p className="text-sm mt-1 text-gray-600">تطوير مهاراتهم في بيئة رقمية حديثة (تحليل البيانات، استخدام أدوات AI)، مما يرفع من قيمتهم السوقية.</p>
                </div>
                <div className="p-4 bg-soft-sand rounded-lg shadow-md border-r-4 border-highlight-emerald">
                    <p className="font-bold text-lg text-highlight-emerald">التوسع الشخصي</p>
                    <p className="text-sm mt-1 text-gray-600">فرص أكبر للوصول إلى عدد أكبر من الطلاب داخل وخارج الدولة، مما يوسع نطاق تأثيرهم المهني.</p>
                </div>
            </div>
        </div>
    </CollapsibleSection>
);

export default OperationsSection;
