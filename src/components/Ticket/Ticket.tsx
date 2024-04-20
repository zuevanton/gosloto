import { useCallback, useState } from "react"
import { Field } from "../Field/Field.tsx"
import { getFieldHandler } from "../../utils/getFieldHandler.ts"
import { isTicketWon } from "../../utils/isTicketWon.ts"
import MagicWand from "../../assets/magic-wand.svg?react"
import { getRandomTicket } from "../../utils/getRandomTicket.ts"
import s from "./Ticket.module.css"
import { $api } from "../../api"
import { TicketResponse } from "../../types/Ticket.types.ts"

interface Props {
  ticketNumber: number
}
export const Ticket = ({ ticketNumber }: Props) => {
  const [firstField, setFirstField] = useState<number[]>([])
  const [secondField, setSecondField] = useState<number[]>([])
  const [gameStage, setGameStage] = useState<"playing" | "lose" | "won">(
    "playing",
  )
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  const firstFieldHandler = useCallback(
    getFieldHandler(firstField, setFirstField, 8),
    [firstField],
  )

  const secondFieldHandler = useCallback(
    getFieldHandler(secondField, setSecondField, 1),
    [secondField],
  )

  const showResult = () => {
    const won = isTicketWon({ firstField, secondField })
    setGameStage(won ? "won" : "lose")
    $api
      .post<TicketResponse>("tickets", {
        selectedNumber: { firstField, secondField },
        isTicketWon: won,
      })
      .then((res) => {
        if (res.status !== 201) {
          setErrorMessage("Не удалось отправить данные на сервер")
        }
      })
  }

  const setRandomTicket = () => {
    const { firstField, secondField } = getRandomTicket()
    setFirstField(firstField)
    setSecondField(secondField)
  }

  return (
    <div className={s.ticket}>
      <div>
        <h2>Билет {ticketNumber}</h2>
      </div>

      {gameStage === "lose" ? (
        <p>Вы проиграли</p>
      ) : gameStage === "won" ? (
        <p>Ого, вы выиграли! Поздравляем!</p>
      ) : (
        <>
          <MagicWand onClick={setRandomTicket} className={s.magicWand} />
          <p>
            <strong>Поле 1</strong> Отметьте 8 чисел.
          </p>
          <Field
            itemsCount={19}
            activeItems={firstField}
            itemClickHandler={firstFieldHandler}
          />
          <p>
            <strong>Поле 2</strong> Отметьте 1 число.
          </p>
          <Field
            itemsCount={2}
            activeItems={secondField}
            itemClickHandler={secondFieldHandler}
          />
          <button
            onClick={showResult}
            disabled={firstField.length !== 8 || secondField.length !== 1}
            className={s.showResult}
          >
            Показать результат
          </button>
        </>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}
