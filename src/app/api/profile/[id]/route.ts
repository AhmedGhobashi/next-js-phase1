import { prisma } from "@/utils/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import  Jwt ,{JwtPayload } from "jsonwebtoken";



interface IProps {
  params: Promise<{ id: string }>;
}

// Delete user profile
export const DELETE = async (request: NextRequest, { params }: IProps) => {
  try {
    const {id}= await params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const authToken = request.headers.get("authtoken") as string;

    if (!authToken) {
      return NextResponse.json(
        { message: "not auth token provided"},
        { status: 201 },
      );
    }

    const userToken = Jwt.verify(authToken, process.env.JWT_SECRET as string ) as JwtPayload;

   if(userToken.id === user.id){
    await prisma.user.delete({where: {id: parseInt(id)}})
    return NextResponse.json({message:`user deleted successfully`}, {status:200});
   }

   return NextResponse.json({message: "your'e not authorized to delete this user"}, {status:201});


}catch(error){
    return NextResponse.json({message: "nah not found 404"}, {status: 404})
} }
