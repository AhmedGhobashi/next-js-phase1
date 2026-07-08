import { prisma } from "@/utils/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import  Jwt ,{JwtPayload } from "jsonwebtoken";
import { verifyToken } from "@/utils/verifyToken";




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

   const userAuthToken = verifyToken(request);

    

if (userAuthToken !== null && userAuthToken.id === user.id) {
      await prisma.user.delete({ where: { id: parseInt(id) } });
      return NextResponse.json(
        { message: "User deleted Successfully" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: "You are not authorized to delete this user!" },
      { status: 403 },
    );
  } catch (error) {
    return NextResponse.json(
      { messgae: "Internal Server Error" },
      { status: 500 },
    );
  }
};


// Get user data for the profile
export const GET = async (request: NextRequest, { params }: IProps) => {
  try {
    const { id } = await params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
        createdAt: true,
      },
    });
    if (!user) {
      return NextResponse.json({ messgae: "User not found!" }, { status: 404 });
    }

    const userAuthToken = verifyToken(request);
    if (userAuthToken === null || userAuthToken.id !== user.id) {
      return NextResponse.json(
        { message: "You are not authorized to view this user!" },
        { status: 403 },
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { messgae: "Internal Server Error!" },
      { status: 500 },
    );
  }
};
