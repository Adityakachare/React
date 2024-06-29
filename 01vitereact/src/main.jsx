import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <a href="https://google.com">Visit Google</a>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google!",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Google Link
//   </a>
// );

// const reactElement = React.createElement(
//   "p",
//   { href: "https://google.com" },
//   "click Here"
// );
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
