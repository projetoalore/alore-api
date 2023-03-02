import { z } from 'zod'
import { LeadSchema } from './lead'
import { HomeSchema } from './home'
import { RoomsInputSchema } from './rooms'

export const CalculatorRequestSchema = z.object({
   lead: LeadSchema,
   home: HomeSchema,
   rooms: RoomsInputSchema
})

export type CalculatorRequest = z.infer<typeof CalculatorRequestSchema>
