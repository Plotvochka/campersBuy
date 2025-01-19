import CamperInfo from "../../components/CamperInfo/CamperInfo.jsx";
import css from "./CampersDetailPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../redux/campers/operations.js";
import { selectCamper } from "../../redux/campers/selectors.js";
import { NavLink } from "react-router-dom";
import Features from "../../components/Features/Features.jsx";
import FormBuy from "../../components/FormBuy/FormBuy.jsx";

const CampersDetailPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper(id)).finally(() => setIsLoading(false));
  }, [id, dispatch]);

  const camper = useSelector(selectCamper);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className={css.main}>
        <CamperInfo camper={camper} />
        <div className={css.cont}>
          <NavLink default to="features" className={css.link}>
            Features
          </NavLink>
          <NavLink to="reviews" className={css.link}>
            Reviews
          </NavLink>
        </div>
        <hr className={css.line} />
        <div className={css.wrap}>
          <Features />
          <FormBuy />
        </div>
      </main>
    </>
  );
};

export default CampersDetailPage;
