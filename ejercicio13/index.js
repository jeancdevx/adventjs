function calculateTime(deliveries) {
  const signo = { true: '-', false: '' }
  let time = 7 * 3600

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':')
    time += -hours * 3600 - minutes * 60 - seconds
  }
  const bool = time > 0
  time = Math.abs(time)

  const seconds = time % 60
  const minutes = Math.trunc(time / 60) % 60
  const hours = (Math.trunc(time / 60) - minutes) / 60

  const formated_time =
    `${hours}`.padStart(2, '0') +
    ':' +
    `${minutes}`.padStart(2, '0') +
    ':' +
    `${seconds}`.padStart(2, '0')

  return signo[bool] + formated_time
}
