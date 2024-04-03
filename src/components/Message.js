import React from "react";
import { Link } from "react-router-dom";
import "./messageIndex.css";
function Message({ message }) {
 
  return (
    <article className="singleMessage">
      <Link to={`/message/${message.messageId}`}>
        <div className="allMessage">
          <div className="messageName">{message.name}</div>
          <div className="messageTitle">{message.titleMessage}</div>
          <div className="messageEmail">{message.email}</div>
        </div>
        <div className="messageBody">
          <p>
            {message.messageBody.length <= 150
              ? message.messageBody
              : `${message.messageBody.slice(0, 150)}...`}
          </p>
        </div>
        <div>
          <div>
            <p className="messageDate">{message.datetimeMessage}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Message;
