import React from 'react';
import { Landmark, Smartphone, CalendarCheck, TrendingUp } from 'lucide-react';

const NarrativeSection: React.FC = () => {
  const compliancePoints = [
    {
      icon: <Landmark className="w-8 h-8 text-hop-primary" />,
      title: "Revitalizacija dediščine",
      desc: "Fizični objekti (Zoisova zbirka) so nadgrajeni z digitalno plastjo, ki ne posega v prostor, ampak ga obogati."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-hop-primary" />,
      title: "Visoka digitalizacija",
      desc: "Uporaba animacije, videoprodukcije in AI-asistenta presega klasične avdiovodiče in ustvarja imerzivno izkušnjo."
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-hop-primary" />,
      title: "Dostopnost in trajnost",
      desc: "Digitalni produkt je dostopen vse leto (9-mesečna zahteva) in omogoča disperzijo turistov prek digitalnih kanalov."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-hop-primary" />,
      title: "Trženjski potencial",
      desc: "Vsebine so zasnovane modularno (kratki videi, družbena omrežja), kar omogoča takojšnjo promocijo destinacije."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* 1. Povzetek projekta in vizija */}
      <div className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-hop-black mb-6">
          1. Povzetek projekta in <span className="text-hop-primary">vizija</span>
        </h2>
        <div className="prose prose-lg text-gray-700 font-sans leading-relaxed">
          <p className="mb-4">
            Projekt predstavlja preboj v interpretaciji kulturne dediščine, saj s pomočjo naprednih digitalnih tehnologij in umetne inteligence "oživlja" eno najpomembnejših osebnosti slovenske zgodovine – barona Žigo Zoisa.
          </p>
          <p>
            Ne gre le za digitalizacijo artefaktov, temveč za ustvarjanje <strong>personaliziranega turističnega produkta</strong>, ki obiskovalcem omogoča neposreden dialog z zgodovino. Projekt združuje strokovno kuratorstvo Prirodoslovnega muzeja Slovenije in tehnično inovativnost studia HopGuides.
          </p>
        </div>
      </div>

      {/* 2. Skladnost z razpisom */}
      <div className="bg-hop-pastel rounded-3xl p-8 md:p-12 border border-orange-100">
        <h2 className="text-3xl font-heading font-bold text-hop-black mb-10 text-center">
          2. Skladnost z razpisom MGRT
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {compliancePoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="shrink-0 bg-orange-50 p-3 rounded-lg">
                {point.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-hop-black mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;