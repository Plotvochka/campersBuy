import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css";
import Icon from "../Icon/Icon.jsx";

const AppBar = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <Icon id="icon-Logo" className={css.icon} width="136" height="16" />
      </NavLink>
      <Navigation />
    </header>
  );
};

export default AppBar;
