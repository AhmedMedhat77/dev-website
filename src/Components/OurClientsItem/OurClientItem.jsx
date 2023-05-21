import React from "react";

const OurClientItem = (props) => {
  return (
    <div className="client-item">
      <img
        className="client-item__img"
        src={props.img}
        alt={props.title + "icon"}
      />
      <h6 className="client-item__title">{props.title}</h6>
    </div>
  );
};

export default React.memo(OurClientItem);
