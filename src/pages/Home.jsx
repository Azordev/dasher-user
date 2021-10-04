import styled from "styled-components"
import { text, bg } from "../styles/mixins"

const Title = styled.h1`
  ${ [text.test, text['4xl']] }
  ${ bg.primary }
`

const Home = () => (
  <div>
    <Title>Home</Title>
  </div>
)

export default Home
