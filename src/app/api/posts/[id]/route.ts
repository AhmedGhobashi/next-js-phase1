
import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/utils/data";



interface ISinglePostProps {
    params: Promise<{ id: string }>;
}

// get a single post

export const GET = async (request: NextRequest, {params}: ISinglePostProps)=>{
    const {id}= await params
    const post = posts.find((p)=> p.id === parseInt(id));
    if(!post){
         return NextResponse.json({message: "post not found"}, {status: 400});
    }
     return NextResponse.json({message:post}, {status: 200})
}