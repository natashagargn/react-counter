import React, { useState } from 'react';
import Btn from './components/Btn';

function App() {
  const [color, setColor] = useState("olive");
  const [counter, setCounter] = useState(4);

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log("counter", { counter });
  }

  function removeValue() {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="text-center pt-10 md:pt-20 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold pb-10">Counter Project using UseState</h1>
        <h2 className="text-xl md:text-2xl font-medium pb-6 text-[#50d71e]">Counter Value : {counter} </h2>
        <button
          className="addValue font-medium mb-4 bg-yellow-500 rounded-full p-3 px-8"
          onClick={addValue}
        >
          Add Value
        </button> <br />
        <button
          className="removeValue font-medium mb-4 text-black bg-yellow-500 rounded-full p-3 px-8"
          onClick={removeValue}
        >
          Remove Value
        </button>
        <h5 className="text-md font-medium">
          Click on add button to increase the counter value and click on remove button to decrease the counter value
        </h5>
      </div>
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 mx-auto px-5 py-3 rounded-3xl gap-2 md:gap-5"
        style={{ backgroundColor: "white", maxWidth: "80%" }}
      >
        <Btn color="Brown" content="Brown" setColor={setColor} />
        <Btn color="green" content="Green" setColor={setColor} />
        <Btn color="Red" content="Red" setColor={setColor} />
        <Btn color="Olive" content="Olive" setColor={setColor} />
        <Btn color="Blue" content="Blue" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
