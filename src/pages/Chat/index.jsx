import { useParams, useHistory } from 'react-router-dom'
import deliveryManWhite from '../../assets/delivery-chat-white.png'
import userIcon from '../../assets/user-icon.png'
import { FooterChatInput, MessageBox, Avatar, MessageRow } from './Chat.styled'
import { useLatestMessages, InsertClientMessage } from '../../hooks'
import { Input } from '../../components'
import sendChat from '../../assets/send-chat.png'
import { useState } from 'react'

import Layout from './Chat.layout'

const Chat = () => {
/** @type {{id: String}} */
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }
  const { LatestMessages = { chats: [] } } = useLatestMessages(id)
  const { loading, insertClientMessage } = InsertClientMessage()
  const [message, setMessage] = useState('')

  const Messages =
    LatestMessages.chats &&
    LatestMessages.chats.map((message, id) => {
      if (message.user_type === 'client') {
        return (
          <MessageRow type={'client'} key={`chat-message-${id}`}>
            <Avatar src={userIcon} />
            <MessageBox>{message.last_client_message}</MessageBox>
          </MessageRow>
        )
      } else {
        return (
          <MessageRow type={'dasher'} key={`chat-message-${id}`}>
            <Avatar src={deliveryManWhite} />
            <MessageBox>{message.last_dasher_message}</MessageBox>
          </MessageRow>
        )
      }
    })

  const handleSubmit = () => {
    if (message.length > 0) {
      insertClientMessage({
        variables: {
          lastClientMessage: message,
          lastClientUpdate: new Date(Date.now()).toISOString(),
          packageId: id,
          userType: 'client',
        },
      })
      setMessage('')
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Layout
      SendForm={
        <FooterChatInput
          // @ts-ignore
          cols={'0 0 100%'}
        >
          <Input
            // @ts-ignore
            bgColor="gray"
            placeholder="Escribe aqui..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <img src={sendChat} alt="send Chat" onClick={() => handleSubmit()} />
        </FooterChatInput>
      }
    >
      <>
        {Messages}
        {loading && (
          <MessageRow
            // @ts-ignore
            type={'client'}
          >
            <Avatar src={userIcon} />
            <MessageBox>Loading..</MessageBox>
          </MessageRow>
        )}
      </>
    </Layout>
  )
}

export default Chat
