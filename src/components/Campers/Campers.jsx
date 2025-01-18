import CampersList from "../../components/CampersList/CampersList.jsx";
import PropTypes from "prop-types";

const Campers = ({ campers }) => {
  return (
    <div>
      {campers !== null && (
        <ul>
          <CampersList campers={campers} />
        </ul>
      )}
    </div>
  );
};

export default Campers;

Campers.propTypes = {
  campers: PropTypes.array,
};
