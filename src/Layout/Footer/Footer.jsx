import React from "react";
import { Link } from "react-router-dom";
import phone from "../../Assets/footer/Phone.svg";
import mail from "../../Assets/footer/Email.svg";
import facebook from "../../Assets/footer/Facebook.svg";
import location from "../../Assets/footer/Location Point.svg";
import twitter from "../../Assets/footer/twitter.svg";
import instgram from "../../Assets/footer/instagram.svg";
import logo from "../../Assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__left">
          <Link to="/" className="footer__left-logo">
            <img src={logo} alt="wafi logo" />
            <h1 className="footer__left-text">WafiTop</h1>
          </Link>
          <p className="footer__left-text">
            We love working with ambitious people. Let's build something great
            together now.
          </p>
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
            <h2 className="footer__right__list-title">Company</h2>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Home
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                About
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Careers
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                News
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Blog
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="footer__right__list">
            <h2 className="footer__right__list-title">Support</h2>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Help Center
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Status
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Report a Bug
              </Link>
            </li>
            <li className="footer__right__list-item">
              <Link to="/" className="footer__right__list-item-link">
                Chat Support
              </Link>
            </li>
          </ul>
          <ul className="footer__right__list">
            <h2 className="footer__right__list-title">Contact us</h2>
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
          &copy; 2023 Whitespace UI - All rights reserved
        </p>
        <div className="footer__bottom-right">
          <Link to="/" className="footer__bottom-right-item">
            Tearms of service
          </Link>
          <Link to="/" className="footer__bottom-right-item">
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
