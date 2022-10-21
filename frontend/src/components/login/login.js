
import React, {useState} from "react"
import "./login.css"
import axios from "axios";
import pic from './pic.png'
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => 
{

  const history = useHistory()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => 
  {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:3001/login", user)
      .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      history.push("/")
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
      <div className="container">
        <h1>Pharmacy Log In</h1>
        
    
         <div className="login-form">
          
            <input type="email" name="email"  value={user.email} onChange={handleChange} placeholder="E-mail Address"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}placeholder="Password"></input>
            
            <button type="submit" onClick={login}>LOG IN</button>
            <br></br>
            <b>OR</b>
            <button type="submit" onClick={() => history.push("/register")} >REGISTER</button>
                  
        </div>
    
      </div>
      </div>
  </div>
    
)
    }
  

export default Login