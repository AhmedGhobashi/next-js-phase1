import { TPosts } from "@/utils/types";
import PostItem from "@/components/PostItem/PostItem";
import { cache } from "next/dist/server/use-cache/use-cache-wrapper";

const Posts = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"} );
  if(!res.ok){
    throw new Error("failed to get data");
  }
  const posts: TPosts[] =await res.json();
  console.log(posts);  
  return (
    <>
    <div className="bg-blue-50 flex  flex-wrap justify-center items-center gap-7">
      {posts?.map((post)=> (
       <PostItem key={post.id} post={post} />
      ))}
    </div>
    </>
  )
}

export default Posts;
