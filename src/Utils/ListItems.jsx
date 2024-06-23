import {
  ProvAxis,
  ProvIndosat,
  ProvPulsa,
  ProvSmartfren,
  ProvTelkomsel,
  ProvTopup,
  ProvUangDigital,
  Provxl,
} from "../assets/images/images";

const ListItems = () => {
  const datas = [
    {
      id: 1,
      title: "Pulsa all",
      images: `${ProvPulsa}`,
    },
    {
      id: 2,
      title: "Axis",
      images: `${ProvAxis}`,
    },
    {
      id: 3,
      title: "Indosat",
      images: `${ProvIndosat}`,
    },
    {
      id: 4,
      title: "Telkomsel",
      images: `${ProvTelkomsel}`,
    },
    {
      id: 5,
      title: "Smartfren",
      images: `${ProvSmartfren}`,
    },
    {
      id: 6,
      title: "Xl",
      images: `${Provxl}`,
    },
    {
      id: 7,
      title: "Topup Game",
      images: `${ProvTopup}`,
    },
    {
      id: 8,
      title: "Uang Digital",
      images: `${ProvUangDigital}`,
    },
  ];
  return (
    <div className="flex  ml-6 my-5">
      <div className="grid grid-cols-3 gap-3">
        {datas.map((data, i) => (
          <div
            key={i}
            className="flex-col h-28 w-24 flex justify-center items-center"
          >
            <img
              className=" bg-cover bg-center h-[70px] w-20 rounded-full"
              src={data.images}
              alt=""
            />

            <p className="text-center mt-1 font-bold">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
