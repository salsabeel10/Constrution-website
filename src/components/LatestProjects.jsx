import React from "react";
import construction from '../assets/products/construction.png'

const projects = [
  {
    title: "Hotel Ghook International",
    description:
      "Construction laborers are skilled workers who do much of the physically demanding labor at all kinds.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community Hospital",
    description:
      "Housing units authorized to be built by a building or zoning permit. Housing units authorized.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hotel International",
    description:
      "A security operations center (SOC) is a unit that deals with security issues on an organizational level.",
    image: construction,
  },
];

const categories = ["Residential", "Commercial", "Maintenance", "Renovation"];

const LatestProjects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section title */}
        <h2 className="text-2xl font-semibold mb-8">Latest Projects</h2>

        {/* Category buttons */}
        <div className="flex justify-center space-x-3 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-4 py-1 text-gray-700 border rounded-full hover:bg-orange-500 hover:text-white transition cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="text-orange-500 font-medium hover:underline cursor-pointer "
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="mt-10">
          <button className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-teal-600 transition cursor-pointer">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
