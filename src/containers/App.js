import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';

import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';

import Footer from '../components/Footer/Footer';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <Banner />
      <Gallery />
      <Footer isScrolled={isScrolled}/>
    </div>
  );
}

export default App;
