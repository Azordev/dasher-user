import styled from 'styled-components'

export const FormInput = styled.input`
  width: 280px;
  height: 45px;
  border-radius: 20px;

  padding-left: 20px;
  margin: 10px;
  border: none;
  border: 1px solid var(--light-gray-2);
  outline: none;

  display: block;

  ::placeholder {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--light-gray-2);
  }

  &:focus {
    border: solid 1px var(--dark, #000);
    box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
    outline: none;
  }
`

export default FormInput
