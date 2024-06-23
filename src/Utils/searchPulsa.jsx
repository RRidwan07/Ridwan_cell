import { useState } from "react";
import {
  AxisP,
  SmartfrenP,
  XlP,
  TelkomselP,
  IndosatP,
} from "../Components/Profider/Pulsa/pulsa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const isDisabled = searchTerm.length < 10;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSearch = (term) => {
    if (term.startsWith("0857") || term.startsWith("0858")) {
      return <IndosatP PP={searchTerm} blok={isDisabled} />;
    } else if (term.startsWith("0838") || term.startsWith("0831")) {
      return <AxisP PP={searchTerm} blok={isDisabled} />;
    } else if (term.startsWith("0852") || term.startsWith("0853")) {
      return <SmartfrenP PP={searchTerm} blok={isDisabled} />;
    } else if (term.startsWith("0811") || term.startsWith("0812")) {
      return <TelkomselP PP={searchTerm} blok={isDisabled} />;
    } else if (term.startsWith("0817") || term.startsWith("0818")) {
      return <XlP PP={searchTerm} blok={isDisabled} />;
    }
  };

  return (
    <div className="mt-10">
      {/* <input
        type="text"
        placeholder="Cari..."
        value={searchTerm}
        onChange={handleInputChange}
      /> */}

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
      <div className="mt-10">{handleSearch(searchTerm)}</div>
    </div>
  );
};
export default Search;
