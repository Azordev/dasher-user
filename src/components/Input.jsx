import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = ({ name, type, placeholder, onChange, value, setValue }) => {
  return (
    <InputWrapper>
      <InputData
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChnage={onChange}
        value={value}
        setValue={setValue}
      />
    </InputWrapper>
  )
}

Input.propTypes = {
  name: PropTypes.any,
  type: PropTypes.any,
  placeholder: PropTypes.any,
  onChange: PropTypes.any,
  value: PropTypes.any,
  setValue: PropTypes.any,
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
`
