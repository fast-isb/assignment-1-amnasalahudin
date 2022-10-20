
import React, {useState} from "react"
import "./login.css"
import pic from './pic.png'

const Login = () => {

    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

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
      <div class="container">
        <h1>Pharmacy Log In</h1>
        
    
         <div class="login-form">
          <form action="">
            <input type="email" name="email" value={user.name} onChange={handleChange} placeholder="E-mail Address"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password"></input>
            
            <button type="submit">LOG IN</button>
            

          </form>
        </div>
    
      </div>
      </div>
  </div>
    
)
    }

export default Login