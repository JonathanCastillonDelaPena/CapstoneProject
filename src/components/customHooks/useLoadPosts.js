import axios from "axios";
import { useEffect, useState } from "react";
import PostDataService from "../../dataServices/postDataService";

const useLoadPosts = (pageNumber) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setError(false);
    let cancel;

    await PostDataService.getAllPaginated(
      pageNumber,
      new axios.CancelToken((c) => (cancel = c))
    )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
      });

    return () => cancel();
  }, [pageNumber]);

  return null;
};

export default useLoadPosts;
