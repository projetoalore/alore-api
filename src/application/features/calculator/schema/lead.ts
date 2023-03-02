import { z } from 'zod'


export const LeadSchema = z.object({
   fullName: z.string().min(4, { message: 'O nome é obrigatório' }),
   phone: z.string(),
   email: z
      .string()
      .min(4, { message: 'O e-mail é obrigatório.' })
      .email({ message: 'E-mail inválido.' }),
   state: z.string().optional(),
   city: z.string().optional()
})

export type Lead = z.infer<typeof LeadSchema>