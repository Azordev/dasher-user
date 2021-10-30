import styled from 'styled-components'

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
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.1);
  background: blue;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  &:focus {
    border: solid 1px var(--dark, #000);
    box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  }
`
