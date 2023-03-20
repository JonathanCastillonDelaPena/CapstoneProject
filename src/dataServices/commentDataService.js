import serverURI from "./dbServerURI";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const commentBaseURL = "/comment/";

const getCommentCount = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(commentBaseURL + "count", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const getReplyCommentCount = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(commentBaseURL + "reply-count", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const getParentComment = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(commentBaseURL + "parent", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const getReplyComment = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(commentBaseURL + "reply", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: data,
  });
};

const createParentComment = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.post(commentBaseURL + "parent", data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const createReplyComment = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.post(commentBaseURL + "reply", data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const removeComment = (data) => {
  const token = cookies.get("_auth", true);
  return serverURI.delete(commentBaseURL, {
    data: data,
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
  removeComment,
};
export default CommentDataService;
