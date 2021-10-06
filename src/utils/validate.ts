export const onValidate = (field) => {
  if (field.required && !field.value) return 'This field is required.'
  else return undefined
}
