import type { Request, Response } from 'express'
import { Router } from '@/infra/router'
import { SendResponse, SchemaParser } from '@/infra/helpers'
import {
   CalculatorRequest,
   CalculatorRequestSchema,
} from '@/application/features/calculator/schema'
import { checkRooms } from '@/application/features/calculator/helpers'
import { CalculatorService } from '../features/calculator/service/calculator.service'

export class CalculatorRouter {
   @Router({
      method: 'post',
      path: '/calculator',
   })
   calculateResult(request: Request, response: Response) {
      const { body } = request
      const { error } = SchemaParser<CalculatorRequest>(
         CalculatorRequestSchema,
         body
      )
      if (!body.rooms) {
         const res = new SendResponse(response, {
            data: null,
            error,
         })
         res.badRequest('No rooms informed.')
      }

      if (error) {
         const res = new SendResponse(response, {
            data: null,
            error,
         })
         res.badRequest(error as string)
      } else {
         const { rooms } = body
         const roomChecking = checkRooms(rooms)
         if (!roomChecking.success) {
            const res = new SendResponse(response, {
               data: null,
               error,
            })
            res.badRequest(roomChecking.error as string)
         } else {
            const calculatorService = new CalculatorService(
               body as CalculatorRequest
            )
            const result = calculatorService.execute()

            const res = new SendResponse(response, {
               data: result,
               error: null,
            })
            res.success()
         }
      }
   }
}
