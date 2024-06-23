import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

const Navbar = ({ providerName, style1, style2, style3 }) => {
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
      <div className={style1}>
        <div className="ml-3">
          <GoHomeFill onClick={goBack} size={35} className={style2} />
        </div>
        <div className={style3}>
          <div className="stack">
            <div className="flex justify-center items-center border border-base-content card bg-base-100 h-12">
              <div className="card-body font-bold text-xl">{providerName}</div>
            </div>
            <div className="flex justify-center items-center border border-base-content card bg-base-100 h-12">
              <div className="card-body font-bold text-xl">{providerName}</div>
            </div>
            <div className="flex justify-center items-center border border-base-content card bg-base-100 h-12">
              <div className="card-body font-bold text-xl">{providerName}</div>
            </div>
            <div className="flex justify-center items-center border border-base-content card bg-base-100 h-12">
              <div className="card-body font-bold text-xl">{providerName}</div>
            </div>
            <div className="flex justify-center items-center border border-base-content card bg-base-100 h-12">
              <div className="card-body font-bold text-xl">{providerName}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  providerName: PropTypes.string.isRequired,
  style1: PropTypes.string.isRequired,
  style2: PropTypes.string.isRequired,
  style3: PropTypes.string.isRequired,
};

export default Navbar;
