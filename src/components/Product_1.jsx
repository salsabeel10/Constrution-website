import React from 'react'
import img from '../assets/products/electric-4.jpeg'

const Product_1 = () => {
  const cards = [
    {
      title: "Lorem Ipsum is simply do text of the printing and",
      link: "More ...",
    },
    {
      title: "Lorem Ipsum is simply do text of the printing and",
      link: "More ...",
    },
    {
      title: "Lorem Ipsum is simply do text of the printing and",
      link: "More ...",
    },
  ];

  return (
    <section className="py-16 bg-white font-montserrat">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#6b3e00] mb-10">
          Simpily Dummy
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md shadow-md group"
            >
              <img
                src={img}
                alt="Service"
                className="w-full h-[32rem] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/10 to-transparent flex flex-col justify-end p-6">
                <p className="text-white text-base mb-3 leading-snug">
                  {card.title}
                </p>
                <a
                  href="#"
                  className="text-sm text-white font-medium inline-flex items-center gap-1 hover:underline"
                >
                  {card.link} <span className="text-lg">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product_1