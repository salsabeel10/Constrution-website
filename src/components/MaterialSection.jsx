import React from "react";


const MaterialsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-3">
            Materials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Built With Premium-Grade Materials For Lasting Results
          </h2>
          <p className="text-gray-600 mb-6">
            Whether it’s flooring, painting, or carpentry, we source top-quality materials 
            to ensure safety, durability, and a polished finish that stands the test of time.
          </p>
          <button className="text-orange-500 text-sm font-medium hover:underline flex items-center">
            More Info
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* Right: Image Collage */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Background Card */}
          <div className="absolute top-8 right-0 w-[85%] h-[85%] bg-gray-50 rounded-2xl z-0"></div>

          {/* Image Grid */}
          <div className="relative grid grid-cols-2  z-10">
            {/* Small image 1 */}
            <img
              src="./mat-3.png"
              alt="Interior chair"
              className="rounded-xl shadow-xxl object-cover w-40 h-40 md:w-48 md:h-48"
            />
            {/* Large image */}
            <img
              src="./mat-1.png"
              alt="Dining room"
              className="rounded-xl mt-18 shadow-xxl object-cover row-span-2 w-48 h-96 md:w-72 md:h-[380px]"
            />
            {/* Small image 2 */}
            <img
              src="./mat-2.png"
              alt="Modern sofa"
              className="rounded-xl mt-6 shadow-xxl object-cover w-40 h-40 md:w-48 md:h-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
