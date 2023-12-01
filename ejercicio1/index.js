function findFirstRepeated(gifts) {
  const idSet = new Set()
  for (let i = 0; i < gifts.length; i++) {
    if (idSet.has(gifts[i])) {
      return gifts[i]
    }
    idSet.add(gifts[i])
  }
  return -1
}
