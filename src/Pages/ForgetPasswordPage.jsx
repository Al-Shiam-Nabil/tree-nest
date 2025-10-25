import React, { useContext } from "react";
import Container from "../Components/Container/Container";
import { AuthContext } from "../Context/AuthContext";

import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ForgetPasswordPage = () => {
  const { forgetEmail, resetPassword, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFogetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter your valid email.");
      return;
    }

    resetPassword(forgetEmail || email)
      .then(() => {
        toast.success("Reset password link send to your Email.");
        e.target.reset();
        window.open("https://mail.google.com/mail/u/0/", "target_blank");
        navigate("/log-in");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <>
      <title>GreenNest - Forget password</title>

      <Container className="grid place-items-center py-20 bg-gray-50">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl md:px-6">
          <div className="card-body">
            <h3 className="text-3xl font-semibold text-center">
              Forgot Password?
            </h3>
            <form onSubmit={handleFogetPassword}>
              <fieldset className="fieldset">
                <label className="label text-accent text-lg font-medium mt-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={forgetEmail}
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Email"
                  required
                />

                <button className="btn btn-secondary text-base mt-4">
                  Reset Password
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgetPasswordPage;
