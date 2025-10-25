import { useContext } from "react";
import Container from "../Container/Container";
import { Link,  useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import LoadingPage from "../Loading/LoadingPage";
import ActiveLink from "./ActiveLink";

import logo from '../../assets/logo.png'

const Navbar = () => {
  const { user, signOutUser, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("You have logged out successfully.");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  const links = (
    <>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/plants">Plants</ActiveLink>
      <ActiveLink to="/my-profile">My Profile</ActiveLink>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-xs ">
      <Container className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content z-10 bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl sm:text-2xl font-semibold flex flex-col items-center">
          <img src={logo} alt="logo" className="w-14 h-14"/>
          <h3 className="hidden lg:block"><span className="text-primary">Green</span>Nest</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-5 px-1">{links}</ul>
        </div>
        <div className="navbar-end relative z-10">
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <div className="dropdown dropdown-hover relative">
                <div tabIndex={0} className=" m-1">
                  {" "}
                  <img
                    src={user?.photoURL}
                    alt="user image"
                    className="w-10 h-10 object-cover rounded-full cursor-pointer bg-gray-200"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-gray-600 text-white rounded-box z-1 w-52 p-4 shadow-sm absolute right-0"
                >
                  <li className="text-xs mb-3">{user?.displayName}</li>
                  <li><button
                onClick={handleLogOut}
                className="btn btn-sm  btn-primary text-white"
              >
                Log Out
              </button></li>
                </ul>
              </div>

            
            </div>
          ) : (
            

            <>
            <Link to="/log-in" className="btn btn-sm sm:btn-md btn-primary text-white mr-3">
              Log In
            </Link>
            <Link to="/register" className="btn btn-sm sm:btn-md btn-primary text-white">
             Register
            </Link>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
