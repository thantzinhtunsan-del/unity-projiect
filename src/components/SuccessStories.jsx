import React from 'react';

const SuccessCard = ({ name, role, story, image }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
    <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover shadow-inner" />
    <div>
      <h4 className="text-xl font-bold text-gray-800">{name}</h4>
      <p className="text-teal-primary text-sm font-semibold mb-3">{role}</p>
      <p className="text-gray-600 italic leading-relaxed">"{story}"</p>
    </div>
  </div>
);

const SuccessStories = () => {
  const stories = [
    {
      name: "Ma Su Mon",
      role: "Careworker in Tokyo",
      story: "Unity helped me find the perfect job in Japan. The support during the visa process was amazing!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    },
    {
      name: "Ko Min Thu",
      role: "Engineer in Osaka",
      story: "I am now working as a software engineer in Japan thanks to the business matching service of Unity.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">အောင်မြင်မှု <span className="text-teal-primary">မှတ်တမ်းများ</span></h2>
          <p className="text-gray-600 text-lg">ဂျပန်နိုင်ငံတွင် အောင်မြင်စွာ အလုပ်ကိုင်ရရှိနေသူများ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <SuccessCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
