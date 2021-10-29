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
import { useLatestMessages, InsertClientMessage } from '../hooks'
import { Button } from '../components'
const Chat = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }
  const { LatestMessages = [] } = useLatestMessages({ packageId: id })
  const { loading, insertClientMessage } = InsertClientMessage()

  const Messages =
    LatestMessages.chats &&
    LatestMessages.chats.map(message => {
      if (message.user_type === 'client') {
        return (
          <MessageRow type={'client'}>
            <Avatar src={userIcon} />
            <MessageBox>{message.last_client_message}</MessageBox>
          </MessageRow>
        )
      } else {
        return (
          <MessageRow type={'dasher'}>
            <Avatar src={deliveryManWhite} />
            <MessageBox>{message.last_dasher_message}</MessageBox>
          </MessageRow>
        )
      }
    })

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
        {loading ? (
          <MessageRow type={'client'}>
            <Avatar src={userIcon} />
            <MessageBox>Chatea ahora</MessageBox>
          </MessageRow>
        ) : (
          Messages
        )}
      </ChatBodyWrapper>
      <FooterChat>
        <FooterChatInput cols={'0 0 100%'}>
          {' '}
          <Button
            onClick={() =>
              insertClientMessage({
                variables: {
                  last_client_message: 'nuevo mensaje',
                  last_client_update: new Date(Date.now()).toISOString(),
                  package_id: '902b7f07-da34-4ab5-9a8c-d9db03ba55b5',
                  user_type: 'client',
                },
              })
            }
          >
            Send
          </Button>
        </FooterChatInput>
      </FooterChat>
    </ChatLayoutContainer>
  )
}

export default Chat
