function decode(message) {
  let result = ''
  const stack = []

  for (let i = 0; i < message.length; i++) {
    const char = message[i]
    if (char === '(') {
      stack.push(result)
      result = ''
    } else if (char === ')') {
      result = result.split('').reverse().join('')
      result = stack.pop() + result
    } else {
      result += char
    }
  }

  return result
}
