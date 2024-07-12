import React from 'react'
import { useState } from 'react';
import Btn from './components/Btn';


function App() {
  const [color, setColor] = useState("olive")
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
    <div className=" w-full h-screen " style={{ backgroundColor: color }}>
      <div className="text-center  pt-20">
       <h1 className='text-5xl font-semibold pb-10'>Counter Project using UseState</h1>
       <h2 className='text-2xl font-medium pb-6 text-[#50d71e]'>Counter Value : {counter} </h2>
       <button className="addValue font-medium mb-4 bg-yellow-500 rounded-full p-3 px-8"onClick={addValue}>Add Value </button> <br></br>
      <button className="removeValue font-medium mb-4 text-black bg-yellow-500 rounded-full p-3 px-8" onClick={removeValue}> Remove Value </button>
      <h5 className='text-md font-medium'>Click on add button to increase the counter value and click on remove button to decrease the counter value</h5>
      </div>
    <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 mx-80 px-5 py-3 rounded-3xl gap-5 " style={{ backgroundColor: "white" }}>

      {/* <button className=" px-10 py-2 rounded-full text-white" style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>Brown </button>
       */}

      <Btn color="Brown" content="Brown" setColor={setColor} />
      <Btn color="green" content="Green" setColor={setColor} />
      <Btn color="Red" content="Red" setColor={setColor} />
      <Btn color="Olive" content="Olive" setColor={setColor} />
      <Btn color="Blue" content="Blue" setColor={setColor} />
    </div>
  </div>
   
  )
}

export default App
