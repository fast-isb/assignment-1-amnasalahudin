import React, {useState,useEffect} from "react"
import "./ViewProduct.css"
import axios from "axios";
import styled from "styled-components";
import Card1 from "./Card1";
import img695 from './img695.jpg'





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
  

      

    return (
       


        <>
      
        <br></br>
        <br></br>
        <h1><b>View Product</b></h1><Main>
       
  
            
            {products.map((products) => (
                <Card1
                    key={products._id}
                    
                    prodid={products.ProductID}
                    title={products.Title}
                    price={products.Price}
                    image={products.Image}
                    rating={products.Rating} />
            ))}
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