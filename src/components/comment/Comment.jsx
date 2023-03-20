import React from "react";

const Comment = ({ props }) => {
  return (
    <div className="d-flex mt-2 px-4">
      <img
        className="smallMiniProfilePic rounded-circle"
        src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="..."
        style={{ width: 50, marginRight: 10 }}
      />
        <section className="border p-2 flex-fill commentbubble">
          <h5 className="m-0">{props.first_name} {props.last_name}</h5>
          <p className="m-0">{props.comment}</p>
        </section>
    </div>
  );
};


export default Comment;
