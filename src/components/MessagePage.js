import React from "react";
import api from "../api/posts";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataMessageContext from "../context/DataMessageContext";
import "./messagePage.css"
// import { format } from "path";
function MessagePage() {
  const { messages, setMessages } = useContext(DataMessageContext);
  console.log(messages);
  const { messageId } = useParams();
  const message = messages.find(
    (message) => message.messageId.toString() === messageId
  );
  return (
    <main className="messPage">
      <article className="mess">
        {message && (
          <>
            <h2>{message.titleMessage}</h2>
            <p className="messageBody">{message.messageBody}</p>
            <p className="messageName">{message.name}</p>
            <p className="messageEmail">{message.email}</p>
            <p className="messageDate">{message.datetimeMessage}</p>
            <Link /*to={`/edit/${message.messageId}`}*/>
              <button className="editButton">Modifica</button>
            </Link>
            <button
              className="deleteButton " /*onClick={() => handleDelete(post.id)}*/
            >
              Elimina
            </button>
          </>
        )}
        {!message && (
          <>
            <h2>Messaggio non trovato</h2>
            <p>
              <Link to="/">Visita la nostra Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

export default MessagePage;
