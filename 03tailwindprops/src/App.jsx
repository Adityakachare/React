import "./App.css";
import Card from "./components/Card";

function App() {
  // let obj = {
  //   username: "Aditya",
  //   age: 21,
  // };
  // let newArray = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Test </h1>

      <Card name="Aditya" btext="Click me" />
      <Card name="Aryan"/>
    </>
  );
}

export default App;
