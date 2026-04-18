import React from 'react';

const ProcessStep = ({ number, title, active }) => (
  <div className="flex flex-col items-center relative z-10 w-full">
    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-4 transition-all duration-500 ${
      active ? 'bg-gold-accent text-white shadow-lg shadow-gold-accent/30 scale-110' : 'bg-white/20 text-white border-2 border-white/30'
    }`}>
      {number}
    </div>
    <h4 className="text-white font-bold text-sm md:text-lg text-center">{title}</h4>
  </div>
);

const ProcessFlow = () => {
  const steps = [
    "Register Profile",
    "Interview Prep",
    "Employer Matching",
    "Visa Process"
  ];

  return (
    <section className="py-24 bg-teal-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">အလုပ်ရှာဖွေသူမှတ်ပုံတင်ခြင်း</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            ကျွန်ုပ်တို့နှင့်အတူ အဆင့်ဆင့် အလုပ်ကိုင်လျှောက်ထားနိုင်ရန် နည်းလမ်းများ
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-6 md:top-8 left-[10%] right-[10%] h-0.5 bg-white/20 hidden md:block">
            <div className="absolute top-0 left-0 h-full bg-gold-accent transition-all duration-1000 w-[75%]"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
            {steps.map((step, index) => (
              <ProcessStep 
                key={index} 
                number={index + 1} 
                title={step} 
                active={index < 4} 
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="bg-white text-teal-primary hover:bg-gold-accent hover:text-white px-12 py-4 rounded-xl font-bold text-xl shadow-2xl transition-all transform hover:-translate-y-1">
            ယခုပဲ စာရင်းသွင်းလိုက်ပါ
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
