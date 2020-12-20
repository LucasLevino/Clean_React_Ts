export class InvalidCrediatialsError extends Error {
  constructor () {
    super('Credenciais invalidas')
    this.name = 'InvalidCrediatialsError'
  }
}
