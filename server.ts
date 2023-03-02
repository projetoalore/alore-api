import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import '@/application/routes'
import { RouteCheck, Logger } from '@/infra/middlewares'
import { AppRouter } from '@/infra/router'

dotenv.config()
const PORT = process.env.APP_PORT || 5000
const server = express()

//middlewares
server.use(express.json())
server.use(cors())
server.use(Logger)
server.use(RouteCheck)
server.use(AppRouter)

// initialize
server.listen(PORT, () => console.log('Server is up at', PORT))

