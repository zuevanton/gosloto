import { Dispatch, SetStateAction } from "react"

export const getFieldHandler = (
  state: number[],
  cb: Dispatch<SetStateAction<number[]>>,
  max: number,
) => {
  return (number: number) => {
    if (state.includes(number)) {
      cb((prev) => prev.filter((item) => item !== number))
    } else {
      cb((prev) => (prev.length === max ? prev : [...prev, number]))
    }
  }
}
