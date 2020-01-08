import React from 'react'

import ReactEmoji from 'react-emoji'

const Message = ({ message, name }) => {
  return (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(message)}</p>
      </div>
    </div>
  )
}

export default Message
