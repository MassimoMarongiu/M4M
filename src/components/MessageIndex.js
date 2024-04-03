import React from "react";
import FeedMessages from "./FeedMessages";
import { useContext } from "react";
import DataMessageContext from "../context/DataMessageContext";
import Go_up_btn from "./Buttons/Go_up_btn";
import "./messageIndex.css";
import { useState } from "react";

function MessageIndex() {
  
    const { searchMessageResult, fetchError, isLoading } = useContext(DataMessageContext);
  return (
      <div className="continerMessages">
        <main className="bodyMessIndex">
          {isLoading && (
            <div className="loader">
              <div data-glitch="Loading..." className="glitch">
                Loading...
              </div>
            </div>
          )}
          {!isLoading && fetchError && (
            <div className="loader">
              <div data-glitch="Loading..." className="glitch">
                {fetchError}
              </div>
            </div>
          )}
          {!isLoading &&
            !fetchError &&
            (searchMessageResult.length ? (
              <div className="feedMessLink">
                <FeedMessages messages={searchMessageResult} />

              </div>
              ) : (
                  <p className="statusMsg">Nothing to display.</p>
                ))
                  
            }
        </main>
        <Go_up_btn />
      </div>
  );
}

export default MessageIndex;
