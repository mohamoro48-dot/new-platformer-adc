
import React from 'react';

const Header: React.FC = () => {
    // A placeholder for the logo. In a real app, you would import it.
    const logoUrl = 'https://via.placeholder.com/200x200.png?text=LOGO';

    return (
        <header className="text-center mb-10 p-6 bg-white shadow-2xl rounded-xl border-b-8 border-trust-blue">
            <div className="flex flex-col items-center mb-4">
                <img src={logoUrl} alt="شعار المركز" className="h-32 w-32 md:h-40 md:w-40 object-contain rounded-full bg-gray-100 p-2 border-2 border-gray-200" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-trust-blue mt-4">مركز تنمية القدرات</h1>
                <p className="text-lg text-gray-600 mt-1">Abilities Development Center (ADC)</p>
            </div>
            <p className="text-xl md:text-2xl font-extrabold text-primary-stone">إطلاق منصة الجيل الجديد لتنمية القدرات</p>
            <p className="text-base mt-2 text-accent-amber font-semibold">دراسة جدوى استراتيجية | مُقدمة من سيدي محمد صلاح الدين بوسعدية</p>
        </header>
    );
};

export default Header;
