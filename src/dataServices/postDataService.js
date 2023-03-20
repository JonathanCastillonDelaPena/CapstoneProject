import serverURI from "./dbServerURI";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const postBaseURL = "/post/";

const getAll = async () => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(postBaseURL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const create = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.post(postBaseURL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${token}`,
    },
  });
};

const remove = (data) => {
  const token = cookies.get("_auth", true);
  return serverURI.delete(postBaseURL, {
    data: data,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const PostDataService = { getAll, create, remove };
export default PostDataService;
