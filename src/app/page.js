"use client";
import React from 'react';
import HeroBanner from '@/components/features/heroBanner';
import WelcomeSection from '@/components/features/welcomeSection';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      <HeroBanner/>
      <WelcomeSection/>
    </div>
  );
};

export default LandingPage;
