import { GetUserMetricsUserCase } from '../get-user-metrics'
import { PrismaCheckinsRepository } from '@/repositories/prisma/prisma-checkins-repository'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckinsRepository()

  const useCase = new GetUserMetricsUserCase(checkInsRepository)

  return useCase
}
