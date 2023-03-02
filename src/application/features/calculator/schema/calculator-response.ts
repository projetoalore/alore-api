import { z } from 'zod'

export const CalculatorResponseSchema = z.object({
   bronze: z.number(),
   silver: z.number(),
   gold: z.number(),
   platinium: z.number()
})

export type CalculatorResponse = z.infer<typeof CalculatorResponseSchema>