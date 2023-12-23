function drawClock(time) {
  const nums = {
    0: ['***', '* *', '* *', '* *', '* *', '* *', '***'],
    1: ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
    2: ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
    3: ['***', '  *', '  *', '***', '  *', '  *', '***'],
    4: ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
    5: ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
    6: ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
    7: ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
    8: ['***', '* *', '* *', '***', '* *', '* *', '***'],
    9: ['***', '* *', '* *', '***', '  *', '  *', '***'],
    ':': [' ', ' ', '*', ' ', '*', ' ', ' ']
  }

  const res = [...nums[time[0]]]
  let pos = 0
  const [num1, num2, num3, num4] = [
    nums[time[1]],
    nums[':'],
    nums[time[3]],
    nums[time[4]]
  ]
  for (let row of res) {
    const str =
      row +
      ' ' +
      num1[pos] +
      ' ' +
      num2[pos] +
      ' ' +
      num3[pos] +
      ' ' +
      num4[pos]
    res[pos] = [...str]
    pos++
  }
  return res
}
