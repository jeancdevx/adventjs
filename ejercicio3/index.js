function findNaughtyStep(original, modified) {
  const [longest, shortest] = [original, modified].sort(
    (a, b) => b.length - a.length
  )
  const longestArray = longest.split('')
  const shortestArray = shortest.split('')
  const different = longestArray.find(
    (letter, index) => letter !== shortestArray[index]
  )

  return different ?? ''
}
