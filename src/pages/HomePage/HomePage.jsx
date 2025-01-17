import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapTitle}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.afterTitle}>
          You can find everything you want in our catalog
        </h2>
        <NavLink to="/catalog">
          <Button>View Now</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
