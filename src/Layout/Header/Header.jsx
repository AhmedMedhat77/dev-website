import React from "react";
import play from "../../Assets/Icons/Play.svg";
import rate from "../../Assets/Icons/star.svg";
import banner from "../../Assets/banner.jpg";
import Button from "../../Components/Button";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__top">
          <h1 className="header__left__top-title">
            {t("Header.title")} <span>{t("Header.span")}</span>
          </h1>
          <p className="header__left__top-description">
            {t("Header.description")}
          </p>
        </div>
        <div className="header__left__bottom">
          <div className="header__left__bottom-actions">
            <div className="header__left__bottom-actions__item">
              <Button
                text={t("Header.btnPrimary")}
                styles={"btn btn--primary btn--l"}
              />
            </div>
            <div className="header__left__bottom-actions__item">
              <Button
                text={t("Header.btnSecondary")}
                icon={play}
                styles={"btn--secondary btn--l btn btn-icon "}
              />
            </div>
          </div>
          <div className="header__left__bottom-desctiption">
            <p className="header__left__bottom-desctiption__text">
              {t("Header.text")}
            </p>
            <div className="header__left__bottom-desctiption__rate">
              <img src={rate} alt="star" />
              <img src={rate} alt="star" />
              <img src={rate} alt="star" />
              <img src={rate} alt="star" />
            </div>
          </div>
        </div>
      </div>
      <div className="header__right">
        <img src={banner} alt="banner" className="header__right-image" />
      </div>
    </div>
  );
};

export default Header;
