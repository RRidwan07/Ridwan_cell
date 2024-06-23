import { useNavigate } from "react-router-dom";
import HomeCover from "../atoms/HomeCover";
import { FcNext } from "react-icons/fc";
import Navbar from "./Navbar";
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
      <Navbar providerName="Home Page" />
      {Datas.map((data, i) => (
        <HomeCover key={i} product={data.name} link="cover" />
      ))}
      <div
        className="bg-slate-500 h-auto w-full px-5 py-5 flex justify-between items-center"
        onClick={() => navigate("/dompet")}
      >
        <h3 className="font-bold text-xl">Dompet Digital</h3>
        <FcNext size={24} />
      </div>
      <div
        className="bg-slate-500 h-auto w-full px-5 py-5 flex justify-between items-center"
        onClick={() => navigate("/topup")}
      >
        <h3 className="font-bold text-xl">Top Up Game</h3>
        <FcNext size={24} />
      </div>
    </div>
  );
};

export default Home;
