import PropTypes from "prop-types";
import Icon from "../Icon/Icon.jsx";
import css from "./PropertiesItem.module.css";

const PropertiesItem = ({ icon, name }) => {
  return (
    <div className={css.wrap}>
      <Icon id={icon} width="20" height="20" className={css.icon} />
      <p className={css.name}>{name}</p>
    </div>
  );
};

export default PropertiesItem;

PropertiesItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
};
