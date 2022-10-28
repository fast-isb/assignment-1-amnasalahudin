import React, {useState,useEffect} from "react"
import "./ViewProduct.css"
import axios from "axios";
import { useHistory } from "react-router-dom"
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ViewProduct.css"




const Card1 = ({key,prodid,title,price,image,rating}) => {

    
  const styles = {
    
    
    cardImage: {
      objectFit: 'cover',
      height: '250px'

    }
  }

  
  
    return (
       
      <Card  style={{ width: '18rem'}} >
      <Card.Img variant="top"  src={image} style={styles.cardImage}/>
      <Card.Body>
       <b> <Card.Title>{title}</Card.Title></b>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Product Id: {prodid}</ListGroup.Item>
        <ListGroup.Item>Price: Rs. {price}</ListGroup.Item>
        <ListGroup.Item>Rating: {rating} stars</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <div className="d-grid gap-2" >
      <Button variant="outline-secondary" size="lg">Update</Button>
      <Button variant="dark"size="lg" >Delete</Button>
      </div>
      </Card.Body>
    </Card>
       
   

         
          
        

)
    
  }

 

export default Card1