import React from "react";
import Avatar from "../../Assets/Avatar.png";
import CommentUserDetails from "../CommentUserDetails/CommentUserDetails";
import { useTranslation } from "react-i18next";
const date = new Date().toLocaleDateString();
const ImageCard = (props) => {
  const { t } = useTranslation();
  return (
    <div className="imagecard">
      <div className="imagecard__img">
        <img src={props?.img} alt={props?.title} />
      </div>
      <CommentUserDetails img={Avatar} user="Jane Adams" date={date} />
      <div className="imagecard__body">
        <div className="imagecard__body-title">{props?.title}</div>
        <div className="imagecard__body-text">{props?.text}</div>
      </div>
      <div className="imagecard__footer">
        {props?.categories?.map((item, i) => {
          return (
            <div className="imagecard__footer-item" key={i}>
              {item}
            </div>
          );
        })}
        <span className="imagecard__footer-item">+2{t("Blog.Card.more")} </span>
      </div>
    </div>
  );
};

export default React.memo(ImageCard);
