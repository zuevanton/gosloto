export interface Ticket {
  firstField: number[]
  secondField: number[]
  [key: string]: number[]
}

export interface TicketRequest {
  selectedNumber: Ticket
  isTicketWon: boolean
}

export interface TicketResponse extends TicketRequest {
  id: string
}
