import React from "react"

export default function Main(props){
    return(
        <main className={props.darkMode ? "dark" : ""}>
        <div className="main">
            <h1 className="main-title">Fun facts about React</h1>
<ul className="main-list">
<li>Was first released in 2013</li>
<li>Was originally created by jordan Walke</li>
<li>Has well over 100k stars on GitHub</li>
<li>Is maintained by Facebook</li>
<li>Powers thousands of enterprise apps, including mobile apps</li>
</ul>

        </div>
</main>
    )
}