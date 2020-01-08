// Dependencies
import React, { useState } from 'react'
import { connect } from 'unistore/react'

// Store
import { actions } from '../../../store'

// Style
import { Container } from 'reactstrap'

// Components
import NavBarChat from '../../components/navbar-chat'
import Messages from './../../components/messages'
import Input from './../../components/input'

const Chat = connect(
  ['conversations'],
  actions
)(({ conversations, match }) => {
  const { handle } = match.params

  const thisConv = conversations.find(conv => conv.id.toString() === handle)

  const messages = thisConv.messages

  // Chat socket

  const [message, setMessage] = useState('')

  const sendMessage = event => {
    event.preventDefault()

    if (message) {
      //socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <Container>
      <NavBarChat name={thisConv.name} />

      <Container>
        <Messages messages={messages} name={thisConv.name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
    </Container>
  )
})

export default Chat
