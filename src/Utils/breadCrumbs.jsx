import PropTypes from "prop-types";

const BreadCrumbs = ({ judul }) => {
  return (
    <div className="w-screen h-14 bg-green-500 flex items-center">
      <div className="ml-4 text-sm font-bold breadcrumbs">
        <ul>
          <li>
            <a>{judul}</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
    </div>
  );
};
BreadCrumbs.PropTypes = {
  title: PropTypes.string,
};

export default BreadCrumbs;
