export const selectRandomNumber = (numbers, numSelected, callback) => {
  const availableNumbers = numbers.filter((num) => !numSelected.includes(num))

  if (availableNumbers.length === 0) {
    return
  }

  const randomIndex = Math.floor(Math.random() * availableNumbers.length)
  const newCurrentNumber = availableNumbers[randomIndex]
  const newNumSelected = [...numSelected, newCurrentNumber]

  callback(newNumSelected, newCurrentNumber)
}
