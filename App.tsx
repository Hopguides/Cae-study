import React from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import NarrativeSection from './components/NarrativeSection';
import KeyFeatures from './components/KeyFeatures';
import Gallery from './components/Gallery';
import Chatbot from './components/Chatbot';
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
        
        <div className="bg-hop-pastel pb-10 border-t border-orange-100">
            <KeyFeatures type="protagonist" />
            <Gallery 
            title="Galerija: Vizualizacija lika" 
            subtitle="Generirano iz JSON podatkovne baze. Prikaz ključnih trenutkov animacije."
            items={ZOIS_CHARACTER_GALLERY} 
            />
        </div>

        <div className="bg-white pb-10">
            <KeyFeatures type="multichannel" />
            <Gallery 
            title="Galerija: Digitalizacija zbirke" 
            subtitle="Digitalna reprezentacija mineralov. Posebna pozornost na teksture in barvno pravilnost."
            items={ZOIS_MINERALS_GALLERY} 
            />
        </div>

        <Chatbot />
        
        <HoursChart />
      </main>

      <Footer />
    </div>
  );
};

export default App;