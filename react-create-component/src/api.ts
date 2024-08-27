import { FormData } from "./components/dynamic-form"

export const API = {
  submitForm: (data: FormData) => {
    return new Promise((resolve, reject) => {
      let isValid = true;
      setTimeout(() => {
        Object.keys(data).forEach((key) => {
          if (!data[key]) {
            isValid = false
          }
        })
        if (isValid) {
          resolve(true)
        } else {
          reject(false)
        }
      }, 3000)
    })
  }
}