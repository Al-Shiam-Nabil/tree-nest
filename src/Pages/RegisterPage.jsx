import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Container from "../Components/Container/Container";
import { AuthContext } from "../Context/AuthContext";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const { createUser, googleLogin, updateUserProfile, setLoading, user } =
    useContext(AuthContext);
  const [showpassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
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

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim().toUpperCase();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error("Please enter valid password");
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    } else {
      setError("");
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            e.target.reset();
            toast.success("User create successfully.");
            navigate("/");
            setLoading(false);
          })
          .catch((error) => {
            console.log(error.code);
            toast.error(error.code);
            setLoading(false);
          });
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
        console.log(error.code);
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <>
      <title>GreenNest - Register</title>
      <Container className="grid place-items-center py-20 bg-gray-50 ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl md:p-6">
          <div className="card-body">
            <h3 className="text-3xl font-semibold text-center">Sign Up</h3>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/*name */}
                <label className="label text-accent text-lg font-medium mt-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Name"
                  required
                />

                {/* email */}
                <label className="label text-accent text-lg font-medium mt-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Email"
                  required
                />

                {/* photo */}
                <label className="label text-accent text-lg font-medium mt-2">
                  photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Photo URL"
                  required
                />

                {/* password */}
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
                {error && <p className="text-sm text-red-500">{error}</p>}

                <button className="btn btn-primary  text-base mt-4">
                  Register
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
              Already have an account? please{" "}
              <Link to="/log-in" className="text-blue-700 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
