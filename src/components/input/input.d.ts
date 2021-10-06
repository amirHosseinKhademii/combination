interface IInput {
  className?: string
  label?: string
  value?: string | string[]
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'date'
  error?: string
  name?: string
  id?: string
  required?: boolean
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: ChangeEventHandler<HTMLInputElement>
}
