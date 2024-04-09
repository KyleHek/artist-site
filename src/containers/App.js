import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';
import HomeSection from '../components/HomeSection/HomeSection';
import GallerySection from '../components/GallerSection/GallerySection';
import BlogSection from '../components/BlogSection/BlogSection'; 
import AboutSection from '../components/AboutSection/AboutSection';
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
      <div className='pt-24'>
        <Routes >
          <Route path="/" element={<HomeSection />} />  
          <Route path="/home" element={<HomeSection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
      </div>
      <Footer isScrolled={isScrolled}/>
    </div>
  );
}

export default App;
