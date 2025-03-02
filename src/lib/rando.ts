export const num = (scale = 1, offset = 0) => Math.random() * scale + offset

export const range = (min = 0, max = 1) => Math.random() * (max - min) + min

export const int = (min = 0, max = 42) => Math.floor(range(min, max))

export const normal = (scale = 1, offset = 0) =>
  (num() - 0.5) * 2 * scale + offset

export const item = <T>(arr: Array<T>): T => arr[int(0, arr.length - 1)]

export const bool = () => Math.random() < 0.5

export const pick = <T>(arr: Array<T>): T => arr[int(0, arr.length - 1)]
