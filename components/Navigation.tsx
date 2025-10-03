
import React from 'react';

interface NavigationProps {
    onNavigate: (id: string) => void;
}

const NavButton: React.FC<{ onClick: () => void; className: string; children: React.ReactNode }> = ({ onClick, className, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${className}`}
    >
        {children}
    </button>
);

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
    return (
        <nav className="sticky top-4 z-20 bg-white/80 backdrop-blur-md p-3 shadow-lg rounded-xl mb-8 flex justify-center items-center gap-2 md:gap-4 overflow-x-auto">
            <NavButton onClick={() => onNavigate('operations')} className="bg-primary-stone text-white hover:bg-gray-700">
                الرؤية والتشغيل
            </NavButton>
            <NavButton onClick={() => onNavigate('ai_tools')} className="bg-trust-blue text-white hover:bg-blue-700">
                الميزة التكنولوجية
            </NavButton>
            <NavButton onClick={() => onNavigate('strategy')} className="bg-gray-200 text-primary-stone hover:bg-gray-300">
                التنفيذ والنمو
            </NavButton>
            <NavButton onClick={() => onNavigate('financials')} className="bg-accent-amber text-primary-stone hover:bg-yellow-500">
                الأداء المالي
            </NavButton>
        </nav>
    );
};

export default Navigation;
