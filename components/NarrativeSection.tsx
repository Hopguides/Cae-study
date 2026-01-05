import React from 'react';
import { AlertCircle } from 'lucide-react';

const NarrativeSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-heading font-bold text-hop-black mb-8">
        Izziv in <span className="text-hop-primary">Rešitev</span>
      </h2>
      
      <div className="prose prose-lg text-gray-700 font-sans">
        <p className="mb-6 leading-relaxed text-xl font-light">
          Cilj projekta "Naprej v preteklost" je bil oživitev barona Žige Zoisa. Izziv ni bil le tehnične narave, temveč predvsem usklajevanje zgodovinske natančnosti s sodobno digitalno prezentacijo.
          <sup className="text-xs text-hop-primary font-bold ml-1">[cite: 3, 8]</sup>
        </p>

        <div className="bg-hop-pastel rounded-2xl p-8 mt-10 border border-orange-100">
          <div className="flex items-start gap-5">
            <div className="bg-white p-3 rounded-full shadow-sm mt-1 text-hop-primary">
               <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-hop-black mb-2">Incident "Brki"</h3>
              <p className="text-hop-black italic mb-4 opacity-80">
                14. novembra je dr. Jeršek opozoril na napako v videu: "Zois ima brke!!! Ni znano, da jih je imel."
              </p>
              <p className="text-gray-700 text-sm font-sans">
                Ekipa je morala opraviti <span className="font-bold text-hop-primary">16 ur rotoscopinga</span>, da je digitalno odstranila brke iz že animiranega obraza.
                <sup className="text-xs text-gray-400 ml-1">[cite: 354, 357]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;