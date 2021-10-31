import PropTypes from 'prop-types'
import { Container, Header, BackButton, TicketImage, MainSection } from '../../layouts/Splitted.styled'

import { Text } from '../../components'
import ticket from '../../assets/ticket.png'
import arrow from '../../assets/arrow-left.svg'

const Check = ({ headerTitle, headerSubtitle, children, DontForgetModal }) => (
  <Container>
    <Header className="header-ticket">
      <BackButton src={arrow} alt="Arrow left" />
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
