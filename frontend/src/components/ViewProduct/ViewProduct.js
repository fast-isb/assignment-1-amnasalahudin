import React, {useState,useEffect} from "react"
import "./ViewProduct.css"
import axios from "axios";
import styled from "styled-components";
import Card1 from "./Card1";
import img695 from './img695.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'




const ViewProduct = () => {

    const [products, setProducts] = useState([]);
  

    useEffect(() => {
        axios
          .get("http://localhost:3001/viewProduct")
          .then((res) => {
            console.log(res);
            setProducts(res.data);
          })
          .catch((err) => console.log(err));
      }, []);
  
      const styles = {
    
    
        cardImage: {
          objectFit: 'cover',
          height: '250px'
    
        }
      }
    
      const deletePost = (id) => {
        console.log(id);
    
        axios
          .delete(`http://localhost:3001/delete/${id}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    
        window.location.reload();
      };
      

    return (
       


        <>
      
        <br></br>
        <br></br>
        <h1><b>View Product</b></h1><Main>
       
        

            
            {products.map((products) => (

                
               
                <Card  key={products._id} style={{ width: '18rem'}}  >

                <Card.Img variant="top"  src={products.Image} style={styles.cardImage}/>
                <Card.Body>
                 <b> <Card.Title >{products.Title}</Card.Title></b>
                 
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Product Id: {products.ProductID}</ListGroup.Item>
                  <ListGroup.Item>Price: Rs. {products.Price}</ListGroup.Item>
                  <ListGroup.Item>Rating: {products.Rating} stars</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <div className="d-grid gap-2" >
                <Button variant="outline-secondary" size="lg">Update</Button>
                <Button variant="dark"size="lg" onClick={() => deletePost(products._id)}>Delete</Button>
                </div>
                </Card.Body>
              </Card>
           
            ))
            }
        </Main></>
       
   

       
          
        

)
    
  }

 

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  
  grid-auto-rows: 350px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 40px;
 
  @media only screen and (min-width: 1024px) and (max-width: 1680px) {
    margin-top: 200px;
    padding: 10px 0px;
  }
`;

export default ViewProduct