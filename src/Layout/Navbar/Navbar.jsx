import React from "react";
import Logo from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/Icon Button.svg";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes/Routes";
const Navbar = () => {
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
        <Link className="btn btn--primary btn--l">Start Now</Link>
        <ul className="navbar__right-menu">
          {ROUTES?.map((route) => {
            return (
              <li className="navbar__right-menu__item" key={route.id}>
                <Link className="navbar__right-menu__item-link" to={route.path}>
                  {route.name}
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
