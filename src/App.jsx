import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <SpeedInsights />
    </div>
  );
}

export default App;
