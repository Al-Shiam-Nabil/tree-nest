import React from "react";
import Container from "../Container/Container";

import expart1 from '../../assets/expart1.jpg'
import expart2 from '../../assets/expart2.jpg'
import expart3 from '../../assets/expart3.jpg'
import expart4 from '../../assets/expart4.jpg'

const GreenExpart = () => {
  return (
    <Container className="bg-white py-16 px-6 md:px-12">
      <section>
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Green Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our plant specialists are here to help you nurture a thriving green
            space with expert advice on care, maintenance, and growth.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-green-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <img
                src={expart1}
                alt="Expert 1"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Olivia Green
              </h3>
              <p className="text-gray-600 text-sm">Indoor Plant Specialist</p>
            </div>

            <div className="bg-green-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <img
                src={expart2}
                alt="Expert 2"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Liam Woods</h3>
              <p className="text-gray-600 text-sm">Soil & Nutrition Expert</p>
            </div>

            <div className="bg-green-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <img
                src={expart3}
                alt="Expert 3"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Ava Bloom</h3>
              <p className="text-gray-600 text-sm">Flowering Plant Advisor</p>
            </div>

            <div className="bg-green-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <img
                src={expart4}
                alt="Expert 4"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Noah Leaf</h3>
              <p className="text-gray-600 text-sm">
                Outdoor Gardening Specialist
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default GreenExpart;
