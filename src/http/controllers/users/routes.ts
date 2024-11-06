import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authentcate } from './authenticate'
import { profile } from './profile'
import { verifyJWT } from '@/middlewares/verify-jwt'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authentcate)
  /* Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
