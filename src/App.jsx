import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProcessFlow from './components/ProcessFlow';
import SuccessStories from './components/SuccessStories';
import Schools from './components/Schools';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProcessFlow />
        <SuccessStories />
        <Schools />
      </main>
      <Footer />
    </div>
  );
}

export default App;
