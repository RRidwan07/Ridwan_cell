// import PropTypes from "prop-types";
import Data from "../../../assets/Data";
import { useParams } from "react-router-dom";
import Popup from "../Popup";
import Card from "../Card";
import { useState } from "react";
import Navbar from "../../components/Navbar";

const Cover = () => {
  const { providerName } = useParams();
  const provider = Data.kuota.find(
    (provider) => provider.name === providerName
  );

  const datas = provider ? provider[providerName] : [];

  const [popup, setPopup] = useState(null);

  const handleClick = (product) => {
    setPopup(product);
  };

  const handleClose = () => {
    setPopup(null);
  };

  const [searchTerm, setSearchTerm] = useState("");
  //   const isDisabled = searchTerm.length < 10;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <Navbar providerName={providerName} />
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
        <Card key={i} product={data} onClick={handleClick} />
      ))}
      <Popup product={popup} onClose={handleClose} nomer={searchTerm} />
    </div>
  );
};
// Cover.propTypes = {
//   Datas: PropTypes.array.isRequired,
// };

export default Cover;
