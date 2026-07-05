
import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/utils/data";
import {IUpdatePostDTO} from '@/utils/dto'


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

//update a post
export const PUT = async (request: NextRequest, {params}: ISinglePostProps)=>{
    const {id} = await params;
    const post = posts.find((p)=> p.id === parseInt(id));
    const data = await request.json() as (IUpdatePostDTO)
    if(!post){
        return NextResponse.json({message: "post not found"}, {status: 400}); 
    }
    console.log(post)
    return NextResponse.json({message: "post updated"}, {status: 200});
} 

//delete a post
export const DELETE = async (request: NextRequest, {params}: ISinglePostProps)=>{
    const {id} = await params;
    const post = posts.find((p)=> p.id === parseInt(id));
   
    if(!post){
        return NextResponse.json({message: "post not found"}, {status: 400}); 
    }
    console.log(post)
    return NextResponse.json({message: "post Deleted"}, {status: 200});
} 