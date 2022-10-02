import { useEffect, useState } from "react";
import HeroSection from "../components/homePage/HeroSection";
import Redbubble from "../components/redbubbleSection/Redbubble";
import StepsSections from "../components/homePage/StepsSections";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StepsSections />
    </div>
  );
}
