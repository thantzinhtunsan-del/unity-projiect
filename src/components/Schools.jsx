import React from 'react';

const SchoolCard = ({ name, type }) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-4 hover:bg-white hover:shadow-xl hover:border-teal-primary/20 transition-all group">
    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition-colors shadow-sm">
      <span className="font-bold">U</span>
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{name}</h4>
      <p className="text-gray-500 text-sm">{type}</p>
    </div>
  </div>
);

const Schools = () => {
  const schools = [
    { name: "Japanese Language School", type: "In Kyoto & Tokyo" },
    { name: "Vocational College", type: "In Osaka & Nagoya" },
    { name: "Koyansano College", type: "In Wakayama" },
    { name: "Senri College", type: "In Osaka" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">ချိတ်ဆက်ထားသော <span className="text-teal-primary">ကျောင်းများ</span></h2>
          <p className="text-gray-600 text-lg">ဂျပန်နိုင်ငံတဝှမ်းရှိ နာမည်ကြီးကျောင်းများနှင့် တိုက်ရိုက်ချိတ်ဆက်ထားပါသည်။</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school, index) => (
            <SchoolCard key={index} {...school} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
