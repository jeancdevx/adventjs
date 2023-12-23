function compile(code) {
  let ans = 0
  let index = 0
  let last = -1
  let inside = null
  const instructions = code.split('')

  while (index < instructions.length) {
    const instruction = instructions[index]

    ans += +(inside !== false) * +(instruction === '+')
    ans -= 1 * +(inside !== false) * +(instruction === '-')
    ans *= [1, 2][+(inside !== false) * +(instruction === '*')]

    if (instruction === '%') {
      last = [last, index][+(inside !== false)]
    } else if (instruction === '<') {
      instructions[index] = ' '
      index = [last - 1, index - 1][+(last === -1)]
    }

    const a = +(instruction === '¿')
    const b = +(ans > 0)
    const c = +(instruction === '?')

    inside = [inside, null, true, false][
      2 * a + c + (1 - b) * (1 - c) * (a + b)
    ]

    index++
  }

  return ans
}
