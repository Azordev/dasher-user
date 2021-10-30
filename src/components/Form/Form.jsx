import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormButton, FormContainer } from './Form.styled'

const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
})

const Form = ({ children, onSubmit }) => {
  const [form, setForm] = useState({})

  const handleFormChange = event => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value
    console.log('Form Changed: ', updatedForm)
    setForm(updatedForm)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        <FormContext.Consumer>{children}</FormContext.Consumer>
      </FormContext.Provider>
      <FormButton type="submit">Confirmar</FormButton>
    </FormContainer>
  )
}

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
}

export default Form
