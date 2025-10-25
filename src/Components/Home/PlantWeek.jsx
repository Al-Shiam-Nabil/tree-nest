import React from 'react';
import Container from '../Container/Container';
import plantWeek from '../../assets/plant-week.jpeg'

const PlantWeek = () => {
    return (
       <Container className="bg-green-50 py-16 px-6 md:px-12">
         <section >
      <div className="max-w-6xl mx-auto text-center">
  
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Plant of the Week
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover our featured plant of the week — handpicked by our green
          experts for its beauty, benefits, and easy care!
        </p>

      
        <div className="bg-white rounded-3xl shadow-lg p-8 md:flex items-center justify-center gap-10 hover:shadow-xl transition duration-300">
      
          <img
            src={plantWeek}
            alt="Snake Plant"
            className="w-full md:w-1/3 rounded-2xl object-cover mx-auto mb-6 md:mb-0"
          />

 
          <div className="text-left md:text-left">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Snake Plant (Sansevieria)
            </h3>
            <p className="text-gray-600 mb-4">
              A stylish and low-maintenance plant that thrives in low light and
              purifies your indoor air. Perfect for beginners and busy plant
              lovers!
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 flex-wrap">
              <span> Water: Once every 2 weeks</span>
              <span>Light: Low to Medium</span>
              <span>Care: Easy</span>
            </div>

            <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
       </Container>
    );
};

export default PlantWeek;