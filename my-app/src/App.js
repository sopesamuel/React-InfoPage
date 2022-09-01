import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import Main from "./Component/Main"
import Navbar from "./Component/Navbar"


export default function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="container">
      {/* <nav className="nav"> */}
      <Navbar 
      darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
        <Main 
        darkMode={darkMode}
      />
      {/* </nav> */}
    
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById("root"))



