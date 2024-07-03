import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10);

  //let counter = 5;

  const addValue = () => {
    //console.log("Value Added!", Math.random());
    //counter++;
    // if (counter < 20) {
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    // }
    // In React, state updates using the useState hook are batched together for performance reasons. When you call setCounter multiple times in a single function, React schedules these updates to be processed together, but it doesn't immediately apply each update. This means the intermediate values of counter are not updated until the entire function has finished executing.

    //To correctly increment the counter multiple times, you can use a functional update:
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
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
