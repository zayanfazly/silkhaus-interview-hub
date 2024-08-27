import { FC } from 'react'
import ReactSelect from 'react-select'

export type SelectOption = {
  label: string,
  value: string,
}

export type SelectProps = {
  options?: SelectOption[],
  onChange?: (value: string | null) => void,
  value?: string,

}

export const Select: FC<SelectProps> = ({
  options = [],
  onChange,
  value
}) => {
  return (
    <>
      {/* @ts-expect-error TODO: Fix this issue with options type. Not sure why this is happening*/}
      <ReactSelect options={options} onChange={onChange} value={value}></ReactSelect>
    </>
  )
}