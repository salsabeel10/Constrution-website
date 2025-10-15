import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../data/testimonials";
import { useMediaQuery } from "../hooks/useMediaQuery";


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const cardsPerPage = isMobile ? 1 : 3;

  const nextSlide = () => {
  if (currentIndex < testimonials.length - cardsPerPage) {
    setCurrentIndex(currentIndex + 1);
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 text-center">
        {/* Subtitle */}
        <p className="text-sm font-semibold text-orange-500 tracking-widest uppercase">
          Testimonials
        </p>

        {/* Title */}
        <h2 className="text-3xl font-bold mt-2 mb-12">Our Client Reviews</h2>

        {/* Testimonials wrapper */}
        <div className="relative flex justify-center items-center">
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-10 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition cursor-pointer disabled:opacity-40"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>

          {/* Cards container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
            {visibleTestimonials.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Background image */}
                <img
                  src={item.bg}
                  alt="Background"
                  className="w-full object-cover"
                />

                {/* Overlay card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white rounded-t-3xl p-6 shadow-md">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full border-2 border-white -mt-10 mb-2 object-cover"
                    />
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{item.role}</p>
                    <p className="text-gray-700 text-sm mb-4 italic">
                      “{item.review}”
                    </p>
                    <div className="flex space-x-1 text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition cursor-pointer disabled:opacity-40"
            disabled={currentIndex + cardsPerPage >= testimonials.length}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
