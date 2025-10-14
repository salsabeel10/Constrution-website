import React from "react";
import acImg from "../assets/products/ac-1.png"; // replace with your actual image path
import sanitaryImg from "../assets/products/sanitry-2.png";
import electricalImg from "../assets/products/electric-3.png";

const Products = () => {
  return (
    <section className="py-16 bg-white font-montserrat">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          HVAC & MEP SERVICES
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Air Conditioning */}
          <div className="text-left">
            <img
              src={acImg}
              alt="Air Conditioning Installation & Maintenance"
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Air Conditioning Installation & Maintenance
            </h3>
            <button className="pt-3 group inline-flex items-center text-[#f7931e] font-semibold text-base hover:text-[#d87e13] transition-all duration-300">
              More Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 24"
                className="ml-3 w-16 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="0" y1="12" x2="110" y2="12" stroke="currentColor" />
                <polyline points="100,5 110,12 100,19" stroke="currentColor" />
              </svg>
            </button>
          </div>

          {/* Sanitary Installation */}
          <div className="text-left">
            <img
              src={sanitaryImg}
              alt="Sanitary Installation"
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Sanitary Installation
            </h3>
            <button className="mt-3 group inline-flex items-center justify-center border-2 border-[#f7931e] text-[#f7931e] font-semibold text-base px-5 py-2 rounded-full hover:bg-[#f7931e] hover:text-white transition-all duration-300 cursor-pointer">
                More Info
            </button>
          </div>

          {/* Electrical Works */}
          <div className="text-left">
            <img
              src={electricalImg}
              alt="Electrical Works (Fixtures Repairing & Maintenance)"
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Electrical Works <br />
              <span className="text-gray-700 text-base">
                (Fixtures Repairing & Maintenance)
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
