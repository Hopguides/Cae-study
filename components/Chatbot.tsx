import React from 'react';
import { MessageSquare, Cpu } from 'lucide-react';

const Chatbot: React.FC = () => {
  return (
    <section className="bg-hop-pastel py-20 border-y border-orange-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-white shadow-sm rounded-full mb-6">
                <Cpu className="w-8 h-8 text-hop-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hop-black mb-4">
                C. Inovacija: AI Kustos <span className="text-gray-400 font-light">(Chatbot)</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
                Največja inovacija projekta je integracija konverzijske umetne inteligence. Obiskovalec lahko Zoisa "vpraša" o njegovem življenju ali mineralih, AI pa odgovarja v karakterju razsvetljenca iz 18. stoletja.
            </p>
        </div>

        {/* Chatbot Interface */}
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl shadow-orange-100/50">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-heading font-bold text-hop-black">Pogovor z Žigo Zoisom (Demo)</span>
            </div>

            <div style={{ width: '100%', height: '600px', border: '1px solid #e0e0e0', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#FAFAFA' }}>
                <iframe
                    src="https://app.fastbots.ai/embed/cm8gzqpw91955n8ltcgv4se77"
                    title="Klepet z Žigo Zoisom"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    allow="microphone">
                </iframe>
            </div>
            
            <p className="text-center font-sans text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <em>Interaktivni demo: Vprašajte barona Zoisa o njegovih mineralih ali o tem, kako je financiral kulturo.</em>
            </p>
        </div>

      </div>
    </section>
  );
};

export default Chatbot;