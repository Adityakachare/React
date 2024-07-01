import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10);

  //let counter = 5;

  const addValue = () => {
    //console.log("Value Added!", Math.random());
    //counter++;
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log("Clicked", counter);
  };

  const removeValue = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }

    console.log("Value decreased: ", counter);
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
