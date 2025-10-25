import { FaPinterest, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "../Container/Container";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-20 text-white">
      <Container>
        <div className=" text-sm grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-2 pb-[50px] border-b border-gray-600">
      

          <div className="space-y-3  md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer"><Link to="/">About</Link></li>
              <li className="hover:underline cursor-pointer"><Link to='/'>Contact</Link></li>
              <li className="hover:underline cursor-pointer"><Link to="/">Privacy & Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                Products & Services
              </li>
              <li className="hover:underline cursor-pointer">
                Customer Stories
              </li>
              <li className="hover:underline cursor-pointer">Download Apps</li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Information</h3>
            <ul className="space-y-2">
               <li className="hover:underline cursor-pointer">Products & Services</li>
              <li className="hover:underline cursor-pointer">Customer Stories</li>
              <li className="hover:underline cursor-pointer">Download Apps</li>
            </ul>
          </div>

          <div className=" space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Social Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:underline cursor-pointer">
                <FaSquareInstagram /> Instagram
              </li>
            
              <li className="flex items-center gap-2 hover:underline cursor-pointer">
                <FaFacebookSquare /> Facebook
              </li>

              <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FaPinterest></FaPinterest> Pinterest
              </li>
           
            </ul>
          </div>
        </div>

        <p className="text-center text-sm py-7">
        © 2025 GreenNest. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
