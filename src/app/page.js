"use client";
import React from 'react';
import HeroBanner from '@/components/features/heroBanner';
import WelcomeSection from '@/components/features/welcomeSection';
import dynamic from "next/dynamic";

// Import map dengan dynamic dan ssr: false supaya hanya di client
const KantorMap = dynamic(() => import("@/components/features/mapKantor"), {
  ssr: false,
});

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      <HeroBanner />
      <WelcomeSection />
      <KantorMap />
    </div>
  );
};

export default LandingPage;
