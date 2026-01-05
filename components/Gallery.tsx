import React, { useState } from 'react';
import { GalleryItem } from '../types';

interface GalleryProps {
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ title, subtitle, items }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-hop-black mb-4">{title}</h2>
          {subtitle && <p className="text-gray-500 max-w-2xl mx-auto font-sans text-lg">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Changed from aspect-[4/5] to aspect-video (16:9) to fit video frames correctly */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title_sl}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-hop-black/90 via-hop-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-heading text-xl font-bold leading-tight">{item.title_sl}</h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-3 font-sans">{item.description_sl}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-hop-primary text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Default view when not hovering (mobile friendly) */}
              <div className="p-5 block lg:hidden">
                 <h3 className="font-heading font-bold text-hop-black text-lg">{item.title_sl}</h3>
                 <p className="text-sm text-gray-500 mt-2">{item.description_sl}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;