import css from "./Location.module.css";
import Icon from "../Icon/Icon.jsx";

const Location = () => {
  return (
    <div className={css.wrap}>
      <p className={css.title}>Location</p>
      <div className={css.wrapInput}>
        <Icon id="icon-map" className={css.icon} width="20" height="20" />
        <input type="text" placeholder="City" className={css.input} />
      </div>
    </div>
  );
};

export default Location;
