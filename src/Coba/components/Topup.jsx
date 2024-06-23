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
      <Navbar providerName="Top Up Game" goBack="/" />
      {Datas.map((data, i) => (
        <HomeCover key={i} product={data.name} link="coverTopup" />
      ))}
    </div>
  );
};

export default Dompet;
