import React from "react";

const CommentUserDetails = (props) => {
  return (
    <div className="commentuserdetails">
      <div className="commentuserdetails__left">
        <img src={props?.img} alt={props.user + "avatar"} />
      </div>
      <div className="commentuserdetails__right">
        <h5 className="commentuserdetails__right-username">
          {props?.user ?? "user"}
        </h5>
        <p className="commentuserdetails__right-date">
          {props?.date ?? "years ago..."}
        </p>
      </div>
    </div>
  );
};

export default CommentUserDetails;
