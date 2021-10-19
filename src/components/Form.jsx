// import styled from 'styled-components'
import { useState } from 'react'
import FormInput from '../components/FormInput'

const Form = () => {
  const handleFormChange = event => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value
    console.log('Form Changed: ', updatedForm)
    setForm(updatedForm)
  }

  const [form, setForm] = useState({
    clientName: '',
    rutNumber: '',
    cellPhone: '',
  })
  return (
    <>
      <FormInput label="Nombre" name="clientName" value={form.clientName} onChange={handleFormChange} />
      <FormInput label="RUT" name="rutNumber" value={form.rutNumber} onChange={handleFormChange} />
      <FormInput label="Celular" name="cellPhone" value={form.cellPhone} onChange={handleFormChange} />
    </>
  )
}

export default Form
