import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamper } from "../../redux/campers/operations.js";
import { selectCamper } from "../../redux/campers/selectors.js";
import Properties from "../Properties/Properties.jsx";
import VenicleDetail from "../VenicleDetail/VenicleDetail.jsx";
import css from "./Features.module.css";

const Features = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [id, dispatch]);

  const camper = useSelector(selectCamper);
  return (
    camper && (
      <div className={css.wrap}>
        <div className={css.wrapProperties}>
          <Properties campers={camper} className={css.properties} />
        </div>
        <div>
          <VenicleDetail campers={camper} />
        </div>
      </div>
    )
  );
};

export default Features;

Features.propTypes = {
  camper: PropTypes.object,
};
