import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BusinessVerticals } from './components/BusinessVerticals';
import { EcommerceSection } from './components/EcommerceSection';  // Add this import
import { LocationsSection } from './components/LocationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BusinessVerticals />
      <EcommerceSection />  {/* Add this component */}
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;