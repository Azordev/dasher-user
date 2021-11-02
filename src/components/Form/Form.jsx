import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormButton, FormContainer } from './Form.styled'

const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
})

const Form = ({ children, onSubmit, formData, FormButtonTitle = 'Confirmar' }) => {
  const [form, setForm] = useState({})

  const handleFormChange = event => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value
    formData(updatedForm)
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
      <FormButton type="submit">{FormButtonTitle}</FormButton>
    </FormContainer>
  )
}

Form.propTypes = {
  children: PropTypes.node.required,
  onSubmit: PropTypes.func.required,
  formData: PropTypes.func,
  FormButtonTitle: PropTypes.string,
}

export default Form
