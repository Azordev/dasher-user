import styled from 'styled-components'
import PropTypes from 'prop-types'

const Modal = ({ children, isOpen, toggle, handleClick }) => {
  handleClick = () => {
    console.log('Modal Accepted')
    toggle(false)
  }

  return (
    <div>
      {isOpen && (
        <Overlay>
          <ModalContainer>
            <InfoContainer>{children}</InfoContainer>
            <ModalButton onClick={() => handleClick()}>Accept</ModalButton>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  toggle: PropTypes.any,
  handleClick: PropTypes.func,
}

export default Modal

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(51, 119, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  width: 310px;
  max-width: 460px;
  height: 360px;
  background: var(--white);
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 680px) {
    width: 460px;
    height: 45vh;
  }
`
const InfoContainer = styled.div`
  border-radius: 15px;
  flex: 1 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    color: blue;
  }
  p {
    font-size: 16px;
    color: gray;
    padding-left: 16px;
    padding-right: 16px;
  }
  ul {
    align-self: start;
    color: blue;
  }
`
const ModalButton = styled.button`
  background: blue;
  margin: 18px;
  width: 250px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  flex-shrink: 0;
  color: white;
  font-weight: bold;
`
