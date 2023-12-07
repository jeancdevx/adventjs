function cyberReindeer(road, time) {
  const ROAD_CHANGE_TIME = 5
  const cleanRoad = `.${road.slice(1)}`
  const roads = [cleanRoad, cleanRoad.replaceAll('|', '*')]
  const result = new Array(time)

  let position = -1

  for (let i = 0; i < time; i++) {
    const currentRoad = i >= ROAD_CHANGE_TIME ? roads[1] : roads[0]
    const canStepUp = currentRoad[position + 1] !== '|'

    if (canStepUp) {
      position++
    }

    const left = currentRoad.slice(0, position)
    const right = currentRoad.slice(position + 1)
    const current = `${left}S${right}`

    result[i] = current
  }

  return result
}
