import React from "react";
import Logo from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/Icon Button.svg";
import { Link } from "react-router-dom";
import arFlag from "../../Assets/Flag_of_Saudi_Arabia.svg.png";
import enFlag from "../../Assets/englishflag.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { languageAction } from "../../Redux/Slices/LanguageSlice";
import ROUTES from "../../Routes/Routes";
const Navbar = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="Waifo Top" />
        </Link>
      </div>
      <div className="navbar__right">
        <div className="navbar__right-menuicon">
          <img src={menuIcon} alt="menu" />
        </div>
        <Link className="btn btn--primary btn--l">{t("ROUTES.startnow")}</Link>
        <div className="navbar-language">
          {lang.lang === "en" ? (
            <img
              src={arFlag}
              alt="العربية"
              onClick={() => dispatch(languageAction.changeLang("ar"))}
            />
          ) : (
            <img
              src={enFlag}
              alt="English"
              onClick={() => dispatch(languageAction.changeLang("en"))}
            />
          )}
        </div>
        <ul className="navbar__right-menu">
          {ROUTES.map((route) => {
            return (
              <li className="navbar__right-menu__item" key={route.id}>
                <Link to={route.path} className="navbar__right-menu__item-link">
                  {t(route.name)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
