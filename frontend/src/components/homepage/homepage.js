import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
        <h1>Homepage</h1>
        <button type="submit"  onClick={() => setLoginUser({})}>LOG OUT</button>
        </div>
    )
}

export default Homepage