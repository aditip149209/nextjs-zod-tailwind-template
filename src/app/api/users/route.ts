import { prisma } from '@/lib/prisma'
import { UserSchema } from '@/lib/schemas/user'

export async function GET() {
  const users = await prisma.user.findMany()
  return Response.json(users)
}

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = UserSchema.safeParse(body)

  if (!parsed.success) {
    return new Response(JSON.stringify({
      error: parsed.error.flatten()
    }), { status: 400 })
  }

  const user = await prisma.user.create({
    data: parsed.data,
  })

  return Response.json(user)
}
