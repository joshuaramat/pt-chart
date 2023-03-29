import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Hero.css';

function Hero({ onLocationSelect }) {
  return (
    <Container className='Hero'>
      <Row>
        <Col>
          <h1>Patient Volume Visualizer</h1>
          <p>
            With just a few clicks, you can access valuable data for both Fremont and Dublin locations. Say goodbye to the hassle of manual scheduling and hello to easy, data-driven decisions. We're excited to offer this tool to streamline our internal processes and help our team work more efficiently. So go ahead and dive in, the data is waiting for you!
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 3 }}>
          <Form.Group controlId='formClinicSelect'>
            <Form.Label><h2>Active Clinic</h2></Form.Label>
            <Form.Control as='select' onChange={(event) => onLocationSelect(event.target.value)}>
              <option value="" disabled selected>Please choose a clinic</option>
              <option value="Fremont">Fremont</option>
              <option value="Dublin">Dublin</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
