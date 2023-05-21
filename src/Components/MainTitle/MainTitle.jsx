import React from "react";

const MainTitle = (props) => {
  return (
    <div className="maintitle">
      {props.top && <p className="maintitle-top">{props.top}</p>}
      <h2 className="maintitle-center">{props.center}</h2>
      {props.bottom && <p className="maintitle-bottom">{props.bottom}</p>}
    </div>
  );
};

export default React.memo(MainTitle);
