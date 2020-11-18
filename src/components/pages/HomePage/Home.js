import React from 'react';
import HeroSection from '../../HeroSection';
import SolutionSection from '../../SolutionSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import Features from '../../Features';
import TechStach from '../../TechStack';
import DevelopmentTimeline from '../../DevelopmentTimeline';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Features />
      <SolutionSection />
      <DevelopmentTimeline />
      <TechStach />
    </>
  );
}

export default Home;
