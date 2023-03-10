import serverURI from "./dbServerURI";

const postBaseURL = "/post/";

const getAll = () => {
  return serverURI.get(postBaseURL);
};

const create = (data) => {
  return serverURI.post(postBaseURL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const PostDataService = { getAll, create };
export default PostDataService;
