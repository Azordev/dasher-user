import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormButton, FormContainer } from './Form.styled'

export const FormContext = React.createContext({
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

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>
      <FormButton type="submit">Confirmar</FormButton>
    </FormContainer>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
}

export default Form
