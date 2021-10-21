import { Text } from '../components'
import deliveryMan from '../assets/delivery-man.png'
import logo from '../assets/logo.svg'
import styled from 'styled-components'

const Header = styled.div`
  position: fixed;
  widh: 100%;
  height: 55%;
  background-color: var(--primary);
  display: block;
  margin: 0 auto;
  @media (min-width: 960px) {
    position: fixed;
    margin-left: 50%;
    width: 50%;
    height: 100%;
    background-color: var(--primary);
  }
`
const ManImage = styled.img`
  display: block;
  margin: 0 auto;
  height: 65vh;
  @media (min-width: 960px) {
    margin-left: -100%;
  }
`
const Button = styled.button`
  background: var(--primary);
  border-radius: 20px;
  border: none;
  color: var(--white);
  height: 100%;
  max-height: 40px;
  width: 30%;
  align-items: center;
  justify-content: center;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  @media (min-width: 960px) {
    margin-top: -40%;
    background-color: var(--secondary);
  }
`
const Logo = styled.img`
  display:none;
  @media (min-width: 960px) {
    margin-left: -100%;
    display: block;
    margin-top: 10%;
  }
`
const Home = () => (
  <Header>
    <Logo src={logo} alt="logo"/>
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
