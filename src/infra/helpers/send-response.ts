import type { Response } from 'express'
import type { DTO } from '../dto'

export class SendResponse {
   private response: Response
   private data?: unknown | null
   private error?: unknown | null
   constructor(response: Response, dto?: DTO<unknown>) {
      this.response = response
      if (dto) {
         const { data, error } = dto
         this.data = data
         this.error = error
      }
   }
   success() {
      this.response.status(202).json({
         data: this.data,
         error: null,
      })
      return
   }
   notFound() {
      this.response.status(404).json({
         data: null,
         error: 'Not found',
      })
      return

   }
   notAllowed() {
      this.response.status(405).json({
         data: null,
         error: 'Not allowed',
      })
      return

   }
   badRequest(message?: string) {
      this.response.status(400).json({
         data: null,
         error: `Bad request - ${message}`,
      })
      return

   }
   uncaughtError() {
      this.response.status(500).json({
         data: this.data,
         error: this.error,
      })
      return
   }
}
