import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for loader to finish
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Loader />
      {!loading && (
        <>
          <Navbar />
          <main className="content">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
