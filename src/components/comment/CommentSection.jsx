import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";
import CommentDataService from "../../dataServices/commentDataService";

const CommentSection = ({ props }) => {
  const [parentComments, setParentComments] = useState([]);

  const getParentComment = async () => {
    await CommentDataService.getParentComment({ post_id: props.post.post_id })
      .then((response) => {
        setParentComments(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(`\nError retrieving parent comment from database.`);
        console.log(err);
      });
  };

  return (
    <div className="d-flex flex-column" onLoad={getParentComment}>
      <CommentInput props={{...props, parentComment: {}, getParentComment}}/> 

        {parentComments.map((parentComment) => (
          <CommentContainer key={parentComment.comment_id} props={{...props, parentComment: parentComment, getParentComment}} />
        ))}     
    </div>
  );
};

export default CommentSection;
