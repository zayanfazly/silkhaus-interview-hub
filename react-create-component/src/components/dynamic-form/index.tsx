import { ReactNode, FC } from "react";

export type FormField = {
  name: string
  type: 'text' | 'select'
  options?: {
    label: string,
    value: string
  }[]
  label: ReactNode
}

export type FormData = {
  [key: string]: string
}

export type DynamicFormProps = {
 fields: FormField[],
 onSubmit: (formData: FormData) => void,
 isLoading?: boolean
}

export const DynamicForm: FC<DynamicFormProps> = () => {
  return (
    <div>
      <h3>{'< insert form component here />'}</h3>
    </div>
  )
};