const validateInput = (e, inputIdx, values, setValues) => {
   // 1. if field required & empty
   const _values = [...values]
   if (values[inputIdx].required && !e.target.value) {
      _values[inputIdx].error = `Required!`
      _values[inputIdx].valid = ``
      setValues(_values) 
      return
   }
   // 2. if field is required & full
   if (values[inputIdx].required && e.target.value) {
      _values[inputIdx].error = ``
      _values[inputIdx].valid = ``
      setValues(_values)
   }
   // 3. if field is an email.
   if (e.target.type == 'email') {
      if (
         !values[inputIdx].value.match(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
         )
      ) {
         _values[
            inputIdx
         ].error = `Your ${e.target.name} must be a valid email!`
         _values[inputIdx].valid = ``
         setValues(_values)
      }
      if (
         values[inputIdx].value.match(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
         )
      ) {
         _values[inputIdx].error = ``
         _values[inputIdx].valid = `your ${e.target.name} is valid`
         setValues(_values)
         return
      }
   }
   // 4. if field is a text.
   if (
      e.target.type == 'text' &&
      e.target.name.toUpperCase() != 'FullName'.toUpperCase()
   ) {
      if (!values[inputIdx].value.match(/^[A-Za-z0-9]{3,16}$/)) {
         _values[
            inputIdx
         ].error = `${e.target.placeholder} should be 3-16 characters and shouldn't include any special character!`
         _values[inputIdx].valid = ``
         setValues(_values)
         return
      }
      if (values[inputIdx].value.match(/^[A-Za-z0-9]{3,16}$/)) {
         _values[inputIdx].error = ``
         _values[inputIdx].valid = `your ${e.target.name} is valid`
         setValues(_values)
         return
      }
   }
   // 4. if field is a Full Name text.
   if (
      e.target.type == 'text' &&
      e.target.name.toUpperCase() == 'FullName'.toUpperCase()
   ) {
      if (
         !values[inputIdx].value.match(
            /^[A-Za-z]{3,16}([-']?[A-Za-z]+)*( [A-Za-z]{3,16}([-']?[A-Za-z]+)*)+$/
         )
      ) {
         _values[
            inputIdx
         ].error = `${e.target.placeholder} should contain a First name and a Last Name and each should be 3-16 characters and shouldn't include any special character!`
         _values[inputIdx].valid = ``
         setValues(_values)
         return
      }
      if (
         values[inputIdx].value.match(
            /^[A-Za-z]{3,16}([-']?[A-Za-z]+)*( [A-Za-z]{3,16}([-']?[A-Za-z]+)*)+$/
         )
      ) {
         _values[inputIdx].error = ``
         _values[inputIdx].valid = `your ${e.target.name} is valid`
         setValues(_values)
         return
      }
   }
   // 5. if field is a password.
   if (e.target.type == 'password') {
      if (
         !values[inputIdx].value.match(
            /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$/
         )
      ) {
         _values[
            inputIdx
         ].error = `${e.target.placeholder} must be at least 8 characters and contain at 3 of 4 of the following: upper case (A-Z), lower case (a-z), number (0-9) and special character (e.g. !@#$%^&*)`
         _values[inputIdx].valid = ``
         setValues(_values)
      }
      if (
         values[inputIdx].value.match(
            /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$/
         )
      ) {
         _values[inputIdx].error = ``
         _values[inputIdx].valid = `your ${e.target.name} is valid`
         setValues(_values)
      }
   }
   // 6. if password matches
   if (e.target.name == 'ConfirmPassword') {
      const PasswordFieldIndex = values.findIndex(
         field => field.name == 'Password'
      )

      if (e.target.value != values[PasswordFieldIndex].value) {
         _values[
            inputIdx
         ].error = `${e.target.placeholder} doesn't match Password!`
         _values[inputIdx].valid = ``
         setValues(_values)
      }
      if (e.target.value == values[PasswordFieldIndex].value) {
         _values[inputIdx].error = ``
         _values[inputIdx].valid = `your ${e.target.name} is valid`
         setValues(_values)
      }
   }
   // 7. if checkbox required
}

export default validateInput
