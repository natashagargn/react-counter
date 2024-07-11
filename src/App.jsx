import React from 'react'
import { useState } from 'react';
import './App.css'
function App() {
  const [counter,setCounter] = useState(4);
  function addValue(){
    if(counter < 20){

      setCounter(counter + 1); //increased by 1
    }
    // setCounter(counter + 1); increased by 1
    // setCounter(counter + 1); increased by 1 three of the above updating the same no so  ouput will be increased by 1 only not 3
    // setCounter(counter => counter + 1); 3
    // setCounter(counter => counter + 1); 6
    // setCounter(counter => counter + 1); 9
    console.log("counter", {counter})
  }
  function removeValue(){
    if(counter >= 1){
      setCounter(counter - 1);
    }
  }
  return (
    <div>
      <h1>Counter Project using UseState</h1>
      <h2>Counter Value : {counter} </h2>
      <button className="addValue"onClick={addValue}>Add Value </button> <br></br>
      <button className="removeValue" onClick={removeValue}> Remove Value </button>
      <h5>Click on add button to increase the counter value and click on remove button to decrease the counter value</h5>
    </div>
  )
}

export default App
