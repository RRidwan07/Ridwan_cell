// import PropTypes from "prop-types";
import Data from "../../../assets/Data";
import Popup from "../PopupPulsa";
import Card from "../CardPulsa";
import { useState } from "react";
// import Navbar from "../../components/Navbar";
import { PropTypes } from "prop-types";

const Cover = ({ providerName, searchTerm }) => {
  const provider = Data.pulsa.find(
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

  return (
    <div>
      {/* <Navbar
        providerName={providerName}
        style2="text-black"
        style1="relative top-[-70px] z-10"
        style3="flex items-center justify-center mt-[-40px] "
      /> */}
      {datas.map((data, i) => (
        <Card key={i} product={data} onClick={handleClick} />
      ))}
      <Popup product={popup} onClose={handleClose} nomer={searchTerm} />
    </div>
  );
};
Cover.propTypes = {
  providerName: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Cover;
