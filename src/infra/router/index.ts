/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router as ExpressRouter } from 'express'

export const AppRouter = ExpressRouter()

export interface RouterOptions {
   path: string
   method: 'get' | 'post' | 'put' | 'delete'
   /* securityLevel: 2 */
   middlewares?: any[]
}

export const ROUTES: RouterOptions[] = []


/**
 * 
 * @param path: string
 * @param method: get | post | put | delete
 * 
 * @example '@Router({
 *    path: '/user',
 *    method: 'get'
 * })'
 *   
 */

export function Router(options: RouterOptions) {
   return (
      target: any,
      propKey: string
      /* descriptor: PropertyDescriptor */
   ) => {
      const { method, path } = options
      console.log('Registered route:', options)
      ROUTES.push({
         method,
         path,
      })
      return (AppRouter as any)[method](path, target[propKey]) // i.e: app.get('/users', getUsers())
   }
}