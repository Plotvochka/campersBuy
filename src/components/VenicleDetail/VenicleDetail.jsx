import PropTypes from "prop-types";
import css from "./VenicleDetail.module.css";

const VenicleDetail = ({ campers }) => {
  return (
    <div>
      <p className={css.title}>Venicle details</p>
      <hr className={css.line} />
      <ul>
        <li className={css.item}>
          Form <span>{campers.form}</span>
        </li>
        <li className={css.item}>
          Length <span>{campers.length}</span>
        </li>
        <li className={css.item}>
          Width <span>{campers.width}</span>
        </li>
        <li className={css.item}>
          Height <span>{campers.height}</span>
        </li>
        <li className={css.item}>
          Tank <span>{campers.tank}</span>
        </li>
        <li className={css.item}>
          Consumption <span>{campers.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VenicleDetail;

VenicleDetail.propTypes = {
  campers: PropTypes.object,
};
