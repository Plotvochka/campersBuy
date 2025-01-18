import css from "./RatingAndLocation.module.css";
import Icon from "../Icon/Icon.jsx";
import PropTypes from "prop-types";

const RatingAndLocation = ({ location, rating, lengthRev }) => {
  return (
    <div className={css.secondInfo}>
      <div className={css.rating}>
        <Icon id="icon-star" className={css.icon} width="16" height="16" />
        {rating} ({lengthRev} reviews)
      </div>
      <div className={css.rating}>
        <Icon id="icon-map" className={css.icon} width="16" height="16" />
        {location}
      </div>
    </div>
  );
};

export default RatingAndLocation;

RatingAndLocation.propTypes = {
  location: PropTypes.string,
  rating: PropTypes.number,
  lengthRev: PropTypes.number,
};
