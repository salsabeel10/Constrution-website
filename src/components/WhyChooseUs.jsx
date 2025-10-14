import React, { useState } from "react";

const WhyChooseUs = () => {
  const [expanded, setExpanded] = useState(null);

  const cards = [
    {
      title: "Experienced Professionals",
      short:
        "Our certified engineers and skilled technicians bring years of experience in HVAC, MEP, interior, and exterior works ...",
      full:
        "Our certified engineers and skilled technicians bring years of experience across diverse projects — from residential villas to large commercial facilities. We combine technical expertise with precision workmanship to ensure every job is completed to the highest standards.",
    },
    {
      title: "Quality & Safety Assured",
      short:
        "We follow Dubai’s strict building standards and international safety practices, using only top-grade materials ...",
      full:
        "We strictly adhere to Dubai Municipality regulations and international best practices for safety and quality. Every project undergoes rigorous inspection and testing, ensuring durability, compliance, and peace of mind for our clients.",
    },
    {
      title: "On-Time Project Delivery",
      short:
        "We plan, execute, and deliver every project on schedule. Our dedicated project management team ensures ...",
      full:
        "We take timelines seriously. Our project management team uses detailed scheduling and continuous supervision to deliver work efficiently without compromising on quality. Whether it’s a small maintenance task or a full renovation, we stay on track and within scope.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Left title */}
          <div className="md:w-1/4 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why <br /> Choosing Us
            </h2>
          </div>

          {/* Right content columns */}
          <div className="md:w-3/4 grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border-t-4 border-orange-500 pt-6 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {card.title}
                </h3>

                {/* Expandable text container */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded === index ? "max-h-60" : "max-h-16"
                  }`}
                >
                  <p className="text-gray-600 text-sm">
                    {expanded === index ? card.full : card.short}
                  </p>
                </div>

                {/* Button */}
                <button
                  className="mt-3 text-orange-500 text-sm font-medium hover:underline flex items-center cursor-pointer"
                  onClick={() =>
                    setExpanded(expanded === index ? null : index)
                  }
                >
                  {expanded === index ? "Show Less" : "More Info"}
                  <span className="ml-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
