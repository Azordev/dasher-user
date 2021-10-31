import deliveryMan from '../../assets/delivery-man.png'
import logo from '../../assets/logo.svg'
import PropTypes from 'prop-types'

import { Button, Header, Logo, ManImage, Text } from './Home.styled'

/**
 * Home Layout
 *
 * Example use.
 *
 * ```js
 * <Layout title='Test' subtitle='Example' buttonText='Accept' />
 * ```
 * @augments { React.Component<{ title, subtitle, buttonText }, {}> }
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
  /** Main text to display */
  title: PropTypes.string,
  /** Explain the main text */
  subtitle: PropTypes.string,
  /** Text to display on the button */
  buttonText: PropTypes.string,
}

export default Home
