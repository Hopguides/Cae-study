import React from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import NarrativeSection from './components/NarrativeSection';
import Gallery from './components/Gallery';
import HoursChart from './components/HoursChart';
import Footer from './components/Footer';
import { ZOIS_CHARACTER_GALLERY, ZOIS_MINERALS_GALLERY } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Stats />
        
        <NarrativeSection />
        
        <div className="bg-hop-pastel">
            <Gallery 
            title="Galerija: Oživitev Lika" 
            subtitle="Generirano iz JSON podatkovne baze projekta. Prikaz ključnih trenutkov animacije."
            items={ZOIS_CHARACTER_GALLERY} 
            />
        </div>
        
        <HoursChart />
        
        <div className="bg-white">
            <Gallery 
            title="Galerija: Digitalizacija Mineralov" 
            subtitle="Digitalna reprezentacija Zoisove zbirke. Posebna pozornost na teksture in barvno pravilnost."
            items={ZOIS_MINERALS_GALLERY} 
            />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;