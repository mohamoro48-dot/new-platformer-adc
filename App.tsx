
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import OperationsSection from './components/sections/OperationsSection';
import AiToolsSection from './components/sections/AiToolsSection';
import StrategySection from './components/sections/StrategySection';
import FinancialsSection from './components/sections/FinancialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    const sectionIds = ['operations', 'ai_tools', 'strategy', 'financials'];
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-soft-sand text-primary-stone font-sans" dir="rtl">
            <div className="container mx-auto p-4 md:p-8">
                <Header />
                <Navigation onNavigate={scrollToSection} />

                <main className="space-y-8">
                    <OperationsSection id={sectionIds[0]} />
                    <AiToolsSection id={sectionIds[1]} />
                    <StrategySection id={sectionIds[2]} />
                    <FinancialsSection id={sectionIds[3]} />
                </main>
                
                <Footer />
            </div>
        </div>
    );
};

export default App;
