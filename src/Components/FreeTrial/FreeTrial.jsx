import React from "react";
import Button from "../Button/Button";

const FreeTrial = () => {
  return (
    <div className="freetrial">
      <div className="freetrial__top">
        <h2 className="freetrial__top-title">
          Enter your e-mail address and get started for free
        </h2>
        <p className="freetrial__top-text">
          Stay up to date with the most relevant information, our new
          collections, news and special offers!
        </p>
      </div>
      <div className="freetrial__bottom">
        <input
          type="email"
          placeholder="Your e-mail adress"
          className="freetrial__bottom-input"
        />

        <Button text="Subscribe" styles="btn btn--xl btn--primary" />
      </div>
    </div>
  );
};

export default FreeTrial;
