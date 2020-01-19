namespace App {
  export interface Validatable {
    value: string | number
    required?: boolean
    minLength?: number
    maxLength?: number
    min?: number
    max?: number
  }
  
  export function validate(validatableInput: Validatable) {
    let isValid = true
    if (validatableInput.required) {
      isValid = isValid && validatableInput.toString().trim().length !== 0
    }
    if (validatableInput.minLength && typeof validatableInput.value === 'string') {
      isValid = 
        isValid && validatableInput.value.length > validatableInput.minLength
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
      isValid =
        isValid && validatableInput.value > validatableInput.min
    }
    return isValid
  }
}
