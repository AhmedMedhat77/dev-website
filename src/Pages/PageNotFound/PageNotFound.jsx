import React from "react";
import notFound from "../../Assets/notfound.gif";

const PageNotFound = () => {
  return (
    <div className="notfound">
      <img src={notFound} alt="not found" />
      <h1>OOOPs Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
