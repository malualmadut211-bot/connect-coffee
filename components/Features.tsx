import React from 'react';
import { Wifi, Car, Baby, Users, Armchair, Coffee } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Wifi, label: 'Free Wifi', desc: 'High speed internet' },
    { icon: Car, label: 'Free Parking', desc: 'Street & Lot available' },
    { icon: Armchair, label: 'Cozy Seating', desc: 'For solo or groups' },
    { icon: Baby, label: 'Kid Friendly', desc: 'Good for families' },
    { icon: Users, label: 'Table Service', desc: 'Relax, we serve you' },
    { icon: Coffee, label: 'Tourist Friendly', desc: 'Welcome to Juba' },
  ];

  return (
    <section className="py-16 bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="bg-coffee-800 p-4 rounded-2xl mb-4 group-hover:bg-coffee-700 transition-colors">
                <feature.icon className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="font-bold mb-1">{feature.label}</h4>
              <p className="text-xs text-coffee-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;