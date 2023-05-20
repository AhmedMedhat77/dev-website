import React from "react";
import play from "../../Assets/Icons/Play.svg";
import rate from "../../Assets/Icons/star.svg";
import banner from "../../Assets/banner.jpg";
import Button from "../../Components/Button";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__top">
          <h1 className="header__left__top-title">
            Everything you need to scale a <span>global team</span>
          </h1>
          <p className="header__left__top-description">
            Check out our proven methods, guides, and exercises that help make
            work better, and people happier.
          </p>
        </div>
        <div className="header__left__bottom">
          <div className="header__left__bottom-actions">
            <div className="header__left__bottom-actions__item">
              <button className="btn btn--primary btn--l">Learn More</button>
            </div>
            <div className="header__left__bottom-actions__item">
              <Button
                text="Watch Demo"
                icon={play}
                styles={"btn--secondary btn--l btn btn-icon "}
              />
            </div>
          </div>
          <div className="header__left__bottom-desctiption">
            <p className="header__left__bottom-desctiption__text">
              Trusted by over than 1M customers
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
