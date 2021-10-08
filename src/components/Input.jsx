import styled from 'styled-components'

const Input = () => {
  return (
    <div>
      <InputWrapper>
        <InputData></InputData>
      </InputWrapper>
    </div>
  )
}

export default Input

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 25px 0;
`
const InputData = styled.input`
  width: 65%;
  border-radius: 20px;
  height: 40px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  padding: 0 25px;

  @media (min-width: 640px) {
    box-shadow: 0 0 0 0;
  }
`
