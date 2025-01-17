import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/posts";
import DataContext from "../context/DataContext";
import Navblog from "./Navblog";
import "./newPost.css";

function NewPost() {
  const { posts, setPosts } = useContext(DataContext);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? parseInt(posts[posts.length - 1].id) + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    // const newPost = { id, title: postTitle, datetime,selectedFile, body: postBody };
    try {
      // const formData = FormData();
      // formData.append("id", id);
      // formData.append("title", postTitle);
      // formData.append("body", postBody);
      // formData.append("datetime", datetime);
      // formData.append("file", selectedFile);
      // const fileResponse = await api.post("/upload", formData);
      // const imageUrl = fileResponse.data.url;
      // const response = await api.post("/posts", { ...newPost, imageUrl });

      const response = await api.post("/posts", newPost );
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate(`/post/${id}`);
      // navigate("/BlogIndex");
    } catch (err) {
      console.log(`Error: ${err.message}`);
      navigate("/SomethingWrong");
    }
  };


  return (
    <div className="mainNewPost">
      <Navblog />
      <main>
        <div className="writeArtTitle">
          <h2>Scrivi nuovo articolo</h2>
        </div>
        <div>
          <form className="newPostForm" onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor="postTitle">Titolo:</label>
                <br></br>
                <input
                  id="postTitle"
                  type="text"
                  required
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
              </li>
              <li>

                {/* {!selectedFile && (
                  <div>
                    <label htmlFor="postTitle">Inserisci immagine:</label>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      accept=".jpg"
                    />
                  </div>
                )}
                {selectedFile && (
                  <img
                    id="preview"
                    src={URL.createObjectURL(selectedFile)}
                    alt="Preview"
                  />
                )} */}
                {/* <img id="preview" src="" alt="Preview" /> */}
              </li>
              <li>
                <label htmlFor="postBody">Corpo articolo:</label>
                <br></br>
                <textarea
                  id="postBody"
                  required
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                />
                <br></br>
                <button className="cssbuttons-io" type="submit">
                  Salva
                </button>
              </li>
            </ul>
          </form>
        </div>
      </main>
    </div>
  );
}

export default NewPost;
