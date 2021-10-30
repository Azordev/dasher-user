import styled from 'styled-components'
import PropTypes from 'prop-types'

function FormInput(props) {
  const { label, type = 'text', name, value, onChange } = props
  return <FormInputField placeholder={label} type={type} name={name} value={value} onChange={onChange} />
}

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormInput

export const FormLabel = styled.label``
export const FormInputField = styled.input`
  width: 320px;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  margin: 10px;
  border: none;
  outline: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  display: block;
`
