import { FieldItem } from "../FieldItem/FieldItem.tsx"
import { memo } from "react"

interface Props {
  itemsCount: number
  activeItems: number[]
  itemClickHandler: (n: number) => void
}
export const Field = memo(
  ({ activeItems, itemsCount, itemClickHandler }: Props) => {
    const Items = Array.from({ length: itemsCount }, (_, i) => (
      <FieldItem
        number={i + 1}
        key={i + 1}
        isActive={activeItems.includes(i + 1)}
        clickHandler={itemClickHandler}
      />
    ))
    return <div>{Items}</div>
  },
)
