import React from 'react';
import { PROJECT_STATS } from '../constants';
import { Clock, Users, Image as ImageIcon, Coins } from 'lucide-react';

const Stats: React.FC = () => {
  const getIcon = (iconName?: string) => {
    switch(iconName) {
      case 'clock': return <Clock className="w-8 h-8 mb-4 text-hop-primary" />;
      case 'users': return <Users className="w-8 h-8 mb-4 text-hop-primary" />;
      case 'image': return <ImageIcon className="w-8 h-8 mb-4 text-hop-primary" />;
      case 'euro': return <Coins className="w-8 h-8 mb-4 text-hop-primary" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECT_STATS.map((stat, index) => (
          <div key={index} className="bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {getIcon(stat.icon)}
              <span className="text-4xl font-heading font-bold text-hop-black">{stat.value}</span>
              <p className="text-sm uppercase tracking-wide text-gray-500 mt-2 font-bold font-sans">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;