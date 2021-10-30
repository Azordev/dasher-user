import styled from 'styled-components'
import PropTypes from 'prop-types'

const Form = ({ action, target }) => {
  return (
    <FormWrapper>
      <FormTitle>confirma recepcion</FormTitle>
      <FormInput placeholder="Nombre"></FormInput>
      <FormInput placeholder="Rut"></FormInput>
      <FormInput placeholder="Celular"></FormInput>
      <FormSubmit type="submit" value="confirmar"></FormSubmit>
    </FormWrapper>
  )
}

Form.propTypes = {
  action: PropTypes.func,
  target: PropTypes.object,
}

export default Form

const FormWrapper = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`

const FormTitle = styled.h1`
  text-transform: uppercase;
  color: yellow;
  font-size: 22px;
  align-self: start;
  margin-left: 5%;
  margin-bottom: -5px;
`

const FormInput = styled.input`
  display: flex;
  justify-content: center;
  margin: 25px 0;
  width: 65%;
  border-radius: 20px;
  min-height: 40px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  padding: 0 25px;
  width: 90%;
`
const FormSubmit = styled.input`
  align-items: center;
  background: var(--primary);
  border: none;
  border-radius: 20px;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  color: var(--white);
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 100%;
  max-height: 40px;
  min-height: 40px;
  justify-content: center;
  margin: 25px 0;
  padding: 0 25px;
  text-transform: uppercase;
  width: 90%;
`
