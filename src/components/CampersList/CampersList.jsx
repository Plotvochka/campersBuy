import PropTypes from "prop-types";
import CampersItem from "../CampersItem/CampersItem.jsx";

const CampersList = ({ campers }) => {
  return campers.map((camper) => (
    <li key={camper.id}>
      <CampersItem campers={camper} />
    </li>
  ));
};

export default CampersList;

CampersList.propTypes = {
  campers: PropTypes.array,
};
