import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Unity Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800">Unity 株式会社</span>
        </div>

        {/* Navigation Links & Lang Switcher */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-3 text-sm font-medium text-gray-600 border-r border-gray-200 pr-8">
            <button className="hover:text-teal-primary transition-colors">JA</button>
            <span className="text-gray-300">|</span>
            <button className="text-teal-primary font-bold">MM</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-teal-primary transition-colors">EN</button>
          </div>
          
          <ul className="flex items-center gap-6 text-sm font-semibold text-gray-700">
            <li><a href="#" className="hover:text-teal-primary transition-colors">ကျွန်ုပ်တို့အကြောင်း</a></li>
            <li><a href="#" className="hover:text-teal-primary transition-colors">ဝန်ဆောင်မှုများ</a></li>
            <li><a href="#" className="hover:text-teal-primary transition-colors">အခွင့်အလမ်းများ</a></li>
            <li><a href="#" className="hover:text-teal-primary transition-colors">ဆက်သွယ်ရန်</a></li>
            <li><a href="#" className="hover:text-teal-primary transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* CTA Button */}
        <button className="bg-gold-accent hover:bg-gold-hover text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-gold-accent/20 transition-all transform hover:-translate-y-0.5 active:scale-95">
          ဆွေးနွေးတိုင်ပင်ရန်
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
