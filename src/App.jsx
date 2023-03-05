import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ marginTop: "35px" }}
      >
        Click Me!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Its a Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>The worlds future rests in your hands</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Trigger the Nukes!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
