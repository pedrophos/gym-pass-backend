import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCheckinsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { GetUserMetricsUserCase } from './get-user-metrics'

let checkInRepository: InMemoryCheckinsRepository
let sut: GetUserMetricsUserCase

describe('Get user metrics Use Case', () => {
  beforeEach(async () => {
    checkInRepository = new InMemoryCheckinsRepository()
    sut = new GetUserMetricsUserCase(checkInRepository)
  })

  it('should be able to get checkins count from metrics', async () => {
    await checkInRepository.create({
      gym_id: 'gym-01',
      user_id: 'user-01',
    })

    await checkInRepository.create({
      gym_id: 'gym-02',
      user_id: 'user-01',
    })

    const { checkInsCount } = await sut.execute({
      userId: 'user-01',
    })

    expect(checkInsCount).toEqual(2)
  })
})
