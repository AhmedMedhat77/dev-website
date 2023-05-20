import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="sectiontitle">
      <h2 className="sectiontitle-top">{props?.title}</h2>
      <p className="sectiontitle-bottom">{props?.description}</p>
    </div>
  );
};

export default React.memo(SectionTitle);
