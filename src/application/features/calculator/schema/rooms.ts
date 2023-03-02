import { z } from 'zod'

export const RoomSchema = z.object({
   name: z.string(),
   represents: z.number()
})

export const RoomsInputSchema = z.array(z.string())

export type Room = z.infer<typeof RoomSchema>