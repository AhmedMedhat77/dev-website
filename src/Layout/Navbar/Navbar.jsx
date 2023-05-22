import React from "react";
import Logo from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/Icon Button.svg";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes/Routes";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
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
        <ul className="navbar__right-menu">
          <li className="navbar__right-menu__item">
            <Link className="navbar__right-menu__item-link" to="/">
              {t("ROUTES.home")}
            </Link>
          </li>
          <li className="navbar__right-menu__item">
            <Link className="navbar__right-menu__item-link" to="/features">
              {t("ROUTES.features")}
            </Link>
          </li>
          <li className="navbar__right-menu__item">
            <Link className="navbar__right-menu__item-link" to="/about-us">
              {t("ROUTES.aboutus")}
            </Link>
          </li>
          <li className="navbar__right-menu__item">
            <Link className="navbar__right-menu__item-link" to="/news">
              {t("ROUTES.news")}
            </Link>
          </li>
          <li className="navbar__right-menu__item">
            <Link className="navbar__right-menu__item-link" to="/contact-us">
              {t("ROUTES.contact")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
