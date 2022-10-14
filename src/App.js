import React from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Header titulo="Galeria de imágenes con React"/>
      <Container>
        <Row>
          <Col>
              <Card imagen="https://placedog.net/500" titulo="Prueba descripcion"/>
          </Col>
          <Col>
              <Card imagen="https://placedog.net/501" titulo="Prueba descripcion"/>
          </Col>
        </Row>

        <Row>
          <Col>
              <Card imagen="https://placedog.net/502" titulo="Prueba descripcion"/>
          </Col>
          <Col>
              <Card imagen="https://placedog.net/503" titulo="Prueba descripcion"/>
          </Col>
        </Row>

        <Row>
          <Col>
              <Card imagen="https://placedog.net/504" titulo="Prueba descripcion"/>
          </Col>
          <Col>
              <Card imagen="https://placedog.net/505" titulo="Prueba descripcion"/>
          </Col>
        </Row>

      </Container>
      <Footer />
    </div>
  );
}

export default App;
