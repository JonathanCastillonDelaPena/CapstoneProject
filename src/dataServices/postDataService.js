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

const getLatestByUser = async (_user_id) => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(postBaseURL + "latest/user", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: {
      user_id: _user_id
    }
  });
};

const getAllPaginatedByUser = async (_limit, _lastFetchedRecord, _user_id, cancel) => {
  const token = cookies.get("_auth", true);
  return await serverURI.get(postBaseURL + "paginated/user", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: {
      limit: _limit,
      last_fetched_record: _lastFetchedRecord,
      user_id: _user_id
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

const PostDataService = { getAll, getLatest, getLatestByUser, getAllPaginated, getAllPaginatedByUser, create, remove };
export default PostDataService;
