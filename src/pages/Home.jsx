import { Text, Button} from '../components'
import deliveryMan from '../assets/delivery-man.png'
import styled from 'styled-components'

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 60%;
  background-color: var(--primary);
`
const ManImage = styled.img`
  margin-top: 80px;
  height: 100%;
`

const Home = () => (
  <Header>
    <Text as="h1" color="secondary" large>
      Hola!
    </Text>
    <Text small>Revisemos como viene tu envío</Text>
     <ManImage src={deliveryMan} alt="Delivery man" />
    <Button >
      Aceptar
    </Button>
  </Header>

);

export default Home
