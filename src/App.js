import { useState } from "react";
import "./App.css";
import ShadeInput from "./components/ShadeInput";
import Shades from "./components/Shades";

function App() {
  const [color, setColor] = useState("#000");

  const onInputChange = (value) => {
    setColor(value);
  };
  return (
    <div className="App">
      <ShadeInput color={color} onInputChange={onInputChange} />
      <Shades color={color} />
    </div>
  );
}

export default App;
