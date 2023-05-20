import React from "react";

const TextCardWithIcon = (props) => {
  return (
    <div className="textcard">
      <img src={props?.icon} className="textcard-top" alt="icon" />
      <h3 className="textcard-center">{props?.title}</h3>
      <p className="textcard-bottom">{props?.text}</p>
    </div>
  );
};

export default React.memo(TextCardWithIcon);
