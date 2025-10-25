import React, { useContext, useEffect } from "react";
import Container from "../Components/Container/Container";
import { AuthContext } from "../Context/AuthContext";
import { FaRegEdit, FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const MyProfile = () => {
  const { user, setUser, updateUserProfile, setLoading } =
    useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim().toUpperCase();
    const photo = e.target.photo.value.trim();
    if (!name && !photo) {
      toast.error("Please fill atleast one input.");
      return;
    }

    let myName = "";
    let myPhoto = "";

    if (name) {
      myName = name;
    } else {
      myName = user?.displayName;
    }

    if (photo) {
      myPhoto = photo;
    } else {
      myPhoto = user?.photoURL;
    }

    updateUserProfile({ displayName: myName, photoURL: myPhoto })
      .then(() => {
        toast.success("Profile updated successfully.");
        setUser({ ...user, displayName: myName, photoURL: myPhoto });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        toast.error("Update profile failed.");
        setLoading(false);
      });
  };

  return (
    <>
      <title>GreenNest - My Profile</title>
      <Container className="bg-gray-50 py-20">
        <section className="flex flex-col md:flex-row md:items-center gap-10 bg-white shadow py-10 px-4 sm:p-10 rounded-xl ">
          <div className=" shrink-0">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="rounded-full w-[150px] h-[150px] bg-gray-100"
            />
          </div>

          <div className="space-y-8  w-full">
            <div className="space-y-3 w-full">
              <h3 className="font-semibold text-2xl text-secondary">
                {user?.displayName}
              </h3>
              <p>
                <span className="font-semibold">Email : </span>
                {user?.email}
              </p>
            
            </div>

            <div className="space-y-3">
              <h3 className="flex gap-3 text-xl font-semibold items-center">
                Edit Profile <FaRegEdit className="text-primary"></FaRegEdit>
              </h3>
              <form onSubmit={handleUpdateProfile} className="max-w-[400px]">
                <input
                  type="text"
                  name="name"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full mb-3"
                  placeholder="Enter Your Name..."
                />

                <input
                  type="text"
                  name="photo"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Enter PhotoURL..."
                />

                <button className="btn btn-primary text-white border-none outline-none mt-4">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default MyProfile;
