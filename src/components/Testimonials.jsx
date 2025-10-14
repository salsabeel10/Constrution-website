import React from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example images — replace these with your own imports or URLs
import client1 from "../assets/clients/client1.png";


const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    review:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    image: client1,
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    review:
      "Makasih Panto, aku sekarang berasa tinggal di apartemen, karena barang-barang terlihat mewah",
    image: client1,
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    review:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    image: client1,
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const Testimonials = () => {
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
        <div className="relative flex justify-center items-center space-x-6">
          {/* Left arrow */}
          <button className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition">
            <FaChevronLeft />
          </button>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Background image */}
                <img
                  src={item.bg}
                  alt="Background"
                  className="w-full h-72 object-cover"
                />

                {/* Overlay card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 shadow-md">
                  <div className="flex flex-col items-center">
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
          <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
