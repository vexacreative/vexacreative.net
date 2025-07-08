
import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Pricing from '../components/home/Pricing';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
};

export default Home;
