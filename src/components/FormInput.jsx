import styled from 'styled-components'

export const FormInput = styled.input`
  width: 320px;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  margin: 10px;
  border: none;
  outline: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  display: block;

  &:focus {
    border: solid 1px var(--dark, #000);
    box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
    outline: none;
  }
`

export default FormInput
