import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-lg">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 text-white shadow-xl rounded-full"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 text-white shadow-xl rounded-full"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 text-white shadow-xl rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
