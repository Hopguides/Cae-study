import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full py-24 px-6 bg-hop-black text-white overflow-hidden">
      {/* Background Image with darker overlay for text contrast */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-003.jpg')] bg-cover bg-center grayscale mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
          Žiga Zois: <br className="md:hidden" />
          <span className="text-hop-primary">Digitalna renesansa kulturne dediščine</span>
        </h1>
        
        <div className="w-20 h-2 bg-hop-primary mx-auto mb-8 rounded-full"></div>
        
        <p className="text-xl md:text-2xl font-sans font-light leading-relaxed max-w-4xl mx-auto text-gray-200">
          Interaktivno doživetje razsvetljenstva s pomočjo umetne inteligence.
        </p>
      </div>
    </header>
  );
};

export default Header;