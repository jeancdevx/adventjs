function revealSabotage(store) {
  for (let i = 0; i < store.length; ++i) {
    for (let j = 0; j < store[0].length; ++j) {
      const element = store[i][j]
      const w = +(store[i - 1]?.[j - 1] === '*') + +(store[i - 1]?.[j] === '*')
      const y = +(store[i - 1]?.[j + 1] === '*') + +(store[i]?.[j - 1] === '*')
      const t = +(store[i]?.[j + 1] === '*') + +(store[i + 1]?.[j - 1] === '*')
      const k = +(store[i + 1]?.[j] === '*') + +(store[i + 1]?.[j + 1] === '*')

      const sum = `${w + y + t + k}`

      store[i][j] = [element, sum][+(w + y + t + k > 0) * +(element === ' ')]
    }
  }

  return store
}
