import React from "react";
import HeroSection from "../../components/HeroSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import Experience from "../../components/Experience";
import MaterialsSection from "../../components/MaterialSection";
import LatestProjects from "../../components/LatestProjects";
import Testimonials from "../../components/Testimonials";

const App = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <Experience />
      <MaterialsSection />
      <LatestProjects />
      <Testimonials />
    </div>
  );
};

export default App;
