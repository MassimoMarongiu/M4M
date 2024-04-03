import React from "react";
import "./Buttons/btn_neon.css";
import { Link } from "react-router-dom";
import "./nav_blog.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import "./nav_blog.css";
import { Dropdown } from "react-bootstrap";
function Navblog({ sort }) {
  const { search, setSearch } = useContext(DataContext);

  const sortByDateAscend = () => {
    sort("sortByDateAsc");
  };
  const sortByDateDescend = () => {
    sort("sortByDateDesc");
  };
  const sortAZ = () => {
    sort("sortByTitleAZ");
  };
  const sortZA = () => {
    sort("sortByTitleZA");
  };

  return (
    <div className="navblog">
      <div className="article">
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="glowing-btn">
              Articoli
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "black"  }}>
              <Dropdown.Item>
                <Link to="/BlogIndex" className="glowing-btn">
                  Articoli
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/NewPost" className="glowing-btn">
                  Crea
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="glowing-btn">
              Filtri
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "black" }}>
              <Dropdown.Item onClick={sortByDateAscend}>
                Data piu recenti
              </Dropdown.Item>
              <Dropdown.Item onClick={sortByDateDescend}>
                Data meno recenti
              </Dropdown.Item>
              <Dropdown.Item onClick={sortAZ}>Nome a-z</Dropdown.Item>
              <Dropdown.Item onClick={sortZA}>Nome z-a</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      
      <div className="searchBlog">
        <form className="searchBlogForm">
          <input
            id="search"
            type="text"
            placeholder="Scrivi qui..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="glowing-btn"
            type="submit"
            onClick={(e) => setSearch(e.target.value)}
          >
            Cerca
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navblog;
