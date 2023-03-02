import type { Request, Response, NextFunction } from 'express'

export function Logger(
   request: Request,
   response: Response,
   next: NextFunction
) {
   const { method, path } = request
   console.log(`Received ${method} request at ${path}`)
   next()
}
