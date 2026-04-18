import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            သင့်အနာဂတ်ကို <span className="text-teal-primary">Unity</span> နှင့်အတူ <br />
            ယနေ့ တည်ဆောက်ပါ။
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            ဂျပန်နိုင်ငံသို့ ကျွမ်းကျင်လုပ်သားနှင့် ကျောင်းသားများ ပို့ဆောင်ရေး အကျိုးဆောင်
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-teal-primary hover:bg-teal-dark text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-teal-primary/20 transition-all transform hover:-translate-y-1">
              ပညာရေးတိုင်ပင်ဆွေးနွေးရန်
            </button>
            <button className="w-full sm:w-auto bg-gold-accent hover:bg-gold-hover text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-gold-accent/20 transition-all transform hover:-translate-y-1">
              အလုပ်လျှောက်ထားရန်
            </button>
          </div>
        </div>

        {/* Decorative elements - floating map/icons as seen in design */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 pointer-events-none hidden xl:block">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png" alt="" className="w-64 grayscale contrast-50" />
        </div>
      </div>
      
      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
