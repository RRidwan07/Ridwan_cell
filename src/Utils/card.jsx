import PropTypes from "prop-types";
// import BreadCrumbs from "./breadCrumbs";

const Card = ({ dataTop, dataBody, dataFooter, pp, title }) => {
  const handleSendWhatsApp = () => {
    const message = `Saya berminat dengan: ${title} ${dataTop} ${dataBody} , dengan harga: ${dataFooter}, Nomer tujuan: ${pp}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=+6285780208049&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL);
  };
  return (
    <div>
      {/* <BreadCrumbs judul={title} /> */}

      <dialog
        className="modal modal-bottom sm:modal-middle fixed inset-0 bg-opacity-30 backdrop-blur-sm"
        id="my_modal_3"
      >
        <div className="modal-box text-black">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3
            style={{ borderBottom: "1px solid" }}
            className="font-bold text-xl border-b pb-3 text-center"
          >
            {title}
          </h3>
          <p className="pt-4 flex">
            <b className="mr-2">Name : </b>
            {dataTop}, {dataBody}
          </p>
          <p className="pt-4 flex">
            <b className="mr-2">Harga : </b>
            {dataFooter}
          </p>
          <p className="pt-4 flex">
            <b className="mr-2">Nomer Telpon : </b>
            {pp}
          </p>

          <div className="modal-action">
            <div>
              <button
                className="btn btn-sm btn-success"
                onClick={handleSendWhatsApp}
              >
                Order
              </button>
            </div>
            <form method="dialog">
              <button className="btn btn-sm btn-error">Cancle</button>
            </form>
          </div>
        </div>
      </dialog>
      <div
        className="item m-3"
        data-theme="pastel"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div className="details">
          <h1 className="whitespace-nowrap font-semibold text-xl">{dataTop}</h1>
          <p className="text-[13px] font-medium">{dataBody}</p>
        </div>
        <p className="px-2 py-1 bg-red-500 text-white rounded-full text-[9px] font-bold">
          {dataFooter}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  dataTop: PropTypes.string,
  dataBody: PropTypes.string,
  dataFooter: PropTypes.string,
  Blog: PropTypes.bool,
  pp: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
