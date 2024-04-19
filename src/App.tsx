import { Ticket } from "./components/Ticket/Ticket.tsx"
import s from "./App.module.css"

const ticketsToShow = 9
function App() {
  return (
    <>
      <div className="container">
        <h1>Гослото „8 из 19“</h1>
        <div className={s.ticketWrap}>
          {Array.from({ length: ticketsToShow }, (_, i) => (
            <Ticket ticketNumber={i + 1} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
