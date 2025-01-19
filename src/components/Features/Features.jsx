import PropTypes from "prop-types";
import Properties from "../Properties/Properties.jsx";
import VenicleDetail from "../VenicleDetail/VenicleDetail.jsx";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  return (
    <div className={css.wrap}>
      <div className={css.wrapProperties}>
        <Properties campers={camper} className={css.properties} />
      </div>
      <div>
        <VenicleDetail campers={camper} />
      </div>
    </div>
  );
};

export default Features;

Features.propTypes = {
  camper: PropTypes.object,
};
