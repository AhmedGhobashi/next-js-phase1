'use client';
import SearchPostInput from "@/components/SearchPostInput/SearchPostInput";
import Pagination from "@/components/Pagination/Pagination";

import PostItem from "@/components/PostItem/PostItem";
import { TPosts } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState<TPosts[]>([]);

  const getPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="container m-auto px-4">
         <SearchPostInput />
        <div className="flex items-center justify-center flex-wrap gap-7">
          {posts?.splice(0,7).map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default PostsPage;