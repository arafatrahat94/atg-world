import { useEffect, useState } from "react";
import { serverUrl } from "../Utils/Utils";

const usePost = () => {
  const [posts, setPosts] = useState([]);
  const refetch = () => {
    fetch(serverUrl + `Post`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
  useEffect(() => {
    refetch();
  }, []);
  return { posts, refetch };
};

export default usePost;
