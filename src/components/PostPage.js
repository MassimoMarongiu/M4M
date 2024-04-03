import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import api from "../api/posts";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Navblog from "./Navblog";
import "./postPage.css";

function PostPage() {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate(`/blogIndex`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      navigate("/SomethingWrong");
    }
  };

  const stylePost = {
    backgroundColor: "rgb(41, 38, 38)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  return (
    <div className="postPage" style={stylePost}>
      <Navblog />
      <main>
        <article className="postPageArticle">
          {post && (
            <div className="postPageDiv">
              <div className="title_date">
                <h2 className="postTitle">{post.title}</h2>
              </div>
              <div>
                <img className="postImg" src={post.imageUrl} alt="" />
              </div>
              <div className="postBodydiv">
                <p className="postBody">{post.body}</p>
                <p className="postDate">{post.datetime}</p>
              </div>
              <div className="modifica_elimina_btn">
                <Link to={`/edit/${post.id}`}>
                 
                 {/* <button className="editButton">Modifica</button> */}
                 <button class="editButton editButton--gooey">
                 Modifica
                  <div class="editButton__blobs">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                      ></feGaussianBlur>
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo"
                      ></feColorMatrix>
                      <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                  </defs>
                </svg>
                </Link>
                <button class="deleteButton deleteButton--gooey">
                 Elimina
                  <div class="deleteButton__blobs">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                      ></feGaussianBlur>
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo"
                      ></feColorMatrix>
                      <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          )}
          {!post && (
            <>
              <h2>Articolo non trovato</h2>
              <p>
                <Link to="/BlogIndex">Visita la nostra Homepage</Link>
              </p>
            </>
          )}
        </article>
      </main>
    </div>
  );
}

export default PostPage;
