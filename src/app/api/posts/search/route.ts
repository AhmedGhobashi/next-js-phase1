import { prisma } from "@/utils/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export const GET = async(request: NextRequest)=>{
    try{
        const textSearch = await request.nextUrl.searchParams.get ("searchText");
        let posts;
        if(textSearch){
            posts = await prisma.post.findMany({where:{title:{startsWith:textSearch, mode:"insensitive"}}})
        }
        else{
            return NextResponse.json({message: "not found"}, {status:404});
        }
        return NextResponse.json(posts,{status:200});
    }
    catch(error){
        return NextResponse.json({message: "internal error"}, {status:500})

    }
}