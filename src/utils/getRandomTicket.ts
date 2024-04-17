import { Ticket } from "../types/Ticket.types.ts"

function getRandomNumbers(max = 19, count = 8) {
  const min = 1
  const result: number[] = []

  while (result.length < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    if (!result.includes(randomNum)) {
      result.push(randomNum)
    }
  }

  return result
}

export const getRandomTicket = (): Ticket => {
  return {
    firstField: getRandomNumbers(),
    secondField: getRandomNumbers(2, 1),
  }
}
