import Filter from "../../components/Filter/Filter.jsx";
import Campers from "../../components/Campers/Campers.jsx";
import css from "./CatalogPage.module.css";
import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors.js";
const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  return (
    <main className={css.main}>
      <Filter campers={campers} />
      <Campers campers={campers} />
    </main>
  );
};

export default CatalogPage;
