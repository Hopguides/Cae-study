import React from 'react';
import { User, Layers } from 'lucide-react';

interface KeyFeatureProps {
  type: 'protagonist' | 'multichannel';
}

const KeyFeatures: React.FC<KeyFeatureProps> = ({ type }) => {
  if (type === 'protagonist') {
    return (
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-hop-pastel rounded-full mb-6">
            <User className="w-8 h-8 text-hop-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-hop-black mb-4">
          A. Oživljena osebnost <span className="text-gray-400 font-light">(Digitalni protagonist)</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
          Namesto statičnih tabel obiskovalce nagovori animirani lik Žige Zoisa. S pomočjo tehnologije "metahuman" Zois ne le pripoveduje, ampak komunicira.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-bold text-hop-black">
            <span className="bg-gray-100 px-4 py-2 rounded-full">Strokovna podlaga (dr. Miha Jeršek)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Večjezičnost (SLO/ANG)</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-4 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-hop-pastel rounded-full mb-6">
          <Layers className="w-8 h-8 text-hop-primary" />
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-hop-black mb-4">
        B. Večkanalna izkušnja
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
        Produkt je zasnovan hibridno: <strong>On-site</strong> obiskovalci prek QR kod dostopajo do ekskluzivnih vsebin, <strong>Online</strong> pa serija animiranih videov služi kot kampanja za privabljanje v regijo.
      </p>
    </div>
  );
};

export default KeyFeatures;