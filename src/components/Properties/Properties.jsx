import PropTypes from "prop-types";
import css from "./Properties.module.css";
import PropertiesItem from "../PropertiesItem/PropertiesItem";
import clsx from "clsx";

const Properties = ({ campers, className = "" }) => {
  return (
    <div className={clsx(css.wrapProperties, className)}>
      <PropertiesItem icon="icon-diagram" name={campers.transmission} />
      <PropertiesItem icon="icon-fuel-pump" name={campers.engine} />
      {campers.AC && <PropertiesItem icon="icon-wind" name="AC" />}
      {campers.bathroom && (
        <PropertiesItem icon="icon-shower" name="bathroom" />
      )}
      {campers.kitchen && <PropertiesItem icon="icon-cup-hot" name="kitchen" />}
      {campers.TV && <PropertiesItem icon="icon-tv" name="TV" />}
      {campers.radio && <PropertiesItem icon="icon-ui-radios" name="radio" />}
      {campers.refrigerator && (
        <PropertiesItem icon="icon-fridge" name="refrigerator" />
      )}
      {campers.microwave && (
        <PropertiesItem icon="icon-microwave" name="microwave" />
      )}
      {campers.gas && <PropertiesItem icon="icon-gas" name="gas" />}
      {campers.water && <PropertiesItem icon="icon-water" name="water" />}
    </div>
  );
};

export default Properties;

Properties.propTypes = {
  campers: PropTypes.object,
  className: PropTypes.string,
};
