import type { Request, Response } from 'express'
import { Router } from '../../infra/router'

export class FactoryRoute {
   @Router({
      method: 'get',
      path: '/',
   })
   factory(request: Request, response: Response) {      
      response.send('Hello World')
   }
}
