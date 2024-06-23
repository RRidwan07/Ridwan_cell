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
      <Navbar providerName="Dompet Digital" goBack="/" />
      {Datas.map((data, i) => (
        <HomeCover key={i} product={data.name} link="coverDompet" />
      ))}
    </div>
  );
};

export default Dompet;
