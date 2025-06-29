
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProfileSection from '../components/ProfileSection';
import VisionMissionSection from '../components/VisionMissionSection';
import FacilitiesSection from '../components/FacilitiesSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProfileSection />
      <VisionMissionSection />
      <FacilitiesSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
