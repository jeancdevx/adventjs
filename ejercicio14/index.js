function maxGifts(houses) {
  let max = 0
  let prev = 0

  for (const house of houses) {
    const tmp = Math.max(max, prev + house)
    prev = max
    max = tmp
  }

  return max
}
