import React from "react";
import { toast } from "react-toastify";

const ToyDetailsForm = () => {
  const handleTryNow = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="grid place-items-center mt-16">
      <div className="card bg-transparent w-full max-w-lg shrink-0  md:px-6">
        <div className="card-body">
          <h3 className="font-semibold text-2xl text-center mb-4">
            Book Consultation
          </h3>
          <form onSubmit={handleTryNow}>
            <fieldset className="fieldset">
              <input
                type="email"
                name="email"
                className="input shadow-none bg-gray-200 border-none outline-none w-full mb-2"
                placeholder="Enter Your Email..."
                required
              />

              <input
                type="name"
                name="name"
                className="input shadow-none bg-gray-200 border-none outline-none w-full"
                placeholder="Enter Your Name..."
                required
              />

              <button className="btn btn-primary text-base  mt-4">
                Book Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsForm;
