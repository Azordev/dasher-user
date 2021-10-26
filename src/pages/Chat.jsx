import { useParams, useHistory } from 'react-router-dom'
import deliveryManWhite from '../assets/delivery-chat-white.png'
import userIcon from '../assets/user-icon.png'
import arrow from '../assets/arrow-left.svg'
import {
  ChatLayoutContainer,
  HeaderChat,
  HeaderTitle,
  HeaderText,
  FooterChat,
  FooterChatInput,
  ChatBodyWrapper,
  HeaderChatImg,
  BackBtn,
  MessageBox,
  Avatar,
  MessageRow,
} from '../layouts/Chat.styled'

const Chat = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <ChatLayoutContainer>
      <HeaderChat>
        <BackBtn src={arrow} />
        <HeaderChatImg src={deliveryManWhite} />
        <HeaderText>
          <HeaderTitle>Repartidor Dasher</HeaderTitle>
        </HeaderText>
      </HeaderChat>
      <ChatBodyWrapper>
        <MessageRow type={'client'}>
          <Avatar src={userIcon} />
          <MessageBox>Hi!</MessageBox>
        </MessageRow>
        <MessageRow type={'dasher'}>
          <Avatar src={deliveryManWhite} />
          <MessageBox>Hello!</MessageBox>
        </MessageRow>
      </ChatBodyWrapper>
      <FooterChat>
        <FooterChatInput cols={'0 0 100%'}>Footer</FooterChatInput>
      </FooterChat>
    </ChatLayoutContainer>
  )
}

export default Chat
