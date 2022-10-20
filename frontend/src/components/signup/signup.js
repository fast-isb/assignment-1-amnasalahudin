import React, {useState} from "react"
import "./signup.css"
import axios from "axios";
import pic from './pic.png'





const Signup = () => {
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
     
        <h1>Pharmacy Register</h1>
        
    
         <div className="login-form">

          <form action="">
          <input type="fullname" name="fullname"  placeholder="Full Name"></input>
            <input type="email" name="email"  placeholder="E-mail Address"></input>
            <input type="password" name="password"  placeholder="Password"></input>
            
          
            <button type="submit" >REGISTER</button>
            <br></br>
            <b>OR</b>
            <button type="submit" >LOG IN</button>
          
            
            

          </form>
        </div>
    
      </div>
      </div>
  </div>
    
)
    }

export default Signup