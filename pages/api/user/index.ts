import { PrismaClient, User} from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const user = await prisma.user.create({
    data: {
        name: "test",
    }
  });
  return NextResponse.json({ user });
}

export async function PUT(req: NextRequest) {
  const user = await prisma.user.update({
    where: { id: 1 },
    data: {
        name: "bob",
    }
  });
  return NextResponse.json({ user });
}