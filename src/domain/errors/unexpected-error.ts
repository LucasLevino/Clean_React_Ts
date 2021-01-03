export class UnespectedError extends Error {
  constructor () {
    super('😫 Algo de errado aconteceu. Tente novamente!')
    this.name = 'InvalidCrediatialsError'
  }
}
