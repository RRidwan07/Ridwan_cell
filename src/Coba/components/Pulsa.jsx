import { useState } from "react";
import Cover from "../atoms/Cover/CoverPulsa";
import Navbar from "./Navbar";

const Pulsa = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [navbarTitle, setNavbarTitle] = useState("Pulsa ALL Operator");
  const [provider, setProvider] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  const handleSearch = (term) => {
    if (term.startsWith("0857") || term.startsWith("0858")) {
      setProvider("Indosat");
      setNavbarTitle("Indosat");
    } else if (term.startsWith("0838") || term.startsWith("0831")) {
      setProvider("Axis");
      setNavbarTitle("Axis");
    } else if (term.startsWith("0852") || term.startsWith("0853")) {
      setProvider("Telkomsel");
      setNavbarTitle("Telkomsel");
    } else if (term.startsWith("0882") || term.startsWith("0883")) {
      setProvider("Smartfren");
      setNavbarTitle("Smartfren");
    } else if (term.startsWith("0817") || term.startsWith("0818")) {
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
        {provider && <Cover providerName={provider} searchTerm={searchTerm} />}
      </div>
    </div>
  );
};

export default Pulsa;
