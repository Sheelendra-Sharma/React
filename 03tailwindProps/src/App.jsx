import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-500 p-4 rounded-xl text-white font-bold">React</h1>
      <Card productname = "Windows" button = "Visit-me"/>
      <Card productname = "Macbook" button = "Click-me"/>
    </>
  );
}

export default App;
