
import React, { useState } from 'react';

interface CollapsibleSectionProps {
    id: string;
    title: string;
    icon: React.ReactNode;
    borderColorClass: string;
    isOpenDefault?: boolean;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ id, title, icon, borderColorClass, isOpenDefault = false, children }) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <section id={id} className={`bg-white shadow-2xl rounded-xl border-t-8 ${borderColorClass} overflow-hidden transition-all duration-500`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`content-${id}`}
            >
                <div className="flex items-center">
                    <span className="text-3xl ml-4">{icon}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-trust-blue">{title}</h2>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 text-trust-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                id={`content-${id}`}
                className={`transition-all duration-500 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 pt-0">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollapsibleSection;
