function findFirstRepeated(gifts) {
  const idSet = new Set()
  for (const id of gifts) {
    if (idSet.has(id)) {
      return id
    }
    idSet.add(id)
  }
  return -1
}
