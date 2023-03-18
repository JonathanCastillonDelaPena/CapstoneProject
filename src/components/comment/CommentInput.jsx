import React, { useState } from "react";

const CommentInput = ({props}) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  function sendComment() {
    setComment("");
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    sendComment();
  };

  return (
    <div className="row mt-2">
      <img
        className="col-2"
        src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="..."
      />
      <form onSubmit={handleCommentSubmit} className="col-9 m-0 p-0">
        <input
          className="col-12"
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder="Write a comment."
        />
      </form>
    </div>
  );
};

export default CommentInput;
