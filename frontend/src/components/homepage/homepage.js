import React from "react"
import "./homepage.css"
import axios from "axios";
import { useHistory } from "react-router-dom"

const Homepage = ({setLoginUser}) => {


    const history = useHistory();

    return (
        
        <div class="parent clearfix">
        <div class="bg-illustration">
      

      <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
     </div>
     </div>
         

     <div class="login">
      <div className="container">
        <h1>Homepage</h1>
        
        <div className="login-form">
        <button type="submit"  onClick={() => history.push("/createProduct")}>ADD PRODUCT</button>
        <button type="submit"  onClick={() => history.push("/viewProduct")}>VIEW PRODUCT</button>
        <button type="submit"  onClick={() => history.push("/viewProduct")}>UPDATE PRODUCT</button>
        <button type="submit"  onClick={() => history.push("/viewProduct")}>DELETE PRODUCT</button>
        <button type="submit"  onClick={() => setLoginUser({})}>LOG OUT</button>
      
        </div>
        </div>
        </div>
        </div>
       
    )
}

export default Homepage