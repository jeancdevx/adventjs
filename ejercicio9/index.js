function adjustLights(lights) {
  const color = ['🔴', '🟢']
  let changes = 0

  for (const [i, light] of lights.entries()) {
    if (light === color[i % 2]) continue
    changes += +(light !== color[i % 2])
  }

  return Math.min(changes, lights.length - changes)
}
