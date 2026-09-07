import { FaCartPlus, FaSearch } from "react-icons/fa";
import Logo from "../assets/nav-logo.png";

const Navber = () => {
  return (
    <>
      <nav className="container mx-auto px-4 flex justify-between gap-2 py-2.5 ">
        <img src={Logo} alt="" className="w-25 h-11.25" />

        <ul className="flex justify-between gap-4 text-[20px]">
          <li>Product</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>

        <div className="flex items-center justify-between gap-4 text-[20px]">
          <FaSearch />
          <FaCartPlus />
          <button>Login</button>
          <button className="bg-[#179800] px-3 py-1 text-white rounded-md">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navber;
