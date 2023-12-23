function organizeChristmasDinner(dishes) {
  const ingredients = {}

  for (const [dish, ...dishIngredients] of dishes) {
    for (const ingredient of dishIngredients) {
      if (ingredients[ingredient]) {
        ingredients[ingredient].push(dish)
      } else {
        ingredients[ingredient] = [dish]
      }
    }
  }

  const result = []

  for (const ingredient in ingredients) {
    if (ingredients[ingredient].length > 1) {
      result.push([ingredient, ...ingredients[ingredient].sort()])
    }
  }

  result.sort((a, b) => a[0].localeCompare(b[0]))

  return result
}
