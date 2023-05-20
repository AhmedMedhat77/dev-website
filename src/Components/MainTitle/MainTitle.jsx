import React from "react";

const MainTitle = (props) => {
  return (
    <div className="maintitle">
      <p className="maintitle-top">{props.top}</p>
      <h2 className="maintitle-center">{props.center}</h2>
      <p className="maintitle-bottm">{props.bottom}</p>
    </div>
  );
};

export default React.memo(MainTitle);
