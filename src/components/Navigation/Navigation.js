import React from 'react';
import { Navbar, Form } from 'react-bootstrap';
import './navigation.css';

function Navigation({ onLocationSelect, activeLocation }) {
  return (
    <Navbar className='Navbar' bg='light' variant='light'>
      <div className='logo-container'>
        <img src="logo.png" alt='logo' className='mr-2 logo-img' />
        {activeLocation && <Navbar.Brand className='brand-text'>ClinicFlow</Navbar.Brand>}
      </div>
      {activeLocation &&
        <Form.Group controlId='formClinicSelect'>
          <Form.Control as='select' value={activeLocation} onChange={(event) => onLocationSelect(event.target.value)}>
            <option value="" disabled selected>Active Clinic</option>
            <option value="Fremont">Fremont</option>
            <option value="Dublin">Dublin</option>
          </Form.Control>
        </Form.Group>}
    </Navbar>
  );
}

export default Navigation;
