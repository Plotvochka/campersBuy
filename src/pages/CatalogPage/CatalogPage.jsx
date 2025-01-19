import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCampers,
  selectPage,
  selectPerPage,
  selectTotal,
} from "../../redux/campers/selectors.js";
import Campers from "../../components/Campers/Campers.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import css from "./CatalogPage.module.css";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import { clearItems, setPage } from "../../redux/campers/slice.js";
import LoadMore from "../../components/LoadMore/LoadMore.jsx";

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  const total = useSelector(selectTotal);
  const perPage = useSelector(selectPerPage);
  const totalPage = Math.ceil(total / perPage);
  const page = useSelector(selectPage);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      dispatch(clearItems([]));
      return;
    }
    dispatch(fetchCampers({ page, perPage }));
  }, [dispatch, isFirstRender, page, perPage]);

  const handleClick = () => {
    dispatch(setPage());
  };
  return (
    <main className={css.main}>
      <Filter />
      <div className={css.catalog}>
        {campers.length !== 0 && <Campers campers={campers} />}
        {totalPage > page && <LoadMore onClick={handleClick} />}
      </div>
    </main>
  );
};

export default CatalogPage;
