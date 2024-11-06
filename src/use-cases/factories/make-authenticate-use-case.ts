import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authentcate'

export function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const authentcateUseCase = new AuthenticateUseCase(usersRepository)

  return authentcateUseCase
}
