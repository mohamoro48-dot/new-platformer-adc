
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import CollapsibleSection from '../CollapsibleSection';
import { BUDGET_DATA, REVENUE_DATA } from '../../constants';

interface FinancialsSectionProps {
    id: string;
}

const FinancialsSection: React.FC<FinancialsSectionProps> = ({ id }) => {
    // Recharts can sometimes have issues with SSR, this ensures it only renders on the client.
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    const formatCurrency = (value: number) => new Intl.NumberFormat('ar-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(value);

    return (
        <CollapsibleSection id={id} title="4. الأداء المالي ومؤشرات الأداء" icon="💰" borderColorClass="border-trust-blue">
            <p className="mb-6 text-gray-600 font-medium text-lg">الهدف متحفظ (20 طالب)، لكن التكاليف التشغيلية المنخفضة بفضل الأتمتة تضمن الربحية والاستدامة.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-soft-sand p-4 rounded-lg shadow-inner text-center">
                    <p className="text-3xl font-extrabold text-accent-amber">20</p>
                    <p className="text-sm font-semibold text-primary-stone">الطلاب المستهدفون (س1)</p>
                </div>
                <div className="bg-soft-sand p-4 rounded-lg shadow-inner text-center">
                    <p className="text-3xl font-extrabold text-highlight-emerald">240,000</p>
                    <p className="text-sm font-semibold text-primary-stone">الإيرادات السنوية (د.إ)</p>
                </div>
                <div className="bg-soft-sand p-4 rounded-lg shadow-inner text-center">
                    <p className="text-3xl font-extrabold text-highlight-cyan">10,000 - 30,000</p>
                    <p className="text-sm font-semibold text-primary-stone">صافي الأرباح المتوقع (د.إ)</p>
                </div>
                <div className="bg-soft-sand p-4 rounded-lg shadow-inner text-center">
                    <p className="text-3xl font-extrabold text-primary-stone">3 - 4</p>
                    <p className="text-sm font-semibold text-gray-600">أشهر نقطة التعادل</p>
                </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">* صافي الربح بعد خصم التكاليف التشغيلية واسترداد تكلفة التطوير (60,000 د.إ).</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-stone">توزيع ميزانية التطوير (60,000 د.إ)</h3>
                    <p className="text-sm text-gray-500 mb-4">تضمن هذه الميزانية توافق المنصة مع متطلبات الذكاء الاصطناعي الموضحة.</p>
                    <div className="w-full h-80">
                        {isClient && (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={BUDGET_DATA} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                                        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                                        return <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="14">{(percent * 100).toFixed(0)}%</text>;
                                    }}>
                                        {BUDGET_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                    </Pie>
                                    <Tooltip formatter={(value: number) => [formatCurrency(value), 'المبلغ']} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-stone">مقارنة الإيرادات بالتكاليف</h3>
                    <p className="text-sm text-gray-500 mb-4">نضمن أن تكون قيمة العميل الدائمة أكبر من تكلفة اكتسابه باستخدام استراتيجية الذكاء الاصطناعي.</p>
                    <div className="w-full h-80">
                         {isClient && (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={REVENUE_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" tickFormatter={formatCurrency} />
                                    <YAxis type="category" dataKey="name" width={100} />
                                    <Tooltip formatter={(value: number) => [formatCurrency(value), 'القيمة']} cursor={{fill: 'rgba(245, 245, 244, 0.5)'}} />
                                    <Bar dataKey="value" barSize={30}>
                                         {REVENUE_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            </div>
        </CollapsibleSection>
    );
};

export default FinancialsSection;
