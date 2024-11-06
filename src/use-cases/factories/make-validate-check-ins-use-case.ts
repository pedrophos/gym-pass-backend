import { PrismaCheckinsRepository } from '@/repositories/prisma/prisma-checkins-repository'
import { ValidateCheckinUseCase } from '../validate-checkin'

export function makeValidateCheckInUseCase() {
  const checkInsRepository = new PrismaCheckinsRepository()

  const useCase = new ValidateCheckinUseCase(checkInsRepository)

  return useCase
}
