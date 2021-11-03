import PropTypes from 'prop-types'
import deliveryManWhite from '../../assets/delivery-chat-white.png'
import BackButton from '../../components/BackButton'
import {
  ChatLayoutContainer,
  HeaderChat,
  HeaderTitle,
  HeaderText,
  FooterChat,
  ChatBodyWrapper,
  HeaderChatImg,
} from './Chat.styled'

const Chat = ({ children, SendForm }) => (
  <ChatLayoutContainer>
    <HeaderChat>
      <BackButton />
      <HeaderChatImg src={deliveryManWhite} />
      <HeaderText>
        <HeaderTitle>Repartidor Dasher</HeaderTitle>
      </HeaderText>
    </HeaderChat>
    <ChatBodyWrapper>{children}</ChatBodyWrapper>
    <FooterChat>{SendForm}</FooterChat>
  </ChatLayoutContainer>
)

Chat.propTypes = {
  children: PropTypes.element,
  SendForm: PropTypes.element,
}

export default Chat
