import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FcNext } from "react-icons/fc";

const HomeCover = ({ product, link }) => {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate(`/${link}/${product}`);
  };
  return (
    <div
      className="border-y-[1px] border-black h-auto w-full px-5 py-5 flex justify-between items-center"
      onClick={handlePress}
    >
      <h3 className="font-bold text-xl">{product}</h3>
      <FcNext size={24} />
    </div>
  );
};

HomeCover.propTypes = {
  product: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeCover;
