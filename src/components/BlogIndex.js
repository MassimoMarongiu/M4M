import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Go_up_btn from "./Buttons/Go_up_btn";
import Navblog from "./Navblog";
import "./blogindex.css";
import { useState } from "react";

function BlogIndex() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);

  return (
    <>
      <div className="containerBlog">
        <div className="containerNavBlog">
          <Navblog />
        </div>
        <main className="bodyBlogIndex">
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
            (searchResults.length ? (
              <Feed posts={searchResults} />
            ) : (
              <p className="statusMsg">Nothing to display.</p>
            ))}
        </main>
        <Go_up_btn />
      </div>
    </>
  );
}

export default BlogIndex;
