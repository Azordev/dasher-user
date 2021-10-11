import styled from 'styled-components'

const Modal = ({ state, statechange }) => {
  return (
    <>
      {state && (
        <Overlay>
          <Container>
            <ModalInfo>Insert Modal Message Here</ModalInfo>
            <AcceptButton onClick={() => statechange(false)}>Insert Button Text Here</AcceptButton>
          </Container>
        </Overlay>
      )}
    </>
  )
}

export default Modal

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 500px;
  min-height: 360px;
  background: #fff;
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ModalInfo = styled.div`
  width: 95%;
  height: 200px;
  background: rgba(0, 0, 0, 0.4);
  margin-top: 10px;
`
const AcceptButton = styled.button`
  position: absolute;
  bottom: 50px;
  background: blue;
  width: 87%;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
`
