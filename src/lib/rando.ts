export const num = () => Math.random()

export const normal = (scale = 1, offset = 0) =>
  (num() - 0.5) * 2 * scale + offset

export const item = <T>(arr: Array<T>): T => {
  const i = Math.floor(num() * (arr.length - 1))
  return arr[i]
}
