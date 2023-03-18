import serverURI from "./dbServerURI";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const token = cookies.get("_auth", true);

const commentBaseURL = "/comment/";

const getCommentCount = async (data) => {
  return await serverURI.get(commentBaseURL + "count", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const getReplyCommentCount = async (data) => {
  return await serverURI.get(commentBaseURL + "reply-count", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const getParentComment = async (data) => {
  return await serverURI.get(commentBaseURL + "parent", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const getReplyComment = async (data) => {
  return await serverURI.get(commentBaseURL + "reply", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const createParentComment = async (data) => {
  return await serverURI.post(commentBaseURL + "parent", data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const createReplyComment = async (data) => {
  return await serverURI.post(commentBaseURL + "reply", data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const CommentDataService = {
  getCommentCount,
  getReplyCommentCount,
  getParentComment,
  getReplyComment,
  createParentComment,
  createReplyComment,
};
export default CommentDataService;
