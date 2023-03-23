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

const getLatest = async () => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(postBaseURL + "latest", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const getAllPaginated = async (_limit, _lastFetchedRecord, cancel) => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(postBaseURL + "paginated", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: {
      limit: _limit,
      last_fetched_record: _lastFetchedRecord,
    },
    cancelToken: cancel,
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

const PostDataService = { getAll, getLatest, getAllPaginated, create, remove };
export default PostDataService;
