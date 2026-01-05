import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full py-24 px-6 bg-hop-black text-white overflow-hidden">
      {/* Background Image with darker overlay for text contrast */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-003.jpg')] bg-cover bg-center grayscale mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight leading-tight">
          Žiga Zois: <span className="text-hop-primary">Digitalna Renesansa</span>
        </h1>
        
        <div className="w-16 h-2 bg-hop-primary mx-auto mb-8 rounded-full"></div>
        
        <p className="text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto text-gray-200">
          Kako smo s pomočjo tehnologije in 1.600 ur dela oživeli zgodovino za Prirodoslovni muzej Slovenije.
          <sup className="text-xs ml-1 text-hop-primary font-bold">[cite: 3, 217]</sup>
        </p>
      </div>
    </header>
  );
};

export default Header;