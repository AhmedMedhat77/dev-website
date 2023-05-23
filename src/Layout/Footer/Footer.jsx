import React from "react";
import { Link } from "react-router-dom";
import phone from "../../Assets/footer/Phone.svg";
import mail from "../../Assets/footer/Email.svg";
import facebook from "../../Assets/footer/Facebook.svg";
import location from "../../Assets/footer/Location Point.svg";
import twitter from "../../Assets/footer/twitter.svg";
import instgram from "../../Assets/footer/instagram.svg";
import logo from "../../Assets/Icons/Logo.svg";
import ROUTES from "../../Routes/Routes";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer">
        <div className="footer__left">
          <Link to="/" className="footer__left-logo">
            <img src={logo} alt="wafi logo" />
            <h1 className="footer__left-text">{t("Footer.left.logo")}</h1>
          </Link>
          <p className="footer__left-text">{t("Footer.left.text")}</p>
          <div className="footer__left-social">
            <Link to="" className="footer__left-social-item">
              <img src={instgram} alt="instgram" />
            </Link>
            <Link to="/" className="footer__left-social-item">
              <img src={facebook} alt="instgram" />
            </Link>
            <Link to="/" className="footer__left-social-item">
              <img src={twitter} alt="instgram" />
            </Link>
          </div>
        </div>
        <div className="footer__right">
          <ul className="footer__right__list">
            <h2 className="footer__right__list-title">
              {t("Footer.right.section1.title")}
            </h2>
            {ROUTES?.map((route) => {
              return (
                <li className="footer__right__list-item" key={route.id}>
                  <Link
                    to={route.path}
                    className="footer__right__list-item-link"
                  >
                    {t(route.name)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="footer__right__list">
            <h2 className="footer__right__list-title">
              {t("Footer.right.section2.title")}
            </h2>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                {t("Footer.right.section2.list.two")}
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                {t("Footer.right.section2.list.three")}
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                {t("Footer.right.section2.list.four")}
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                {t("Footer.right.section2.list.five")}
              </Link>
            </li>
          </ul>
          <ul className="footer__right__list">
            <h2 className="footer__right__list-title">
              {" "}
              {t("Footer.right.section3.title")}
            </h2>
            <li className="footer__right__list-item">
              <Link
                to="mailto:wafitop@wafitop.com"
                className="footer__right__list-item-link"
              >
                <img src={mail} alt="mail" />
                <span>Wafitop@wafitop.com</span>
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="tel:0123123" className="footer__right__list-item-link">
                <img src={phone} alt="phone" />
                <span>0453123</span>
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                <img src={location} alt="phone" />
                <span>Khamis mushit , KingAbdelaziz </span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer__bottom">
        <p className="footer__bottom-left">
          &copy; 2023 {t("Footer.bottom.left")}
        </p>
        <div className="footer__bottom-right">
          <Link to="/" className="footer__bottom-right-item">
            {t("Footer.bottom.right.terms")}
          </Link>
          <Link to="/" className="footer__bottom-right-item">
            {t("Footer.bottom.right.privacy")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
