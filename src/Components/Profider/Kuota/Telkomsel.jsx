import { useState } from "react";
import Card from "../../../Utils/card";
import Data from "../../../assets/Data";

const Telkomsel = () => {
  const datas = Data.kuota[4].Telkomsel;
  const dataTitle = Data.pulsa[4].name;
  const [searchTerm, setSearchTerm] = useState("");
  //   const isDisabled = searchTerm.length < 10;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div
        className=" w-auto rounded-lg h-20 flex justify-center items-center mx-5"
        data-theme="wireframe"
      >
        <label className="input input-bordered flex items-center gap-2 mx-10">
          <input
            type="number"
            className="grow"
            placeholder="Search pulsa"
            onChange={handleInputChange}
            value={searchTerm}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {datas.map((data, i) => (
        <Card
          key={i}
          dataTop={data.title}
          dataBody={data.kuota}
          dataFooter={data.nominal}
          title={dataTitle}
          pp={searchTerm}
        />
      ))}
    </>
  );
};

export default Telkomsel;
