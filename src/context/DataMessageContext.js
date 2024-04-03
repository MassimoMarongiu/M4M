import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataMessageContext = createContext({});

export const DataMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");
  const [searchMessageResult, setSearchMessageResult] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/messages"
  );
  
  useEffect(() => {
    setMessages(data);
    // console.log("dataMess",data);
  }, [data]);

  useEffect(() => {
    const filteredMessageResults = messages.filter(
      (message) =>
        message.titleMessage
          .toLowerCase()
          .includes(searchMessage.toLowerCase()) ||
        message.messageBody.toLowerCase().includes(searchMessage.toLowerCase()) ||
        message.name.toLowerCase().includes(searchMessage.toLowerCase()) ||
        message.email.toLowerCase().includes(searchMessage.toLowerCase())
        );

        setSearchMessageResult(filteredMessageResults.reverse());
        // console.log("searchMessageResult",searchMessageResult);
      }, [messages, searchMessage]);

  return (
    <DataMessageContext.Provider
      value={{
        searchMessage,
        setSearchMessage,
        searchMessageResult,
        fetchError,
        isLoading,
        messages,
        setMessages,
      }}
    >
      {children}
    </DataMessageContext.Provider>
  );
};

export default DataMessageContext;
