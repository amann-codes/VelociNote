import prisma from "@/prisma/prisma";
import { authOptions } from "@/lib/auth.config";
import { getServerSession } from "next-auth";
import zod from "zod";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  const orgSchema = zod.object({
    name: zod.string().max(20),
  });
  const session = await getServerSession(authOptions);

  try {
    const body = await req.json();
    const { name } = orgSchema.parse(body);
    //@ts-ignores
    const userId = session?.user.id;
    const create = await prisma.organization.create({
      data: {
        name,
        creatorId: userId,
      },
    });
    if (create) {
      console.log("org created", create);
      return Response.json({ org: create });
    }
    return Response.json({ message: "created" });
  } catch (e) {
    console.log(e);
  }
}
export async function GET() {
  const session = await getServerSession(authOptions);
  //@ts-ignore
  const userId = await session?.user?.id;
  const orgs = await prisma.organization.findMany({
    where: {
      creatorId: userId,
    },
    select: {
      id: true,
      name: true,
    },
  });
  return Response.json({
    orgs,
  });
}
