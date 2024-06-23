import PropTypes from "prop-types";

const Card = ({ product, onClick }) => {
  return (
    <div
      className="item m-3"
      data-theme="pastel"
      onClick={() => onClick(product)}
    >
      <div className="details">
        <h1 className="whitespace-nowrap font-semibold text-xl">
          {product.title}
        </h1>
        <p className="text-[13px] font-medium">{product.kuota}</p>
      </div>
      <p className="px-2 py-1 bg-red-500 text-white rounded-full text-[9px] font-bold">
        {product.nominal}
      </p>
    </div>
  );
};
Card.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  // nomer: PropTypes.func.isRequired,
};

export default Card;
