import CamperInfo from "../../components/CamperInfo/CamperInfo.jsx";
import css from "./CampersDetailPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../redux/campers/operations.js";
import { selectCamper } from "../../redux/campers/selectors.js";
import Features from "../../components/Features/Features.jsx";

const CampersDetailPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper(id)).finally(() => setIsLoading(false));
  }, [id, dispatch]);

  const camper = useSelector(selectCamper);

  if (isLoading) {
    return <div>Loading...</div>; // Поки завантаження, не виводити camper
  }
  return (
    <>
      <main className={css.main}>
        <CamperInfo camper={camper} />
        <Features camper={camper} />
      </main>
    </>
  );
};

export default CampersDetailPage;
