import styled from 'styled-components'
import { useState } from 'react'
import FormInput from '../components/FormInput'

const Form = () => {
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

  const [form, setForm] = useState({
    clientName: '',
    rutNumber: '',
    cellPhone: '',
  })
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput label="Nombre" name="clientName" value={form.clientName} onChange={handleFormChange} />
      <FormInput label="RUT" name="rutNumber" value={form.rutNumber} onChange={handleFormChange} />
      <FormInput label="Celular" name="cellPhone" value={form.cellPhone} onChange={handleFormChange} />
      <FormButton onclick={handleSubmit}>Confirmar</FormButton>
    </FormContainer>
  )
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
