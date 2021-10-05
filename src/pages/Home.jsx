import styled from "styled-components"
import { text, bg } from "../styles/mixins"
import deliveryMan from "../assents/delivery-man.png";

const Title = styled.h1`
  ${ [text.test, text['4xl']] }
  ${ bg.primary }
`

const Home = () => (
  <div>
    <Title>Hola!</Title>
    <img src={deliveryMan} alt="Delivery man"/>
  </div>
)

export default Home
