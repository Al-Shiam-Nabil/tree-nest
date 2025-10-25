import React from "react";
import { FaStar } from "react-icons/fa6";

const ToyDetailsCard = ({ findDetails }) => {
  const {  plantName, rating, availableStock, price, image ,category,description,providerName} =findDetails;
  return (
    <div className=" p-5 rounded-xl  bg-white shadow flex flex-col justify-start  gap-8">
      <img
        src={image}
        alt={plantName}
        className="w-[500px] h-full object-cover bg-gray-300 rounded-xl"
      />

      <div className="space-y-3 w-full flex flex-col lg:justify-between">
        <div className="flex justify-start items-center gap-x-5 gap-y-2 flex-wrap">
          <h3 className="font-semibold text-lg">{plantName}</h3>

          <div className="badge badge-soft badge-primary">{category}</div>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => {
            if (index < Math.floor(rating)) {
              return <FaStar key={index} className="text-warning"></FaStar>;
            }
            return <FaStar key={index} className="text-gray-400"></FaStar>;
          })}
        </div>

        <div>
          <div className="spy-1 flex gap-x-5 gap-y-1 flex-wrap justify-between max-w-[300px] ">
            <h3>
              <span className="font-semibold">Price :</span> ${price}
            </h3>
            <h3>
              <span className="font-semibold">Stock :</span>{" "}
              {availableStock}
            </h3>
          </div>
        </div>

        <p>
          <span className="font-semibold">Description : </span>
          {description}
        </p>

        <div>
          <h3 className="font-bold text-lg text-primary">Provider Information</h3>
          <p>
            <span className="font-semibold">Name:</span> {providerName}
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
