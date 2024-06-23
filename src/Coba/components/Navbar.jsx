import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

const Navbar = ({ providerName }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // Ini akan membawa pengguna kembali ke halaman sebelumnya
  };

  return (
    <>
      <div className="">
        <div className="flex overflow-hidden">
          <div className="w-16 h-[90px] bg-orange-400 rounded-b-full"></div>
          <div className="w-16 h-[90px] bg-slate-400 rounded-b-full"></div>
          <div className="w-16 h-[90px] bg-orange-400 rounded-b-full"></div>
          <div className="w-16 h-[90px] bg-slate-400 rounded-b-full"></div>
          <div className="w-16 h-[90px] bg-orange-400 rounded-b-full"></div>
          <div className="w-16 h-[90px] bg-slate-400 rounded-b-full"></div>
          <div className="w-16 h-[90px] bg-orange-400 rounded-b-full"></div>
        </div>
      </div>
      <div className="relative top-[-70px] z-10">
        <div className="ml-3">
          <GoHomeFill onClick={goBack} size={45} className=" text-black " />
        </div>
        <div className="flex items-center justify-center mt-[-40px]">
          <div className="">
            <a className="text-xl font-bold ">{providerName}</a>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  providerName: PropTypes.string.isRequired,
};

export default Navbar;
