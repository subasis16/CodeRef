import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-ossium-darker text-white overflow-x-hidden selection:bg-ossium-accent selection:text-ossium-darker">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
