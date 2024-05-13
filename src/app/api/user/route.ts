import prisma from "@/utils/db";

export async function POST(request: Request) {
  const res = await prisma.user.create({
    data: {
      name: "Talal",
      email: "talal@gmail.com",
      password: "1234",
    },
  });

  return Response.json({ res });
}
