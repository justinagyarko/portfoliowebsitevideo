import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UploadModal from './components/UploadModal';

function App() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white">
      <Header onUploadClick={() => setIsUploadOpen(true)} />
      <Hero />
      <ProjectGallery />
      <About />
      <Contact />
      <Footer />
      <UploadModal 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
      />
    </div>
  );
}

export default App;