import serverURI from "./dbServerURI";
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const token = cookies.get("_auth", true)

const postBaseURL = "/post/";

const getAll = async () => {
  return await serverURI.get(postBaseURL, {
    headers: {
      'authorization': `Bearer ${token}`
    },
  });
};


const create = async (data) => {
  return await serverURI.post(postBaseURL, data, { headers: {
      'authorization': `Bearer ${token}`
    },
  });
};

const PostDataService = { getAll, create };
export default PostDataService;
