import React, { useState, useContext } from "react";
import "./contatti.css";
import api from "../api/posts";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import DataMessageContext from "../context/DataMessageContext";

function Contatti() {
  const { messages, setMessages } = useContext(DataMessageContext);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    const messageId = messages.length
      ? parseInt(messages[messages.length - 1].messageId) + 1
      : 1;
    const datetimeMessage = format(new Date(), "MMMM dd, yyyy pp");
    const newMessage = {
      messageId,
      titleMessage: messageTitle,
      datetimeMessage,
      messageBody: messageBody,
      name: name,
      email: email,
    };
    try {
      const response = await api.post("/messages", newMessage);
      const allMessages = [...messages, response.data];
      setMessages(allMessages);
      setMessageTitle("");
      setMessageBody("");
      SetName("");
      setEmail("");
      navigate(`/message/${messageId}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      navigate("/SomethingWrong");
    }
  };
  return (
    <div className="containerContatti">
      <h1>Contatti</h1>
      <h3>Se hai bisogno di aiuto, contattaci</h3>
      <h3>Qui puoi segnalare qualsiasi problema:</h3>
      <p>
        SUPPORTO PRIORITARIO (entro 1h) dal CANALE TELEGRAM (join e contatta
        ASK)<br></br>
        Oppure PAGINA FACEBOOK (dopo "mi piace") con MESSAGGIO PRIVATO.<br></br>
        Le richieste inviate su TELEGRAM hanno la priorità, poi facebook e
        infine qui su questa pagina.<br></br>
        INDICATE SEMPRE PER QUALE SERIE/STAGIONE/EPISODIO/LINK FATE UNA
        RICHIESTA.
      </p>
      <p>Grazie a TUTTI e Buona permanenza su M4M 🙂</p>

      <div>
        <h1>Inserisci una richiesta</h1>
        <p>
          Il tuo indirizzo email non sarà pubblicato. I campi obbligatori sono
          contrassegnati *
        </p>
        <div className="messageForm">
          <form className="messageForm" onSubmit={handleSubmitMessage}>
            <label htmlFor="messageTitle">Titolo del messaggio</label>
            <input
              type="text"
              id="messageTitle"
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
              required
            ></input>
            <label htmlFor="messageBody">Testo del messaggio:</label>
            <textarea
              id="messageBody"
              required
              style={{ width: "400px", height: "200px" }}
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
            ></textarea>
            {/* <input type="textArea" id="testoMessaggio"></input> */}
            <label htmlFor="name">Il Tuo Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
            <label htmlFor="email">Il tuo indirizzo email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="submitMessBtn">
              Invia
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contatti;
