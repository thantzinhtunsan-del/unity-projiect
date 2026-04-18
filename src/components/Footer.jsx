import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002B2B] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/assets/logo.png" alt="Unity Logo" className="h-10 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">Unity 株式会社</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              ဂျပန်နိုင်ငံသို့ ကျွမ်းကျင်လုပ်သားနှင့် ကျောင်းသားများ ပို့ဆောင်ရေးတွင် ယုံကြည်စိတ်ချရသော အကျိုးဆောင်လုပ်ငန်းဖြစ်ပါသည်။
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Japan Office */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-gold-accent pl-4">Japan Office</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3"><MapPin size={20} className="text-gold-accent shrink-0" /> 1-2-3 Shinjuku, Tokyo, Japan</li>
              <li className="flex gap-3"><Phone size={20} className="text-gold-accent shrink-0" /> +81 80-1234-5678</li>
              <li className="flex gap-3"><Mail size={20} className="text-gold-accent shrink-0" /> info-jp@unity.com</li>
            </ul>
          </div>

          {/* Myanmar Office */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-gold-accent pl-4">Myanmar Office</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3"><MapPin size={20} className="text-gold-accent shrink-0" /> No. 456, Pyay Road, Yangon</li>
              <li className="flex gap-3"><Phone size={20} className="text-gold-accent shrink-0" /> +95 9-123456789</li>
              <li className="flex gap-3"><Mail size={20} className="text-gold-accent shrink-0" /> info-mm@unity.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-gold-accent pl-4">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-gold-accent transition-colors">ကျွန်ုပ်တို့အကြောင်း</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">ဝန်ဆောင်မှုများ</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">အခွင့်အလမ်းများ</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2026 Unity 株式会社 (Unity Co., Ltd). All Rights Reserved. Build with ❤️ for your future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
