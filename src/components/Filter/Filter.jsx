import Location from "../Location/Location.jsx";
import FilterType from "../FilterType/FilterType.jsx";
import css from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={css.wrap}>
      <Location />
      <FilterType />
    </div>
  );
};

export default Filter;
