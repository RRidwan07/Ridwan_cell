import { useState } from "react";
import Cover from "../atoms/Cover/CoverPulsa";
import Navbar from "./Navbar";

const Pulsa = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [navbarTitle, setNavbarTitle] = useState("Pulsa ALL Operator");
  const [provider, setProvider] = useState("");
  const isDisabled = searchTerm.length < 10;

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  const handleSearch = (term) => {
    if (
      term.startsWith("0814") ||
      term.startsWith("0815") ||
      term.startsWith("0816") ||
      term.startsWith("0855") ||
      term.startsWith("0856") ||
      term.startsWith("0857") ||
      term.startsWith("0858") ||
      term.startsWith("62814") ||
      term.startsWith("62815") ||
      term.startsWith("62816") ||
      term.startsWith("62855") ||
      term.startsWith("62856") ||
      term.startsWith("62857") ||
      term.startsWith("62858")
    ) {
      setProvider("Indosat");
      setNavbarTitle("Indosat");
    } else if (
      term.startsWith("0838") ||
      term.startsWith("0831") ||
      term.startsWith("0832") ||
      term.startsWith("62831") ||
      term.startsWith("62838") ||
      term.startsWith("62832")
    ) {
      setProvider("Axis");
      setNavbarTitle("Axis");
    } else if (
      term.startsWith("0811") ||
      term.startsWith("0812") ||
      term.startsWith("0813") ||
      term.startsWith("0821") ||
      term.startsWith("0822") ||
      term.startsWith("0823") ||
      term.startsWith("0852") ||
      term.startsWith("0853") ||
      term.startsWith("0851") ||
      term.startsWith("62811") ||
      term.startsWith("62812") ||
      term.startsWith("62813") ||
      term.startsWith("62821") ||
      term.startsWith("62822") ||
      term.startsWith("62823") ||
      term.startsWith("62852") ||
      term.startsWith("62853") ||
      term.startsWith("62851")
    ) {
      setProvider("Telkomsel");
      setNavbarTitle("Telkomsel");
    } else if (
      term.startsWith("0881") ||
      term.startsWith("0882") ||
      term.startsWith("0883") ||
      term.startsWith("0884") ||
      term.startsWith("0885") ||
      term.startsWith("0886") ||
      term.startsWith("0887") ||
      term.startsWith("0888") ||
      term.startsWith("0889") ||
      term.startsWith("62881") ||
      term.startsWith("62882") ||
      term.startsWith("62883") ||
      term.startsWith("62884") ||
      term.startsWith("62885") ||
      term.startsWith("62886") ||
      term.startsWith("62887") ||
      term.startsWith("62888") ||
      term.startsWith("62889")
    ) {
      setProvider("Smartfren");
      setNavbarTitle("Smartfren");
    } else if (
      term.startsWith("0817") ||
      term.startsWith("0818") ||
      term.startsWith("0819") ||
      term.startsWith("0859") ||
      term.startsWith("0877") ||
      term.startsWith("0878") ||
      term.startsWith("62817") ||
      term.startsWith("62818") ||
      term.startsWith("62819") ||
      term.startsWith("62859") ||
      term.startsWith("62877") ||
      term.startsWith("62878")
    ) {
      setProvider("Xl");
      setNavbarTitle("Xl");
    } else {
      setProvider("");
      setNavbarTitle("Pulsa ALL Operator");
    }
  };

  return (
    <div className="">
      <Navbar
        providerName={navbarTitle}
        style2="text-black"
        style1="relative top-[-70px] z-10"
        style3="flex items-center justify-center mt-[-40px]"
      />
      <div
        className="w-auto rounded-lg h-20 flex justify-center items-center mx-5"
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

      <div className="mt-10">
        {provider && (
          <Cover
            providerName={provider}
            searchTerm={searchTerm}
            disabled={isDisabled}
          />
        )}
      </div>
    </div>
  );
};

export default Pulsa;
