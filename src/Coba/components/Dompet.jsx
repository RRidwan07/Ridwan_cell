import HomeCover from "../atoms/HomeCover";
import Navbar from "./Navbar";

const Dompet = () => {
  const Datas = [
    {
      name: "Dana",
    },
    {
      name: "Gopay",
    },
    {
      name: "Ovo",
    },
    {
      name: "Shopee_Pay",
    },
  ];
  return (
    <div>
      <Navbar
        providerName="Dompet Digital"
        goBack="/"
        style2="text-black"
        style1="relative top-[-70px] z-10"
        style3="flex items-center justify-center mt-[-40px] "
      />
      {Datas.map((data, i) => (
        <HomeCover key={i} product={data.name} link="coverDompet" />
      ))}
    </div>
  );
};

export default Dompet;
