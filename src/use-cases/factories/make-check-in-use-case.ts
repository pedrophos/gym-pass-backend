import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { PrismaCheckinsRepository } from '@/repositories/prisma/prisma-checkins-repository'
import { CheckinUseCase } from '../check-in'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckinsRepository()
  const gymsRepository = new PrismaGymsRepository()

  const useCase = new CheckinUseCase(checkInsRepository, gymsRepository)

  return useCase
}
