import React, {useState,useEffect} from "react"
import "./ViewProduct.css"
import axios from "axios";
import styled from "styled-components";
import img695 from './img695.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';





const ViewProduct = () => {

    const [products, setProducts] = useState([]);
    const [updatedPost, setUpdatedPost] = useState({
        id: "",
        ProductID: "",
        Title: "",
        Price:"",
        Image:"",
        Rating: "",
      });


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    useEffect(() => {
        axios
          .get("http://35.77.96.6:3001/viewProduct")
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
          .delete(`http://35.77.96.6:3001/delete/${id}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    
        window.location.reload();
      };

     
      const updatePost = (id,ProductID,Title,Price,Image,Rating) => {
        setUpdatedPost((prev) => {
          return {
            ...prev,
            id: id,
            ProductID: ProductID,
            Title: Title,
            Price: Price,
            Image:Image,
            Rating: Rating,
            
          };
        });
        handleShow();
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPost((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

      const saveUpdatedPost = () => {
        console.log(updatedPost);
    
        axios
          .put(`http://35.77.96.6:3001/update/${updatedPost.id}`, updatedPost)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    
        handleClose();
        window.location.reload();
      };
      

    return (
       


        <>
      <div data-testid = "view">
        <br></br>
        <br></br>
       
        <h1><b>    Product List</b></h1>
        
        
        <br></br>
        

        <img src={img695} alt="Logo" />
        
        
        <Main>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control
            placeholder="ProductID"
            name="ProductID"
            value={updatedPost.ProductID ? updatedPost.ProductID : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
        <Form.Control
            placeholder="Title"
            name="Title"
            value={updatedPost.Title ? updatedPost.Title : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

        <Form.Control
            placeholder="Price"
            name="Price"
            value={updatedPost.Price? updatedPost.Price : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
           <Form.Control
            placeholder="Image"
            name="Image"
            value={updatedPost.Image? updatedPost.Image : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

            <Form.Control
            placeholder="Rating"
            name="Rating"
            value={updatedPost.Rating? updatedPost.Rating : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       
        

            
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
                <Button variant="outline-secondary" size="lg"   onClick={() =>
                      updatePost(products._id, products.ProductID, products.Title, products.Price,products.Image,products.Rating)
                    }>Update</Button>
                <Button variant="dark"size="lg" onClick={() => deletePost(products._id)}>Delete</Button>
                </div>
                </Card.Body>
              </Card>
           
            ))
            }
            
        </Main>
        </div></>
       
   

       
          
        

)
    
  }

 

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  
  grid-auto-rows: 600px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 40px;
 
  @media only screen and (min-width: 1024px) and (max-width: 1680px) {
    margin-top: 100px;
    padding: 10px 0px;
  }
`;

export default ViewProduct