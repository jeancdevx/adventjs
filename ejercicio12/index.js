function checkIsValidCopy(original, copy) {
  let regEx = '^'
  const orden = '#+:. '

  for (const char of original) {
    let pos = ''
    pos += char
    pos += char.toLowerCase()

    let index = orden.indexOf(char)
    index += 1
    index = index - !!index

    const tmp = orden.slice(index)
    pos += tmp

    regEx += `[${pos}]`
  }

  regEx += '$'

  return new RegExp(regEx).test(copy)
}
