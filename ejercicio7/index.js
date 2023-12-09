/* 
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')
*/

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

/*
drawGift(5, '*')
*/

/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/
/**
drawGift(1, '^')
*/
/*
#
*/
/*
Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/

function drawGift(size, symbol = '+') {
  if (size <= 0) {
    throw new Error('Size must be a positive integer')
  }

  const endLine = '\n'
  const pound = '#'

  if (size === 1) {
    return `${pound}${endLine}`
  }

  const lineLength = size * 2 - 1
  const firstLine = pound.repeat(size)
  const upperBox = [`${' '.repeat(lineLength - size)}${firstLine}`]
  const bottomBox = [firstLine]
  const topFace = `${pound}${symbol.repeat(size - 2)}`

  for (let i = 2; i < size; i++) {
    const calc = lineLength - size - i + 1
    const prefix = ' '.repeat(Math.max(calc, 0))
    const symbols = symbol.repeat(size - 2 - Math.abs(size - i))
    const sideFace = `${pound}${symbols}${pound}`
    upperBox.push(`${prefix}${topFace}${sideFace}`)
    bottomBox.unshift(`${topFace}${sideFace}`)
  }

  const symbols = symbol.repeat(lineLength - size - 1)
  const midLine = `${pound.repeat(size)}${symbols}${pound}`
  const newBox = [...upperBox, midLine, ...bottomBox]

  return newBox.join(endLine) + endLine
}
