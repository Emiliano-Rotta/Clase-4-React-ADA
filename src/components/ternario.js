import './App.css';
import { useState } from "react";

 
function App() {

  const [count, setCount] = useState(0);

  function lessclick() {
    setCount((prevCount) => {
      return prevCount ? prevCount - 1 : 0;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        <button onClick={() => lessclick()}>-</button>
      </header>
    </div>
  );
}


export default App;