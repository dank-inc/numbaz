export const seed = (seedTerm: string | number) => {
  const tSeed = performance.now().toString()

  return Math.random()
}

export class Rando {
  private seed: string | number

  constructor(seed: string | number) {
    this.seed = seed || performance.now().toString()
  }

  public int() {
    // 0-10
  }

  public random() {
    return Math.random()
  }
}
