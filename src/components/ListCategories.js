import React, { Component } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import axios from 'axios'; 
import { API_URL } from '../utils/constants'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils,faCoffee, faCheese } from '@fortawesome/free-solid-svg-icons';


const Icon = ({nama}) => {
  if(nama === "Makanan") return  <FontAwesomeIcon icon={faUtensils} className='mr-2' />
  if(nama === "Minuman") return  <FontAwesomeIcon icon={faCoffee} className='mr-2' />
  if(nama === "Cemilan") return  <FontAwesomeIcon icon={faCheese} className='mr-2' />

  return  <FontAwesomeIcon icon={faUtensils} className='mr-2' />

}
class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then(res => {
        const categories = res.data; 
        this.setState({ categories });
      })
      .catch(error => {
        console.log("Terjadi error: ", error);
      });
  }

  render() {
    const { categories } = this.state;
    const {changeCategory, categoriYangDipilih} =  this.props
    // console.log(this.state.categories);
    return (
      <Col md={2} mt={2}>
        <h4><strong>Daftar Category</strong></h4>
        <hr />
        <ListGroup>
        {categories && categories.map((category) => (
            <ListGroup.Item key={category.id} onClick={() => changeCategory(category.nama)}
            className={categoriYangDipilih === category.nama &&  "category-aktif"}
            style={{cursor: "pointer"}}
            >
             <h5> 
              <Icon nama={category.nama}/>{category.nama}</h5>
            </ListGroup.Item>
          ))}
    </ListGroup>
      </Col>
    );
  }
  // eslint-disable-next-line
}

export default ListCategories;
