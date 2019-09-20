import React from "react"
import ReactDOM from "react-dom"
function MyApp(){
    return(<div><ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ol></ol>
    </div>
    )
  }
  ReactDOM.render(
    <MyApp/>, 
    document.getElementById('searchElement')  
  )
  //https://es.reactjs.org/docs/add-react-to-a-website.html