import PropTypes from 'prop-types'
import { Text } from '../../components'
import note from '../../assets/note.png'
import { Container, Header, MainSection, ConfirmImage } from '../../layouts/Splitted.styled'

const Confirm = ({ headerTitle, headerSubTitle, children, RatingModal, FinalModal }) => (
  <Container>
    <Header className="header-ticket">
      <Text className="heading-text" as="h1" color="secondary" medium>
        {headerTitle}
      </Text>
      <Text className="heading-subtext" small>
        {headerSubTitle}
      </Text>
      <ConfirmImage src={note} alt="Note icon" />
    </Header>
    <MainSection>{children}</MainSection>
    {RatingModal}
    {FinalModal}
  </Container>
)

Confirm.propTypes = {
  headerTitle: PropTypes.string,
  headerSubTitle: PropTypes.string,
  children: PropTypes.node,
  RatingModal: PropTypes.element,
  FinalModal: PropTypes.element,
}

export default Confirm
