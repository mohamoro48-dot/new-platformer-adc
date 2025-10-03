
import { GoogleGenAI } from "@google/genai";
import type { MarketingAngle } from '../types';

// This is a mock implementation. In a real application, you would initialize this with an API key.
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingContent = async (prompt: string): Promise<MarketingAngle[]> => {
    console.log("Simulating Gemini API call with prompt:", prompt);
    // In a real scenario, you would use:
    // const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: `...` });
    // const text = response.text;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Return a structured, mock response
    if (!prompt || prompt.trim() === "") {
        return [];
    }
    
    const truncatedPrompt = prompt.slice(0, 40);

    return [
        {
            title: "زاوية 1: الشعار العاطفي",
            slogan: `أصبح تأهيل طفلك رحلة من بيتك. ${truncatedPrompt}... يبني مستقبلاً أفضل.`
        },
        {
            title: "زاوية 2: الشعار المنطقي (حل المشكلة)",
            slogan: `توقف عن البحث عن مراكز بعيدة. نقدّم ${truncatedPrompt}... بأقل تكلفة وجهد تحت إشراف متخصص.`
        },
        {
            title: "زاوية 3: دعوة العمل الموجهة",
            slogan: `ابدأ الآن خطوة ${truncatedPrompt}... استشر أخصائيينا لتأكيد التوافق.`
        }
    ];
};
