import './App.css'
import {
  DynamicForm,
  type FormField
} from './components/dynamic-form'
import { Select } from './components/select'

const formFields: FormField[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    name: 'gender',
    type: 'select',
    label: 'Gender',
    options: [
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' },
    ]
  },
]

function App() {
  return (
    <>
      <div>
        <DynamicForm fields={formFields} onSubmit={(data) => console.log(data)}></DynamicForm>
        <Select options={[{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]}></Select>
      </div>
    </>
  )
}

export default App
