import PropTypes from "prop-types";
import css from "./Properties.module.css";
import PropertiesItem from "../PropertiesItem/PropertiesItem";

const Properties = ({ campers }) => {
  return (
    <div className={css.wrapProperties}>
      <PropertiesItem icon="icon-diagram" name={campers.transmission} />
      <PropertiesItem icon="icon-fuel-pump" name={campers.engine} />
      {campers.kitchen && <PropertiesItem icon="icon-cup-hot" name="Kitchen" />}
      {campers.AC && <PropertiesItem icon="icon-wind" name="AC" />}
      {campers.TV && <PropertiesItem icon="icon-tv" name="TV" />}
      {campers.radio && <PropertiesItem icon="icon-ui-radios" name="radio" />}
      {campers.refrigerator && (
        <PropertiesItem icon="icon-refrigerator" name="refrigerator" />
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
};
