import React from 'react'
import Message from './Message'
import "./feedMessage.css"
function FeedMessages({messages}) {
  
  return (
    <div className='feedMess'>
        {messages.map(message=>(
            <Message key={message.messageId} message = {message}/>
        ))}
    </div>
  )
}

export default FeedMessages
