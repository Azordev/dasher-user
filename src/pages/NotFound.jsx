import notFound from '../assets/not-found.svg'
import styled from 'styled-components'
import { Text } from '../components'

const NotFoundImg = styled.img`
  display:block;
  margin:auto;
  width: 70%;
  height: 70%;
`

const NotFound = () => (
  <div>
    <NotFoundImg src={notFound} alt="Image Not-found" />
    <Text color="primary" bold center large>
      Oops!<br/>
      <Text color="primary" uppercase>Page not found</Text>
    </Text>
  </div>
)

export default NotFound
