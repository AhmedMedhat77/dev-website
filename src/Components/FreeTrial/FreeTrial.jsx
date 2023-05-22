import React from "react";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
const FreeTrial = () => {
  const { t } = useTranslation();
  return (
    <div className="freetrial">
      <div className="freetrial__top">
        <h2 className="freetrial__top-title">{t("FreeTrial.title")}</h2>
        <p className="freetrial__top-text">{t("FreeTrial.text")}</p>
      </div>
      <div className="freetrial__bottom">
        <input
          type="email"
          placeholder={t("FreeTrial.placeholder")}
          className="freetrial__bottom-input"
          required
        />

        <Button text={t("FreeTrial.btn")} styles="btn btn--xl btn--primary" />
      </div>
    </div>
  );
};

export default React.memo(FreeTrial);
