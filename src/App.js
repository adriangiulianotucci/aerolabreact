import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader
} from 'reactstrap';
import imgPanel from './header-x2.png'

function App() {
  return (
    <Card>
        <CardHeader>Header</CardHeader>
        <CardImg top width="100%" src={imgPanel} alt="Card image cap" />
        <CardBody>
          <Product> </Product>
        </CardBody>
      </Card>
  );
}

export default App;
