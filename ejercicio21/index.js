function findBalancedSegment(message) {
  let idxSegment = []
  let max = 0

  for (let i = 0; i < message.length - 1; i++) {
    let zeros = 0
    let ones = 0

    for (let j = i; j < message.length; j++) {
      message[j] === 0 ? zeros++ : ones++

      if (zeros === ones && max < zeros) {
        idxSegment = [i, j]
        max = zeros
      }
    }
  }

  return idxSegment
}
