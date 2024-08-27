import { API } from './api'
import './App.css'
import {
  DynamicForm,
  type FormField
} from './components/dynamic-form'

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

  const onSubmit = (data: FormData) => {
    // use API.submitForm functions here
  }

  return (
    <>
      <div>
        <DynamicForm fields={formFields}></DynamicForm>
      </div>
    </>
  )
}

export default App
