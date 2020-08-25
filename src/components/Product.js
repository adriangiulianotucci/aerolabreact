import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, Spinner, Row, Col
} from 'reactstrap';

const url = "https://coding-challenge-api.aerolab.co/products"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZhMzk5OTc1NzJiODAwNmRlNzUzMTUiLCJpYXQiOjE1OTM0NTcwNDl9.A94xfvXPzaSLyGxl1NIQ7hxl3WiER2y3EDxXabxOOFg"

const request = { method: 'GET',
               headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization":"Bearer " + token
              },
               mode: 'cors',
               cache: 'default' };


function Product() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function req() {
      const response = await fetch(url,request)
      const json = await response.json()
      setProducts(json)
    }
    req()
  },[]);


  if (!products) {
    return (
      <Spinner type="grow" color="primary" />
    );
  }

  return (
    <Row>
      {products.map((elem)=> <Col xs="12" sm="3" key={elem._id}><Card>{elem.name}</Card></Col>)}
    </Row>
  ) 
}

export default Product;
