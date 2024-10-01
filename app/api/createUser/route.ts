import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
    const body = await req.json();
    const { name, email, password } = body;
    const result = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return NextResponse.json({
      result,
    });} catch (e) {
      console.log(e);
    }
  }

