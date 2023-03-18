import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";
import CommentDataService from "../../dataServices/commentDataService";

const CommentSection = ({ post_id }) => {
  const [parentComment, setParentComment] = useState([]);

  const getParentComment = async () => {
    await CommentDataService.getParentComment({ post_id: post_id })
      .then((response) => {
        setParentComment(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(`\nError retrieving parent comment from database.`);
        console.log(err);
      });
  };

  return (
    <div className="d-flex flex-column" onLoad={getParentComment}>
      {parentComment.map((comment) => (
        <CommentContainer key={comment.comment_id} props={comment} />
      ))}

      <CommentInput />
    </div>
  );
};

export default CommentSection;
