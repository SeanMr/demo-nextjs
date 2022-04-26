import { useEffect, useState } from "react";
import axios from "axios";


interface Post {
  id: string
  date: string
  title: string
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios.get('/api/v1/posts').then((x) => {
      console.log(x.data);
      setPosts(x.data)
    })
  }, []);
  return {posts, setPosts}
}