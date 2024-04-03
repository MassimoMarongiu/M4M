import React, { useState } from "react";
import Btn_neon from "./Buttons/Btn_neon";
import "./nav.css";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

function NavBar() {
  const [mostraDrop, setMostraDrop] = useState(false);
  const [mostraSearch, setMostraSearch] = useState(false);

  const handleClickDrop = () => {
    setMostraDrop(!mostraDrop);
  };
  const leftfocusDrop = () => {
    setMostraDrop(!mostraDrop);
  };
  const handleClickSearch = () => {
    setMostraSearch(!mostraSearch);
  };
  const leftfocusSearch = () => {
    setMostraSearch(!mostraSearch);
  };

  return (
    <div>
      <Navbar expand="lg" id="nav">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbutton"
          />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-between"> {/* 1. Aggiungi la classe justify-content-between */}
              <Nav.Link className="navbutton" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                M4M
              </Nav.Link>
              {/* <Nav.Link className="navbutton" href="/strumentiMusicali">
                Strumenti musicali
              </Nav.Link> */}
              <Nav.Link className="navbutton" href="/BlogIndex">
              Strumenti musicali
              </Nav.Link>
              {/* <Nav.Link className="navbutton" href="/fileUpload">
                fileupload
              </Nav.Link> */}
              {/* <Nav.Link className="navbutton" href="/ImageSlider">
            ImageSlider
            </Nav.Link> */}
             
              {/* <NavDropdown
                title="Search"
                id="seach_bar_btn"
                className="navbutton"
                show={mostraSearch}
                onMouseEnter={handleClickSearch}
                onMouseLeave={leftfocusSearch}
                style={{ lineHeight: "0" }}
              >
                <Form
                  inline
                  className="drop"
                  style={{ width: "400px", marginLeft: "-100px" }}
                >
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Cerca..."
                        className=" mr-sm-2"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit" className="navbutton">
                        Cerca
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </NavDropdown> */}
              {/* {loginState==="logreg" &&   */}
              <Nav.Link className="navbutton ml-auto " href="/contatti">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                Contatti
              </Nav.Link>
              <Nav.Link className="navbutton ml-auto " href="/loginRegisterLogout" id="loginRegBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                Login/Register
              </Nav.Link>
              <NavDropdown
                title="Admin"
                id="basic-nav-dropdown"
                className="navbutton"
                show={mostraDrop}
                onMouseEnter={handleClickDrop}
                onMouseLeave={leftfocusDrop}
                style={{ lineHeight: "0" }}
              >
                <div className="drop" id="droplink">
                  <NavDropdown.Item
                    className="custom-dropdown-item"
                    href="/messageIndex"
                  >
                    Messaggi
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="custom-dropdown-item"
                    href="#action/3.2"
                  >
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="custom-dropdown-item"
                    href="#action/3.3"
                  >
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className="custom-dropdown-item"
                    href="#action/3.4"
                  >
                    Separated link
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
             
              {/* } */}
              {/* {loginState === "logoutState" && (
                <Nav.Link className="navbutton" href="/loginRegisterLogout">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-fill-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                  </svg>
                  Logout
                </Nav.Link>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
