import  { TPosts } from "@/utils/types"
import Link from "next/link";

interface PageProps {
  params: Promise<{ Id: string }>; 
}
const Id = async ({params}: PageProps) => {
  const {Id}= await params;
  console.log("Params id", Id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`);
    const post: TPosts = await res.json();
  return (
  <>
    { post&& (<div  className=" text-3xl p-4 text-center bg-blue-500 rounded-2xl text-white shadow-md shadow-emerald-200 hover:scale-105 hover:bg-blue-400 transition-all">
          <h2 className="font-bold text-black ">{post.title} {}</h2>
          <p className="text-2xl">{post.body}</p>
          <Link href='/posts'> wanna go back to posts?..</Link>
        </div>)}
  </>
  )
}

export default Id;
