import PropTypes from 'prop-types'
import { Container, Header,  TicketImage, MainSection } from '../../layouts/Splitted.styled'

import { Text } from '../../components'
import ticket from '../../assets/ticket.png'

import BackButton from '../../components/BackButton'

const Check = ({ headerTitle, headerSubtitle, children, DontForgetModal }) => (
  <Container>
    <Header className="header-ticket">
    <BackButton />
      <Text className="heading-text" as="h1" color="secondary" medium>
        {headerTitle}
      </Text>
      <Text className="heading-subtext" small>
        {headerSubtitle}
      </Text>
      <TicketImage src={ticket} alt="Ticket" />
    </Header>
    <MainSection>{children}</MainSection>
    {DontForgetModal}
  </Container>
)

Check.propTypes = {
  headerTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
  children: PropTypes.node,
  DontForgetModal: PropTypes.node,
}

export default Check
