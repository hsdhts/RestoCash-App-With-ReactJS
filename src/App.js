import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import {Hasil, ListCategories, Menus, NavbarComponents } from './components/Index';
// import React, { Component } from 'react'
import { API_URL } from './utils/constants';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      menus: [],
      categoriYangDipilih: 'Makanan'
    };
  }
  
  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then(res => {
        // console.log("Response : ", res)
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Terjadi error: ", error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: []
    })

    axios
    .get(API_URL + "products?category.nama=" + value)
    .then(res => {
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log("Terjadi error: ", error);
    });


  }
  
  render() {
    const { menus, categoriYangDipilih} = this.state;
    // console.log(this.state.menus)
    return (
      <div className="App">
       <NavbarComponents/>
      <div className='mt-4'>
      <Container fluid>
       <Row>
        <ListCategories changeCategory= {this.changeCategory} categoriYangDipilih={categoriYangDipilih}/>
        <Col>
        <h4><strong>Daftar Product</strong></h4>
        <hr/>
        <Row>
        {menus && menus.map((menu) => (
       <Menus
      key={menu.id}
       menu={menu}
       />
       ))}
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


