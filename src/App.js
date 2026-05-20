import React from 'react';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import OurStudio from './sections/OurStudio';
import Services from './sections/Services';
import FeaturedWorks from './sections/FeaturedWorks';
import OurProcess from './sections/OurProcess';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <OurStudio />
        <Services />
        <FeaturedWorks />
        <OurProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
