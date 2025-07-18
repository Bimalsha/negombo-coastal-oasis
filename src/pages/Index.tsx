
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
import Greating from "@/components/Greating.tsx";
import Accommodation from "@/pages/Accommodation.tsx";
import Accommodationhero from "@/components/Accommodationhero.tsx";

import ExperienceSection from "@/components/ExperienceSection.tsx";
import ReviewSlider from "@/components/ReviewSlider.tsx";
import AwardsSection from "@/components/AwardsSection.tsx";
import Banner from "@/components/Banner.tsx";
import Why from "@/components/Why.tsx";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
        <Greating/>
      <Features />
        <Accommodationhero/>
      <ExperienceSection/>
      <Highlights />
        <Banner/>
<ReviewSlider/>
        <Why/>
      <Footer />
    </div>
  );
};

export default Index;
