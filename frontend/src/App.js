import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import AddProduct from "./components/AddProduct/AddProduct"


function App() {

  const [user,setLoginUser] = useState({})
  return (
    <div className="App">

      <Router>
      <Switch>

    // if logged in then homepage, otherwise display the login page
      <Route exact path="/">
          {
            user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
          }
      </Route>

          // for log in
      <Route path="/login">
           <Login setLoginUser={setLoginUser}/>
      </Route>

          // for sign up page
      <Route path="/register">
      <Signup />
      </Route>

      <Route path="/createProduct">
      <AddProduct />
      </Route>


    </Switch>
    </Router>
    </div>
  );
}

export default App;