import { z } from 'zod'

export const HomeSchema = z.object({
   type: z.enum(['Casa', 'Apartamento']),
   stage: z.enum(['Pronta', 'Em andamento']),
   size: z.number().min(35).max(200)
})

export type Home = z.infer<typeof HomeSchema>