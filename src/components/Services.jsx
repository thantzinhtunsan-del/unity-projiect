import React from 'react';
import { Briefcase, GraduationCap, Handshake } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-teal-primary/10 transition-all duration-300 transform hover:-translate-y-2 group"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 bg-teal-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-primary group-hover:text-white transition-colors duration-300">
      <Icon size={32} className="text-teal-primary group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
    <button className="mt-6 text-teal-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
      အသေးစိတ်ကြည့်ရန် <span>→</span>
    </button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Skilled Worker Placement",
      description: "ဂျပန်နိုင်ငံရှိ နာမည်ကြီးကုမ္ပဏီများတွင် ကျွမ်းကျင်လုပ်သားအဖြစ် အလုပ်ကိုင်ရရှိရန် အစအဆုံး ကူညီဆောင်ရွက်ပေးပါသည်။",
      delay: 0
    },
    {
      icon: GraduationCap,
      title: "Study Abroad Program",
      description: "ဂျပန်ဘာသာစကားကျောင်းများနှင့် အသက်မွေးဝမ်းကျောင်းကောလိပ်များသို့ တက်ရောက်နိုင်ရန် လမ်းညွှန်ပေးပါသည်။",
      delay: 100
    },
    {
      icon: Handshake,
      title: "Business Matching",
      description: "မြန်မာနှင့် ဂျပန်လုပ်ငန်းရှင်များအကြား အကျိုးတူပူးပေါင်းဆောင်ရွက်နိုင်ရန် ချိတ်ဆက်ပေးပါသည်။",
      delay: 200
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">ကျွန်ုပ်တို့၏ <span className="text-teal-primary">ဝန်ဆောင်မှုများ</span></h2>
          <p className="text-gray-600 text-lg">
            သင်၏အနာဂတ်အောင်မြင်မှုအတွက် အကောင်းဆုံးဝန်ဆောင်မှုများကို ပေးစွမ်းနေပါသည်။
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
