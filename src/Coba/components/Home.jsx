import { useNavigate } from "react-router-dom";
import HomeCover from "../atoms/HomeCover";
import { FcNext } from "react-icons/fc";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  const navigate = useNavigate();
  const Datas = [
    {
      name: "Indosat",
    },
    {
      name: "Axis",
    },
    {
      name: "Xl",
    },
    {
      name: "Smartfren",
    },
    {
      name: "Telkomsel",
    },
  ];

  return (
    <div>
      <Navbar
        providerName="Ridwan Cell"
        style2="hidden"
        style1="relative top-[-45px] z-10"
        style3="flex items-center justify-center mt-[-30px]"
      />
      <div
        className="border-y-[1px] border-black h-auto w-full px-5 py-5 flex justify-between items-center"
        onClick={() => navigate("/pulsa")}
      >
        <h3 className="font-bold text-xl">Pulsa All Operator</h3>
        <FcNext size={24} />
      </div>
      {Datas.map((data, i) => (
        <HomeCover key={i} product={data.name} link="cover" />
      ))}
      <div
        className="border-y-[1px] border-black h-auto w-full px-5 py-5 flex justify-between items-center"
        onClick={() => navigate("/dompet")}
      >
        <h3 className="font-bold text-xl">Dompet Digital</h3>
        <FcNext size={24} />
      </div>
      <div
        className="border-y-[1px] border-black h-auto w-full px-5 py-5 flex justify-between items-center"
        onClick={() => navigate("/topup")}
      >
        <h3 className="font-bold text-xl">Top Up Game</h3>
        <FcNext size={24} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
