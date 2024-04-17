import { useCallback, useState } from "react"
import { Field } from "../Field/Field.tsx"
import { getFieldHandler } from "../../utils/getFieldHandler.ts"

export const Ticket = () => {
  const [firstField, setFirstField] = useState<number[]>([])
  const [secondField, setSecondField] = useState<number[]>([])

  const firstFieldHandler = useCallback(
    getFieldHandler(firstField, setFirstField),
    [firstField],
  )

  const secondFieldHandler = useCallback(
    getFieldHandler(secondField, setSecondField),
    [secondField],
  )

  return (
    <div>
      <h2>Билет 1</h2>
      <p>Поле 1 Отметьте 8 чисел.</p>
      <Field
        itemsCount={19}
        activeItems={firstField}
        itemClickHandler={firstFieldHandler}
      />
      <p>Поле 2 Отметьте 1 число.</p>
      <Field
        itemsCount={2}
        activeItems={secondField}
        itemClickHandler={secondFieldHandler}
      />

      <button>Показать результат</button>
    </div>
  )
}
