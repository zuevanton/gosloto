import { FieldItem } from "../FieldItem/FieldItem.tsx"

interface Props {
  itemsCount: number
  activeItems: number[]
  itemClickHandler: (n: number) => void
}
export const Field = ({ activeItems, itemsCount, itemClickHandler }: Props) => {
  const Items = Array.from({ length: itemsCount }, (_, i) => (
    <FieldItem
      number={i}
      key={i}
      isActive={activeItems.includes(i)}
      clickHandler={itemClickHandler}
    />
  ))
  return <div>{Items}</div>
}
