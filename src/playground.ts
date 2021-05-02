import { Rando } from '.'
import { forN } from '@dank-inc/lewps'

console.log(Rando.item([1, 2, 3, 'a', 'b', 'c']))

forN(10, () => {
  console.log(Rando.range(0.15, 0.75))
})
