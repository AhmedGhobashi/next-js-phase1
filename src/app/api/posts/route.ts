import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/utils/data";
import {z} from 'zod';

import { ICreatePostDTO } from "@/utils/dto";
import { TPosts } from "@/utils/types";

 import { prisma } from "@/utils/lib/prisma";
 
 // قبل كدا كنا عاملين تايب للبوستات، ولكن لما عملنا قواعد البيانات غيرنا التايب وبالتالي علشان أخلي 
 // نوع المدخلات هو نفس النوع تبع ال (اسكيما) تبع البريزما فالبريزما كلاينت عمل شيء جميل، عادل تستورد التايب دا من قاعدة البيانات (اسم الجدول)
 import { Post } from "@/generated/prisma/client";


interface ISinglePosyProps {
    params: {id: string}
}

// getting all posts
export const GET = async (request: NextRequest) => {
  try {
    const pageNumber = request.nextUrl.searchParams.get("page") || "1";
    const POST_PER_PAGE = 6;
    const posts = await prisma.post.findMany({
      skip: (parseInt(pageNumber) - 1) * POST_PER_PAGE,
      take: POST_PER_PAGE,
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 },
    );
  }
};


// adding a new post
export const POST = async (request: NextRequest)=>{


    try{ 
    const body = (await request.json()) as ICreatePostDTO;


    // validating the post inputs
    const createPostSchema = z.object({
        title:z.string().min(4).max(30),
        content: z.string().max(500).min(5)
    })

    const validation = createPostSchema.safeParse(body);
    if(!validation){
        return NextResponse.json({message:"wrong validation inputs"}, {status: 400})
    }


 // Post type coming from schema.prisma
 // and we changed the type from body to content
 // the body here referes to the body coming from the type up
 /*
    const body = (await request.json()) as ICreatePostDTO;
 */
   const newPost: Post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return NextResponse.json({message: newPost}, {status: 201});
} catch(error){
        return NextResponse.json({message: "internal error"}, {status: 500});
    } 
}


