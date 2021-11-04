import PropTypes from 'prop-types'
import { Text } from '../../components'
import note from '../../assets/note.png'
import arrow from '../../assets/arrow-left.svg'
import { Container, Header, MainSection } from '../../layouts/Splitted.styled'

const Confirm = props => {
  const { headerTitle, children, RatingModal, FinalModal } = props
  console.log(props)
  return (
    <Container>
      <Header>
        <img src={arrow} alt="Arrow left" />
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
}

Confirm.propTypes = {
  headerTitle: PropTypes.string,
  children: PropTypes.node,
  RatingModal: PropTypes.element,
  FinalModal: PropTypes.element,
}

export default Confirm
