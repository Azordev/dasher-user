import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'

const Form = () => {
  return (
    <FormWrapper>
      <FormTitle>confirma recepcion</FormTitle>
      <Input placeholder="Nombre"></Input>
      <Input placeholder="RUT"></Input>
      <Input placeholder="Celular"></Input>
      <br />
      <Button>confirmar</Button>
    </FormWrapper>
  )
}

export default Form

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 960px) {
    background: yellow;
  }
`

const FormTitle = styled.h1`
  text-transform: uppercase;
  color: yellow;
  font-size: 24px;
  @media (min-width: 960px) {
    color: white;
  }
`
