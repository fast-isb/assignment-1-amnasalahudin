import React, {useState} from "react"
import "./AddProduct.css"
import axios from "axios";
import pic from './20943855.jpg'
import { useHistory } from "react-router-dom"



const AddProduct = () => {

  const history = useHistory()

  const [user,setUser] = useState(
    {
      ProductID: "",
      Title:"",
      Price:"",
      Image: "",
      Rating: "",
  })

  const handleChange= e =>
   {
    const {name,value } = e.target
    setUser({
              ...user,
               [name]:value
      })
  }

  const createProduct = () => 
  {
    const { ProductID, Title, Price,Image,Rating} = user
    if( ProductID && Title && Price && Image && Rating)
    {
        axios.post("http://localhost:3001/createProduct", user)
        .then( res => {
         alert(res.data.message)
         history.push("/")
        })
    } 
    else 
    {
        alert("Enter all fields!")
    }
    
}

    return (
       
        <div class="parent clearfix">
        <div class="bg-illustration1">
      

      <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
    
    <div class="add">
      <div className="container">
     
        <h1>Add Product</h1>
        
    
         <div className="login-form">

        
          <input type="text" name="ProductID" value={user.ProductID}  onChange={ handleChange } placeholder="Product ID"></input>
            <input type="text" name="Title" value={user.Title}  onChange={ handleChange } placeholder="Title"></input>
            <input type="number" name="Price" value={user.Price}  onChange={ handleChange } placeholder="Price"></input>
            <input type="text" name="Image" value={user.Image}  onChange={ handleChange } placeholder="Image URL"></input>
            <input type="number" name="Rating" value={user.Rating}  onChange={ handleChange } placeholder="Rating"></input>
            
          
            <button type="submit" onClick={createProduct}>Add Product</button>
            
          
            
            

         
        </div>
    
      </div>
      </div>
  </div>
    
)
    
  }

export default AddProduct