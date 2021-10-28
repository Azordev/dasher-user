import deliveryMan from '../assets/delivery-man.png'
import logo from '../assets/logo.svg'
import PropTypes from 'prop-types'

import { Text } from '../components'
import { Button, Header, Logo, ManImage } from './Home.styled'

/**
 * Home Layout
 * @augments { Component<Props> }
 */
const Home = ({ title, subtitle, buttonText }) => (
  <Header>
    <Logo src={logo} alt="logo" />
    <Text as="h1" color="secondary" large>
      {title}
    </Text>
    <Text small>{subtitle}</Text>
    <ManImage src={deliveryMan} alt="Delivery man" />
    <Button to="/check">{buttonText}</Button>
  </Header>
)

Home.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
}

export default Home
