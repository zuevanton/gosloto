import s from "./FieldItem.module.css"
interface Props {
  number: number
  isActive: boolean
  clickHandler: (n: number) => void
}

export const FieldItem = ({ number, isActive, clickHandler }: Props) => {
  const className = isActive ? `${s.btn} ${s.active}` : s.btn

  return (
    <button className={className} onClick={() => clickHandler(number)}>
      {number}
    </button>
  )
}
