import { getRandomTicket } from "./getRandomTicket.ts"
import { Ticket } from "../types/Ticket.types.ts"

export const isTicketWon = (userTicket: Ticket, numsToWin = 4) => {
  const wonTicket = getRandomTicket()
  let winsCount = 0

  for (const field in userTicket) {
    winsCount += userTicket[field].filter((num) =>
      wonTicket[field].includes(num),
    ).length
  }

  return winsCount >= numsToWin
}
