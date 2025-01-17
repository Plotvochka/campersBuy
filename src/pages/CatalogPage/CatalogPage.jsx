import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors";
import CampersList from "../../components/CampersList/CampersList";

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);

  return (
    <div>
      {campers !== null && (
        <ul>
          <CampersList campers={campers} />
        </ul>
      )}
    </div>
  );
};

export default CatalogPage;
