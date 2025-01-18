import Location from "../Location/Location.jsx";
import Properties from "../Properties/Properties.jsx";
import PropTypes from "prop-types";

const Filter = (campers) => {
  return (
    <div>
      <Location />
      <Properties campers={campers} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  campers: PropTypes.array,
};
