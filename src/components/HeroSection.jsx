import React from "react";


const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-top bg-no-repeat text-white pt-30 pb-15"
      style={{ backgroundImage: "url('./hero_2.png')" }} // background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 flex flex-col items-start justify-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 max-w-2xl">
          Complete Contracting & Maintenance Solutions In Dubai
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-xl">
          From HVAC & MEP to interior, exterior, and facility works — we do it all.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-white hover:text-black  transition cursor-pointer">
            Get Quote →
          </button>
          <button className="border border-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black hover:border-transparent transition cursor-pointer">
            Contact Us →
          </button>
        </div>
      </div>
        
    </section>
  );
};

export default HeroSection;
