import serverURI from "./dbServerURI";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const getDetails = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.post("/userdetails/", data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const getDetailsByPost = async (data) => {
  const token = cookies.get("_auth", true);
  return await serverURI.post("/post/userdetails/", data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const searchByName = async (query) => {
  const token = cookies.get("_auth", true);
  return await serverURI.post("/search/", query, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const UserDataService = { getDetails, getDetailsByPost, searchByName };
export default UserDataService;
