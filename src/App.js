import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import {Hasil, ListCategories, NavbarComponents } from './components/Index';
// import React, { Component } from 'react'
import { API_URL } from './utils/constants';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus:[],
    }
  }
  
  componentDidMount() {
    axios.
    get(API_URL + "products")
    .then(res => {
      console.log("Response : ", res)
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log("Terjadi error: ", error)
    })
  }

  render() {
    const {menus } = this.state
    // console.log(this.state.menus)
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
        <Row>
          {menus && menus.map ((menu)=> {
            <h2>{menu.nama}</h2>
          })} 
        </Row>
        </Col>
        <Hasil/>
       </Row>
       </Container>
      </div>
    </div>
    )
  }
}


