import HomeCover from "../atoms/HomeCover";
import Navbar from "./Navbar";

const Dompet = () => {
  const Datas = [
    {
      name: "FreeFire",
    },
    {
      name: "Mobile_Legend",
    },
  ];
  return (
    <div>
      <Navbar
        providerName="Top Up Game"
        goBack="/"
        style2="text-black"
        style1="relative top-[-70px] z-10"
        style3="flex items-center justify-center mt-[-40px] "
      />
      {Datas.map((data, i) => (
        <HomeCover key={i} product={data.name} link="coverTopup" />
      ))}
    </div>
  );
};

export default Dompet;
