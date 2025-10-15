import React from "react";

const Experience = () => {
  return (
    <section className="bg-white py-5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Background shadow cards */}
          

          {/* Main image */}
          <img
            src="/living-room.png" // replace with your image path
            alt="Interior Design"
            className="relative rounded-2xl shadow-xl z-10 w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-104"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2">
          <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-3">
            Experiences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Deliver Quality And Reliability In Every Project
          </h2>
          <p className="text-gray-600 mb-6">
            From residential renovations to commercial fit-outs, we ensure
            professional workmanship, durable materials, and timely completion —
            giving you complete peace of mind.
          </p>
          <button className="text-orange-500 text-sm font-medium hover:underline flex items-center cursor-pointer">
            More Info
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
