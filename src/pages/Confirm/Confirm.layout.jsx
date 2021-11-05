import PropTypes from 'prop-types'
import { Text } from '../../components'
import note from '../../assets/note.png'
import { Container, Header, MainSection } from '../../layouts/Splitted.styled'
import BackButton from '../../components/BackButton'
const Confirm = ({ headerTitle, children, RatingModal, FinalModal }) => (
  <Container>
    <Header>
      <BackButton />
      <Text as="h1" color="secondary" medium>
        {headerTitle}
      </Text>
      <img src={note} alt="Note icon" />
    </Header>
    <MainSection>{children}</MainSection>
    {RatingModal}
    {FinalModal}
  </Container>
)

Confirm.propTypes = {
  headerTitle: PropTypes.string,
  children: PropTypes.node,
  RatingModal: PropTypes.element,
  FinalModal: PropTypes.element,
}

export default Confirm
