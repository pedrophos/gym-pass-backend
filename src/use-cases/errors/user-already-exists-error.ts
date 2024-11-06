export class UsearAlreadyExistsError extends Error {
  constructor() {
    super('E-mail already exists.')
  }
}
