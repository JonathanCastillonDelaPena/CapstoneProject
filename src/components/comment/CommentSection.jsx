import React from "react";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";
const CommentSection = () => {
  return (
    <div className="d-flex flex-column">
      {[1, 2].map((user) => (
        <CommentContainer key={user} props={{ user: user }} />
      ))}

      <CommentInput />
    </div>
  );
};

export default CommentSection;
