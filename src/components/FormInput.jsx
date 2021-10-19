import styled from 'styled-components'
import PropTypes from 'prop-types'

function FormInput(props) {
  const { label, type = 'text', name, value, onChange } = props
  return (
    <FormWrapper>
      <FormLabel></FormLabel>
      <FormInputField placeholder={label} type={type} name={name} value={value} onChange={onChange} />
    </FormWrapper>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormInput

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const FormLabel = styled.label``
export const FormInputField = styled.input`
  width: 320px;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  margin: 10px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
`
