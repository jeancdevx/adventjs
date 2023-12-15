function getIndexsForPalindrome(word) {
  const wordToArray = [...word]

  if (wordToArray.join('') === [...wordToArray].reverse().join('')) {
    return []
  }

  for (let i = 0; i < wordToArray.length; i++) {
    for (let offset = 1; offset < wordToArray.length - i; offset++) {
      const copy = wordToArray.slice()

      copy[i + offset] = wordToArray[i]
      copy[i] = wordToArray[i + offset]

      if (copy.join('') === [...copy].reverse().join('')) {
        return [i, i + offset]
      }
    }
  }

  return null
}
