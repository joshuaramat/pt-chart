import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import './navigation.css';

function Navigation({ onLocationSelect, activeLocation }) {
  return (
    <Navbar className='Navbar' bg='light' variant='light'>
      <div>
        <img src="logo.png" alt='logo' className='mr-2' />
        {/* <Navbar.Brand>Visualizer</Navbar.Brand> */}
      </div>
      <Nav className='mr-auto'></Nav>
      <Form.Group controlId='formClinicSelect'>
        <Form.Control as='select' value={activeLocation} onChange={(event) => onLocationSelect(event.target.value)}>
          <option value="" disabled selected>Active Clinic</option>
          <option value="Fremont">Fremont</option>
          <option value="Dublin">Dublin</option>
        </Form.Control>
      </Form.Group>
    </Navbar>
  );
}

export default Navigation;
