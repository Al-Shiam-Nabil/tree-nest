import React from "react";
import Container from "../Components/Container/Container";

import errorImage from "../assets/error.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <title>GreenNest - Error</title>
      <Container className="bg-gray-50 h-screen grid place-items-center py-10">
        <div className="text-center">
          <img
            src={errorImage}
            alt="Error image"
            className=" mb-2"
          />
          <h2 className="font-semibold text-2xl sm:text-3xl">Opps ! Page Not Found.</h2>
          <p className="mt-2 mb-3">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-secondary hover:btn-primary outline-none border-none"
          >
            Go Back
          </button>
        </div>
      </Container>
    </>
  );
};

export default ErrorPage;
