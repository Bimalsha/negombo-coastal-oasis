
import React from 'react';

const Highlights = () => {
  const highlights = [
    {
      title: 'Shopping Escapades',
      description: 'Explore local markets and boutique shops in vibrant Negombo',
      image: '/mask.jpg'
    },
    {
      title: 'The Negombo Beach',
      description: 'Golden sands and crystal clear waters just minutes away',
      image: '/beach.webp'
    },
    {
      title: 'Muthurajawela Wetlands',
      description: 'Discover unique flora and fauna in this pristine ecosystem',
      image: '/muthurajawela.jpg'
    }
  ];

  return (
    <section className="pb-16 lg:pt-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-sm opacity-90">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
