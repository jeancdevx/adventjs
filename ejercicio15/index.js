function autonomousDrive(store, movements) {
  let y = store.findIndex((row) => row.includes('!'))
  let x = store[y].indexOf('!')

  store[y] = store[y].slice(0, x) + '.' + store[y].slice(x + 1)

  const movs = {
    R: () => (x += +(store[y][x + 1] == '.')),
    L: () => (x += -(store[y][x - 1] == '.')),
    U: () => (y += -(store[y - 1]?.[x] == '.')),
    D: () => (y += +(store[y + 1]?.[x] == '.'))
  }

  for (const mov of movements) {
    movs[mov]()
  }

  store[y] = store[y].slice(0, x) + '!' + store[y].slice(x + 1)

  return store
}
