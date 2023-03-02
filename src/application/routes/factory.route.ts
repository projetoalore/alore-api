import type { Request, Response } from 'express'
import { Router } from '../../infra/router'

export class FactoryRoute {
   @Router({
      method: 'get',
      path: '/factory',
   })
   factory(request: Request, response: Response) {
      console.log('factory')
      response.status(201).json({ message: 'hello from factory' })
   }
}
