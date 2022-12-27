import './App.css';
import { useState } from "react";

 
function App() {

  const [count, setCount] = useState(0);

  function lessclick() {
    setCount((prevCount) => {
      if (prevCount === 0) return 0;
      if (prevCount >= 20) return prevCount - 3;
      if (prevCount >= 10) return prevCount - 2;
   
      else return  prevCount - 1;
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