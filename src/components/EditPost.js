import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/posts";
import { format } from "date-fns";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import "./editPost.css"
import Navblog from "./Navblog";
function EditPost() {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate(`/post/${id}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main className="editPost">
      <Navblog />
      {editTitle && (
        <>
          <h2>Modifica l'articolo </h2>
          <form className="editForm" onSubmit={(e) => e.preventDefault()}>
            <ul>
              <li>
                <label htmlFor="editTitle">Titolo:</label>
                <br></br>
                <input
                  id="editTitle"
                  type="text"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="editTextTitle">Inserisci immagine:</label>
                <input type="button" value={"Cerca"} />
              </li>
              <li>
                <label htmlFor="editBody">Corpo articolo:</label>
                <br></br>
                <textarea
                  id="editBody"
                  required
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                />
                <br></br>
                <button className="cssbuttons-io" type="submit" onClick={() => handleEdit(post.id)}>
                  Salva
                </button>
              </li>
            </ul>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/BlogIndex">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
}

export default EditPost;
