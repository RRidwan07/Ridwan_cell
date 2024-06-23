import PropTypes from "prop-types";

const Popup = ({ product, onClose, nomer }) => {
  if (!product) return null;
  // console.log("Popup product:", product);
  const handleSendWhatsApp = () => {
    const message = `Saya berminat dengan: ${product.title} ${product.kuota} , dengan harga: ${product.nominal}, Nomer tujuan: ${nomer}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=+6285780208049&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL);
  };
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center bg-slate-300">
      <div className="modal-box text-black">
        <h3
          style={{ borderBottom: "1px solid" }}
          className="font-bold text-xl border-b pb-3 text-center"
        >
          {product.kuota}
        </h3>
        <p className="pt-4 flex">
          <b className="mr-2">Description : </b>
          {product.title}
        </p>
        <p className="pt-4 flex">
          <b className="mr-2">Harga : </b>
          {product.nominal}
        </p>
        <p className="pt-4 flex">
          <b className="mr-2">Nomer : </b>
          {nomer}
        </p>
        <div className="modal-action">
          <div className="">
            <button
              className="btn btn-sm btn-success mr-2"
              onClick={handleSendWhatsApp}
            >
              Order
            </button>
            <button className="btn btn-sm btn-error" onClick={onClose}>
              cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  nomer: PropTypes.string.isRequired,
};

export default Popup;
