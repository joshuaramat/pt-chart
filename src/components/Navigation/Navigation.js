import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import './navigation.css';

function Navigation({ onLocationSelect }) {
  return (
    <Navbar className='Navbar' bg='light' variant='light'>
      <Navbar.Brand>PT Visualizer</Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      <Form.Group controlId='formClinicSelect'>
        <Form.Control as='select' onChange={(event) => onLocationSelect(event.target.value)}>
          <option value="" disabled selected>Active Clinic</option>
          <option value="Fremont">Fremont</option>
          <option value="Dublin">Dublin</option>
        </Form.Control>
      </Form.Group>
    </Navbar>
  );
}

export default Navigation;
