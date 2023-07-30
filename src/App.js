import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Result, ListCategories, NavbarComponents } from './components/Index';


function App() {
  return (
    <div className="App">
       <NavbarComponents/>
      <div className='mt-4'>
      <Container fluid>
       <Row>
        <ListCategories/>
        <Col>
        <h4><strong>Daftar Product</strong></h4>
        <hr/>
        </Col>
        <Result/>
       </Row>
       </Container>
      </div>
    </div>
  );
}

export default App;
