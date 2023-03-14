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

const create = async (data) => {
  return await serverURI.post(postBaseURL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${token}`,
    },
  });
};

const remove = (data) => {
  return serverURI.delete(postBaseURL, { data: data });
};

const PostDataService = { getAll, create, remove };
export default PostDataService;
