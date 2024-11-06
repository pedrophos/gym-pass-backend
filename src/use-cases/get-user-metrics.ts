import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsUserCaseRequest {
  userId: string
}

interface GetUserMetricsUserCaseResponse {
  checkInsCount: number
}

export class GetUserMetricsUserCase {
  constructor(private checkinRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsUserCaseRequest): Promise<GetUserMetricsUserCaseResponse> {
    const checkInsCount = await this.checkinRepository.countByUserId(userId)

    return { checkInsCount }
  }
}
