import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "../Components/Container/Container";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";

const LoginPage = () => {
  const { signInUser, googleLogin, setForgetEmail, setLoading, user } =
    useContext(AuthContext);
  const [showpassword, setShowPassword] = useState(false);

  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (user) {
      navigate(location?.state ? location?.state : "/");
      return;
    }
  }, [user, location?.state, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    if (user) {
      toast.error("You already logged in.");
      e.target.reset();
      return;
    }

    signInUser(email, password)
      .then(() => {
        toast.success("You have logged in successfully.");
        navigate(location?.state ? location?.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    if (user) {
      toast.error("You already logged in.");

      return;
    }

    googleLogin()
      .then(() => {
        toast.success("You have logged in successfully.");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
        setLoading(false);
      });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    setForgetEmail(emailRef.current.value);
    navigate("/forget-password");
  };

  return (
    <>
      <title>GreenNest - Log in</title>
      <Container className="grid place-items-center py-20 bg-gray-50">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl md:px-6">
          <div className="card-body">
            <h3 className="text-3xl font-semibold text-center">Log In</h3>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label text-accent text-lg font-medium mt-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Email"
                  required
                />
                <label className="label text-accent text-lg font-medium mt-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showpassword ? "text" : "password"}
                    name="password"
                    className="input bg-gray-100 shadow-none border-none outline-none w-full"
                    placeholder="Password"
                    required
                  />

                  <div
                    onClick={() => setShowPassword(!showpassword)}
                    className="absolute right-2 top-2 text-2xl z-20 cursor-pointer"
                  >
                    {showpassword ? <IoEyeOff></IoEyeOff> : <IoMdEye></IoMdEye>}
                  </div>
                </div>
                <div>
                  <a onClick={handleForgetPassword} className="link link-hover">
                    Forgot password?
                  </a>
                </div>
                <button className="btn btn-primary text-base  mt-4">
                  Log in
                </button>
              </fieldset>
            </form>

            <p className="text-center">or</p>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-center mt-3">
              Don't have an account? please{" "}
              <Link to="/register" className="text-blue-700 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
