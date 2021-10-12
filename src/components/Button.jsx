import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ children, ...props }) => (
  <ButtonWrapper>
    <MainButton {...props}>{children}</MainButton>
  </ButtonWrapper>
)

Button.propTypes = {
  children: PropTypes.any,
}

export default Button

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 25px 0;
`
const MainButton = styled.button`
  width: 65%;
  border-radius: 20px;
  height: 40px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  padding: 0 25px;
  background: blue;
  color: white;
  font-weight: bold;
`
