import icons from "../../images/symbol-defs.svg";
import PropTypes from "prop-types";

const Icon = ({ id, width, height, className = "" }) => {
  return (
    <svg className={`${className}`} width={width} height={height}>
      <use href={`${icons}#${id}`}></use>
    </svg>
  );
};
export default Icon;

Icon.propTypes = {
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
