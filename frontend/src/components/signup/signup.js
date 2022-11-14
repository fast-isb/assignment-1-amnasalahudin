import React, {useState} from "react"
import "./signup.css"
import axios from "axios";


import { useHistory } from "react-router-dom"



const Signup = () => {

  const history = useHistory()

  const [user,setUser] = useState(
    {
      name: "",
      email:"",
      password:"",
  })

  const handleChange= e =>
   {
    const {name,value } = e.target
    setUser({
              ...user,
               [name]:value
      })
  }

  const register = () => 
  {
    const { name, email, password} = user
    if( name && email && password)
    {
        axios.post("http://localhost:3001/register", user)
        .then( res => {
         alert(res.data.message)
         history.push("/login")
        })
    } 
    else 
    {
        alert("Enter all fields!")
    }
    
}

    return (
       
        <div class="parent clearfix" data-testid = "signup">
        <div class="bg-illustration">
      

      <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
    
    <div class="login">
      <div className="container">
     
        <h1>Vendor Register</h1>
        
    
         <div className="login-form">

        
          <input type="name" name="name" value={user.name}  onChange={ handleChange } placeholder="Vendor Name"></input>
            <input type="email" name="email" value={user.email}  onChange={ handleChange } placeholder="E-mail Address"></input>
            <input type="password" name="password" value={user.password}  onChange={ handleChange } placeholder="Password"></input>
            
          
            <button type="submit" onClick={register}>REGISTER</button>
            <br></br>
            <b>OR</b>
            <button type="submit" onClick={() => history.push("/login")} >LOG IN</button>
          
            
            

         
        </div>
    
      </div>
      </div>
  </div>
    
)
    
  }

export default Signup