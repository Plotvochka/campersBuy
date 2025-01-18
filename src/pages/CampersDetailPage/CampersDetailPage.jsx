import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../redux/campers/operations.js";
import { selectCamper } from "../../redux/campers/selectors.js";
import RatingAndLocation from "../../components/RatingAndLocation/RatingAndLocation.jsx";

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
      {camper.name}
      <RatingAndLocation
        rating={camper.rating}
        lengthRev={camper.reviews.length}
        location={camper.location}
      />
    </>
  );
};

export default CampersDetailPage;
