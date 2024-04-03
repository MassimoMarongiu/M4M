import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./Term_and_conditions_modals.css";
const Term_and_conditions_modals = ({ handleClose }) => {
  return (
    <Modal
      className="modal_term_conditions"
      show={true}
      onHide={handleClose}
      style={{
        marginTop: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Modal.Header closeButton className="modal_term_conditions_header">
        <Modal.Title className="modalTitle">Abbiamo a cuore la tua privacy</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal_term_conditions_body">
        <p className="pmodal">
          Archiviamo e/o accediamo alle informazioni su un dispositivo (come i
          cookie) e trattiamo i dati personali (come gli identificatori univoci,
          email e altri dati del dispositivo) per annunci e contenuti
          personalizzati, misurazione di annunci e contenuti, approfondimenti
          sul pubblico e sviluppo del prodotto. Con il tuo consenso, possiamo
          utilizzare dati di geolocalizzazione e identificazione precisi
          attraverso la scansione del dispositivo.{" "}
          <a className="amodal" href="https://www.movingup.it/informativa-trattamento-dati-personali">
            Informativa sulla Privacy
          </a>
          &nbsp;
          <a  className="amodal"href="https://www.movingup.it/informativa-sui-cookie?showConsent=no">
            Informativa sui Cookie
          </a>
        </p>
        <div className="accettaRifiutaButton">
          <Button
            // variant="primary"
            onClick={handleClose}
            style={{ marginLeft: "150px" }}
          >
            Accetta
          </Button>
          <Button
            // variant="secondary"
            onClick={handleClose}
            style={{ marginLeft: "20px" }}
          >
            Rifiuta
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Term_and_conditions_modals;
