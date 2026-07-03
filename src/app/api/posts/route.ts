import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/utils/data";
import {z} from 'zod';

import { ICreatePostDTO } from "@/utils/dto";
import { TPosts } from "@/utils/types";


interface ISinglePosyProps {
    params: {id: string}
}

// getting all posts
export const GET = (request: NextRequest)=>{
    console.log(request);
    return NextResponse.json(posts, {status:200});
}


// adding a new post
export const POST = async (request: NextRequest)=>{
    const body = (await request.json()) as ICreatePostDTO;


    // validating the post inputs
    const createPostSchema = z.object({
        title:z.string().min(4).max(30),
        body: z.string().max(500).min(5)
    })

    const validation = createPostSchema.safeParse(body);
    if(!validation){
        return NextResponse.json({message:"wrong validation inputs"}, {status: 400})
    }



    const newPost :TPosts = {
        id: posts.length +1,
        userId : 5,
        title: body.title,
        body: body.body
    }

  
    posts.push(newPost);
    return NextResponse.json({message: newPost}, {status: 201});
}

