/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App() {
  useEffect(() => {
    // Disable scrolling during preloader
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <Preloader />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Languages />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

