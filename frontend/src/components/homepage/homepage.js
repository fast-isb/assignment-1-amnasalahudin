import React from "react"
import "./homepage.css"
import axios from "axios";
import { useHistory } from "react-router-dom"

const Homepage = ({setLoginUser}) => {


    const history = useHistory();

    return (
        <div className="homepage">
        <h1>Homepage</h1>
        <button type="submit"  onClick={() => history.push("/createProduct")}>ADD PRODUCT</button>
        <button type="submit"  onClick={() => setLoginUser({})}>LOG OUT</button>
      
        </div>
    )
}

export default Homepage