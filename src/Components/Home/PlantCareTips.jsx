import React from "react";
import Container from "../Container/Container";
import { IoWaterSharp } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";
import { PiTreePalmFill } from "react-icons/pi";

const PlantCareTips = () => {
  return (
    <Container className="bg-green-50 py-16 px-6 md:px-12">
      <section>
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Plant Care Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Keep your plants healthy and happy with these simple care tips for
            watering, sunlight, and fertilizing.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-center  inline-block" ><IoWaterSharp className="text-6xl mb-1 text-blue-400 " /></div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Watering Tips
              </h3>
              <p className="text-gray-600">
                Water your plants when the top inch of soil feels dry. Avoid
                overwatering — most houseplants prefer slightly dry soil over
                soggy roots.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="inline-block text-center mb-1"><FaSun className="text-6xl text-yellow-300"/></div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Sunlight Tips
              </h3>
              <p className="text-gray-600">
                Place your plants in bright, indirect sunlight. Avoid direct
                harsh rays, especially during midday, to prevent leaf burn.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-center inline-block mb-1"><PiTreePalmFill className="text-6xl text-green-600" /></div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Fertilizing Tips
              </h3>
              <p className="text-gray-600">
                Feed your plants once a month during the growing season using a
                balanced, water-soluble fertilizer. Avoid fertilizing in winter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PlantCareTips;
