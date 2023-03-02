import type { DTO } from '@/infra/dto'
import { ZodError, ZodSchema } from 'zod'

export function SchemaParser<T>(schema: ZodSchema, body: unknown): DTO<T> {
   let data,
      error = null
   try {
      schema.parse(body)
      data = body as T
      error = null
   } catch (e) {
      if (e instanceof ZodError) {
         data = null
         error = `At ${e.errors[0].path} - ${e.errors[0].message}` as string
      } else {
         error = 'Unknown error at BodyChecker'
      }
   }
   return {
      data: data as T,
      error: error as string,
   }
}
