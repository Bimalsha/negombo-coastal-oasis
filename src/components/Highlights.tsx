
import React from 'react';

const Highlights = () => {
  const highlights = [
    {
      title: 'Shopping Escapades',
      description: 'Explore local markets and boutique shops in vibrant Negombo',
      image: '/escapades.jpg'
    },
    {
      title: 'The Negombo Beach',
      description: 'Golden sands and crystal clear waters just minutes away',
      image: '/beach.webp'
    },
    {
      title: 'Muthurajawela Wetlands',
      description: 'Discover unique flora and fauna in this pristine ecosystem',
      image: '/muthurajawela.webp'
    },
    {
      title: 'Tuk Tuk Rides',
      description: 'Explore the most Unique tuk tuk ride around the negombo City',
      image: '/tuktuk.webp'
    },
    {
      title: 'Negombo Fish Market',
      description: 'Buy your own Fresh Fish and have us cook it for you!',
      image: '/fishmarket.webp'
    },
    {
      title: 'Negombo Dutch Fort',
      description: 'Delve into the history of Negombo',
      image: '/fort.jpg'
    },
  ];

  return (
    <section className="pb-16 lg:pt-8 bg-white">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {highlights.map((highlight, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                    className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full lg:h-96 h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                </div>
                <div className="bottom-0 left-0 right-0 py-6 pe-6">
                  <h3 className="text-xl font-t mb-2">{highlight.title}</h3>
                  <p className="text-sm opacity-90">{highlight.description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
