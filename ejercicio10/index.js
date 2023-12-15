function createChristmasTree(ornaments, height) {
  let tree = ''
  let ornamentIndex = 0
  let ornament = ornaments[ornamentIndex]
  let ornamentLength = ornaments.length

  for (let i = 1; i <= height; i++) {
    let line = ''
    let spaces = height - i
    for (let j = 0; j < spaces; j++) {
      line += ' '
    }
    for (let j = 0; j < i; j++) {
      line += ornament
      ornamentIndex++
      if (ornamentIndex === ornamentLength) {
        ornamentIndex = 0
      }
      ornament = ornaments[ornamentIndex]
      if (j < i - 1) {
        line += ' '
      }
    }
    tree += line + '\n'
  }
  tree += ' '.repeat(height - 1) + '|' + '\n'
  return tree
}
