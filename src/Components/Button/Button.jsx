import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.styles}
      onClick={props?.handleClick && props.handleClick}
    >
      {props.icon && <img src={props.icon} alt={props.text} />}
      {props.text}
    </button>
  );
};

export default React.memo(Button);
