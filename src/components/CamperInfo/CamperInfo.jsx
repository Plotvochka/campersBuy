import RatingAndLocation from "../../components/RatingAndLocation/RatingAndLocation.jsx";
import css from "./CamperInfo.module.css";
import PropTypes from "prop-types";

const CamperInfo = ({ camper }) => {
  return (
    <>
      <div className={css.mainInfo}>
        <p className={css.mainText}>{camper.name}</p>
        <RatingAndLocation
          rating={camper.rating}
          lengthRev={camper.reviews.length}
          location={camper.location}
          className={css.ratingAndLocation}
        />
        <p className={css.mainText}>€{camper.price}.00</p>
      </div>
      <ul className={css.list}>
        {camper.gallery.map((img) => (
          <li key={img.thumb} className={css.item}>
            <img src={img.thumb} className={css.img} />
          </li>
        ))}
      </ul>
      <p className={css.description}>{camper.description}</p>
    </>
  );
};

export default CamperInfo;

CamperInfo.propTypes = {
  camper: PropTypes.object,
};
