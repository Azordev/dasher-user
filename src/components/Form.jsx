import styled from 'styled-components'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
})

const Form = props => {
  const { children } = props

  const [form, setForm] = useState({})

  const handleFormChange = event => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value
    console.log('Form Changed: ', updatedForm)
    setForm(updatedForm)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Confirmation Values:', form)
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>

      <FormButton onclick={handleSubmit}>Confirmar</FormButton>
    </FormContainer>
  )
}

Form.propTypes = {
  children: PropTypes.any,
}

export default Form

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FormButton = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 20px;
  margin: 10px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  background: blue;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`
