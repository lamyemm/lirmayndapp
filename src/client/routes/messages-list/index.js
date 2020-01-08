// Dependencies
import React from 'react'
import { connect } from 'unistore/react'

// Store
import { actions } from '../../../store'

// Components
import Conversations from '../../components/conversations'
const MessagesList = connect(
  ['newMessages', 'conversations', 'user'],
  actions
)(({ newMessages, conversations, user, setUser }) => {
  return (
    <div>
      <h2>Messages Received</h2>
      {newMessages > 0 ? (
        <p>
          {newMessages === 1 ? (
            <span>You've got {newMessages} new message</span>
          ) : (
            <span>You've got {newMessages} new messages</span>
          )}
          !
        </p>
      ) : null}
      <div>
        {conversations.map(conversation => (
          <Conversations {...conversation} key={conversation.id} />
        ))}
      </div>
    </div>
  )
})

export default MessagesList
