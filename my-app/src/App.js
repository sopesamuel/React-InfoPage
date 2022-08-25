import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import Main from "./Component/Main"
import Navbar from "./Component/Navbar"


export default function App() {
  return (
    <div className="container">
      <nav className="nav">
      <Navbar />
      </nav>
      <Main />
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById("root"))



