import React, { useState } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentContainer = ({ props }) => {
  const [isReplyBoxHidden, setIsReplyBoxHidden] = useState(false);

  const handleReplyBox = () => {
    setIsReplyBoxHidden((previous) => !previous);
  };

  function showCommentReplies() {
    return (
      <div className="ms-4">
        <li style={{ listStyleType: "none" }}>
          {[3, 4].map((user) => (
            <Comment key={user} props={{ user: user }} />
          ))}
          <CommentInput />
        </li>
      </div>
    );
  }

  return (
    <div>
      <Comment props={props} />
      <div className="comment-options">
        <button type="button" onClick={handleReplyBox}>
          Reply
        </button>
      </div>
      {isReplyBoxHidden && showCommentReplies()}
    </div>
  );
};

export default CommentContainer;
