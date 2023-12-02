function manufacture(gifts, materials) {
  const giftsToMake = []

  for (const gift of gifts) {
    const giftMaterials = new Set(gift)
    let canMake = true

    for (const material of giftMaterials) {
      if (!materials.includes(material)) {
        canMake = false
        break
      }
    }

    if (canMake) {
      giftsToMake.push(gift)
    }
  }

  return giftsToMake
}
