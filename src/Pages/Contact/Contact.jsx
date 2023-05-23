import React from "react";
import { Link } from "react-router-dom";

import { ContactPage } from "../../Data/ContactPage";
import Button from "../../Components/Button";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        {ContactPage?.map((item) => {
          return (
            <Link to={item.path} className="contact-left__item" key={item.id}>
              <img
                className="contact-left__item-img"
                src={item.img}
                alt={item.title}
              />
              <h4 className="contact-left__item-title">{item.title}</h4>
              <p className="contact-left__item-text">{item.text}</p>
            </Link>
          );
        })}
      </div>

      <form className="contact-right">
        <div className="contact-right-top">
          <h3 className="contact-right-top__title">Send Us A massage</h3>
          <p className="contact-right-top__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            alias porro. Nobis facilis iste ipsum iusto repudiandae sapiente
            eligendi? Dicta.
          </p>
        </div>
        <div className="contact-right-bottom">
          <input
            placeholder="enter your name"
            type="text"
            className="contact-right-bottom__input"
          />
          <input
            placeholder="enter your email"
            type="email"
            className="contact-right-bottom__input"
          />
          <textarea
            placeholder="enter your message"
            type="text"
            className="contact-right-bottom__input textarea"
          />
        </div>
        <Button text={"Send Now"} styles={"btn btn--primary btn--l"} />
      </form>
    </div>
  );
};

export default Contact;
