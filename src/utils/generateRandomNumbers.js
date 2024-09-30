export const generateRandomNumbers = (totalNumbers = 100, count = 15) => {
  const numbers = Array.from({ length: totalNumbers }, (_, i) => i + 1)
  const randomNumbers = []

  while (randomNumbers.length < count) {
    const randomIndex = Math.floor(Math.random() * numbers.length)
    const selectedNumber = numbers[randomIndex]
    if (!randomNumbers.includes(selectedNumber)) {
      randomNumbers.push(selectedNumber)
    }
  }

  return randomNumbers
}
