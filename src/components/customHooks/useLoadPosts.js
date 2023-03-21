import axios from "axios";
import { useEffect, useState } from "react";
import PostDataService from "../../dataServices/postDataService";

export default function useLoadPosts(limit, lastFetchedRecord) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [_posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    PostDataService.getAllPaginated(
      limit,
      lastFetchedRecord,
      new axios.CancelToken((c) => (cancel = c))
    )
      .then((response) => {
        setPosts((prevPosts) => {
          return [...prevPosts, ...response.data]
        });
        setHasMore(response.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });

    return () => cancel();
  }, [lastFetchedRecord]);

  return { loading, error, _posts, hasMore, setPosts };
}
