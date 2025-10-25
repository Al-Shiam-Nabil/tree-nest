import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const PopularCard = ({ tree }) => {
  const {  plantId, plantName, rating, availableStock, price,  image } = tree;

  return (
    <div className=" p-5 rounded-xl space-y-3 bg-white shadow">
      <img
        src={image}
        alt={plantName}
        className="w-full h-[200px] object-cover bg-gray-300 rounded-xl"
      />
      <h3 className="font-semibold">{plantName}</h3>
      <div>
        <div className="space-y-1">
          <h3>Price : $ {price}</h3>
          <h3>Stock: {availableStock}</h3>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => {
          if (index < Math.floor(rating)) {
            return <FaStar key={index} className="text-warning"></FaStar>;
          }
          return <FaStar key={index} className="text-gray-400"></FaStar>;
        })}
      </div>

      <Link
        to={`/plant-details/${plantId}`}
        className="btn btn-primary text-secondary w-full hover:bg-secondary hover:text-white border-none outline-none shadow-none"
      >
        View Details
      </Link>
    </div>
  );
};

export default PopularCard;
