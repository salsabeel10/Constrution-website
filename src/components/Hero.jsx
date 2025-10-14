import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#001126] text-white">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Complete Contracting & Maintenance Solutions In Dubai
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            From HVAC & MEP to interior, exterior, and facility works — we do it all.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#00aee6] transition">
              Get Quote →
            </button>
            <button className="border border-[#00BFFF] text-[#00BFFF] font-semibold px-6 py-3 rounded-md hover:bg-[#00BFFF] hover:text-black transition">
              Contact Us →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/worker.png" // replace with your image path
            alt="Construction Worker"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
