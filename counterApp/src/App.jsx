//counter app with max value 20 and min value 0.

import { useState } from 'react'
import './App.css'

function App() {
  //creating a variable to count
  let [counter,setCounter] = useState(0);
  // let counter = 15;

  //to increase the count value
  const addValue = ()=>{
    // counter+=1;
    if(counter<20){
    setCounter(counter+1);
    console.log("clicked",counter);
    }
  }

  //to decrease the count value
  const removeValue = ()=>{
    // counter+=1;
    if(counter>0){
    setCounter(counter-1);
    console.log("clicked",counter);
    }
  }
  
  //jsx to display elements on the page
  return (
    <div id="main">
      <h1>React Project 1</h1>
      <h2>Counter: {counter}</h2>
      <button
      onClick={addValue}
      >Incerase Value</button>

      <button
      onClick={removeValue}
      >Decrease Value</button>
    </div>
  )
}

//exporting the file so that we can access in main.jsx
export default App
