import NotFound from '../assets/not-found.svg'
import styled from 'styled-components'
import { Text } from '../components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`
const NotFoundImg = styled.img`
  width: 80%;
  padding: 0%;
`
const ErrorNotFound = () => (
  <Container>
    <NotFoundImg src={NotFound} alt="Image Not-found" />
    <Text color="primary" bold center large>
      Oops!
      <br />
      <Text color="primary" uppercase>
        Page not found
      </Text>
    </Text>
  </Container>
)
export default ErrorNotFound
