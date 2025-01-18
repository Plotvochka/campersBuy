import css from "./CampersItem.module.css";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon.jsx";
import Properties from "../Properties/Properties.jsx";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button.jsx";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation.jsx";

const CampersItem = ({ campers }) => {
  return (
    <div className={css.container}>
      <img
        src={campers.gallery[0].thumb}
        alt="Camper"
        className={css.mainImg}
      />
      <div className={css.infoWrap}>
        <div className={css.firstInfo}>
          <p className={css.firstSpace}>{campers.name}</p>
          <div className={css.heartWrap}>
            <p className={css.firstSpace}>€{campers.price}.00</p>
            <Icon id="icon-heart" className={css.icon} width="26" height="24" />
          </div>
        </div>
        <RatingAndLocation
          rating={campers.rating}
          lengthRev={campers.reviews.length}
          location={campers.location}
        />
        <div className={css.description}>{campers.description}</div>
        <Properties campers={campers} />
        <NavLink className={css.showMore} to={`/catalog/${campers.id}`}>
          <Button>Show more</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default CampersItem;

CampersItem.propTypes = {
  campers: PropTypes.object,
};
