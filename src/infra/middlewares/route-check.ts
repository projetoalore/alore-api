import type { Request, Response, NextFunction } from 'express'
import { ROUTES } from '../router'
import { SendResponse } from '../helpers/send-response'

export function RouteCheck(
   request: Request,
   response: Response,
   next: NextFunction
) {
   console.log('Checking route and method...')
   const { method, path } = request

   const params = hasParams(path)

   let isValidPath,
      isValidMethod = false

   ROUTES.forEach((route) => {
      if (params) {
         if (route.path === params.path) {
            isValidPath = true
         }
      }
      if (route.path === path.toLowerCase()) {
         isValidPath = true
         if (route.method === method.toLowerCase()) isValidMethod = true
      }
   })

   const sendResponse = new SendResponse(response)
   if (!isValidPath) {
      console.log('Invalid path!')
      sendResponse.notFound()
      return
   }
   if (!isValidMethod) {
      console.log('Method not allowed!')
      sendResponse.notAllowed()
      return
   }
   console.log('Route and method OK')
   next()
}

function hasParams(path: string) {
   const splitted = path.split('/')
   if (splitted.length === 3)
      return {
         param: splitted[2],
         path: `/${splitted[1]}`,
      }
   return false
}
