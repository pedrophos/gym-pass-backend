import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'
import { PrismaCheckinsRepository } from '@/repositories/prisma/prisma-checkins-repository'

export function makeFetchUserHistoryUseCase() {
  const checkInsRepository = new PrismaCheckinsRepository()

  const useCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

  return useCase
}
