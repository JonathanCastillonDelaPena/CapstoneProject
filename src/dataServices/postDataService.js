import serverURI from "./dbServerURI";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const token = cookies.get("_auth", true);

const postBaseURL = "/post/";

const getAll = async () => {
  return await serverURI.get(postBaseURL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const getAllPaginated = async (pageNumber, cancel) => {
  return await serverURI.get(postBaseURL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: pageNumber,
    cancelToken: cancel,
  });
};

const create = async (data) => {
  return await serverURI.post(postBaseURL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${token}`,
    },
  });
};

const remove = (data) => {
  return serverURI.delete(postBaseURL, {
    data: data,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const PostDataService = { getAll, getAllPaginated, create, remove };
export default PostDataService;
