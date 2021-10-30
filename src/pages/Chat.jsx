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
import { Input } from '../components'
import sendChat from '../assets/send-chat.png'
import { useState } from 'react'
const Chat = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }
  const { LatestMessages = [] } = useLatestMessages({ packageId: id })
  const { loading, insertClientMessage } = InsertClientMessage()
  const [message, setMessage] = useState('')

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

  const handleSubmit = () => {
    if(message.length > 0) {
    insertClientMessage({
      variables: {
        last_client_message: message,
        last_client_update: new Date(Date.now()).toISOString(),
        package_id: id,
        user_type: 'client',
      },
    })
    setMessage('')
  }
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
        {Messages}
        {loading && (
          <MessageRow type={'client'}>
            <Avatar src={userIcon} />
            <MessageBox>Loading..</MessageBox>
          </MessageRow>
        )}
      </ChatBodyWrapper>
      <FooterChat>
        <FooterChatInput cols={'0 0 100%'}>
          <Input bgColor="gray" placeholder="Escribe aqui..." value={message} onChange={e => setMessage(e.target.value)} />
          <img src={sendChat} alt="send Chat" onClick={() => handleSubmit()} />
        </FooterChatInput>
      </FooterChat>
    </ChatLayoutContainer>
  )
}

export default Chat
