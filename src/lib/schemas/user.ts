import { z } from 'zod'

export const UserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
})

export type UserInput = z.infer<typeof UserSchema>
