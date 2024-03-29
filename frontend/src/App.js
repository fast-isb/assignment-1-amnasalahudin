import './App.css'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import AddProduct from "./components/AddProduct/AddProduct"
import ViewProduct from "./components/ViewProduct/ViewProduct"



function App() {

  const [user,setLoginUser] = useState({})
  return (
    <div className="App" data-testid = "comp">
      
      <Router>
      <Switch>

    
      <Route exact path="/">
          {
            user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
          }
      </Route>

          
      <Route path="/login">
           <Login setLoginUser={setLoginUser}/>
      </Route>

          
      <Route path="/register">
      <Signup />
      </Route>

         
      <Route path="/createProduct">
      <AddProduct />
      </Route>

      <Route path="/viewProduct">
      <ViewProduct />
      </Route>


    </Switch>
    </Router>
    </div>
  );
}

export default App;