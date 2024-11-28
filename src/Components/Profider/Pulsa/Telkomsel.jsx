/* eslint-disable react/prop-types */
import Data from "../../../assets/Data";
import Card from "../../../Utils/card";
// import PropTypes from "prop-types";

const Telkomsel = ({ PP, blok }) => {
  const datas = Data.pulsa[4].Telkomsel;
  const dataTitle = Data.pulsa[4].name;
  return (
    <>
      {datas.map((data, i) => (
        <Card
          key={i}
          dataTop={data.title}
          dataBody={data.Masa_aktif}
          dataFooter={data.nominal}
          pp={PP}
          Blok={blok}
          title={dataTitle}
        />
      ))}
    </>
  );
};
// Axis.PropTypes = {
//   PP: PropTypes.string.isRequired, // Mengubah tipe prop PP menjadi string
//   blok: PropTypes.bool.isRequired,
// };

export default Telkomsel;