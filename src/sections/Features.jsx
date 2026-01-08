import React from 'react';
import { Users, Heart, Music } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Social Sync",
      desc: "See what your friends are listening to in real-time. No algorithms, just human taste."
    },
    {
      icon: <Heart size={32} />,
      title: "Taste Match",
      desc: "Find your musical soulmates based on listening history and shared favorite artists."
    },
    {
      icon: <Music size={32} />,
      title: "Universal Vault",
      desc: "One home for all your playlists. Save tracks across platforms into your Melofy library."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto bg-purple-50/30 rounded-3xl my-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Melofy Ecosystem</h2>
        <p className="text-gray-500">Seamlessly connected across web and mobile.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, index) => (
          <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-purple-100/50 hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 mx-auto">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

