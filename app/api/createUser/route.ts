import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";
import zod from "zod";
import bcrypt from 'bcrypt';
export async function POST(req: Request) {
  try {
    const userSchema = zod.object({
      name: zod.string(),
      email: zod.string().email(),
      password: zod.string().min(6),
    });
    const body = await req.json();
    const { name, email, password } = userSchema.parse(body);
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          user: null,
          message: "user already exists on this email",
        },
        { status: 409 }
      );
    }
    const passhash = await bcrypt.hash(password, 10);
    const result = await prisma.user.create({
      data: {
        name,
        email,
        password: passhash,
      },
    });
    console.log(result)
    return NextResponse.json({
      message:"user created"
    })
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      error:e
    })
  }
}
