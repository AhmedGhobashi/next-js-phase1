import Link from "next/link";

import { TPosts } from "@/utils/types"

interface IPostProps {
    post:TPosts;
}

const PostItem = ({post}: IPostProps) =>{
  return (

       <div   className="md:w-2/5 lg:w-1/4 p-4 text-center bg-blue-500 rounded-2xl text-white shadow-md shadow-emerald-200 hover:scale-105 hover:bg-blue-400 transition-all">
          <h2 className="font-bold text-black ">{post.title}</h2>
          <p className="text-sm">{post.body}</p>
          <Link href={`/posts/${post.id}`}>Read Well...</Link>
        </div>
  )
}

export default PostItem
