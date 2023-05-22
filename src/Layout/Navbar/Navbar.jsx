import React from "react";
import Logo from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/Icon Button.svg";
import { Link } from "react-router-dom";
import arFlag from "../../Assets/Flag_of_Saudi_Arabia.svg.png";
import enFlag from "../../Assets/englishflag.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Navbar = () => {
  const { t } = useTranslation();
  const [navState, setNavState] = React.useState({
    lang: "en",
  });
  // React.useEffect(() => {
  //   if (document.cookie !== "null" || document.cookie !== "undefined") {
  //     const lang = document?.cookie.split("=")[1];
  //     setNavState((old) => {
  //       return { ...old, lang: lang };
  //     });
  //   }
  // }, [navState.lang]);
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
          {navState.lang === "en" ? (
            <img
              src={arFlag}
              alt="العربية"
              onClick={() =>
                setNavState((old) => {
                  i18next.changeLanguage("ar");
                  return { ...old, lang: "ar" };
                })
              }
            />
          ) : (
            <img
              src={enFlag}
              alt="English"
              onClick={() =>
                setNavState((old) => {
                  i18next.changeLanguage("en");
                  return { ...old, lang: "en" };
                })
              }
            />
          )}
        </div>
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
