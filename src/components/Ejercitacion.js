import { useState } from "react";

const App = () => {

    const [color, setColor] = useState('pink');

    function click() {
      setColor((prevColor) => {
        return (prevColor === 'pink' ? 'red' : 'pink')
      });
    }

    return (
      <div>
        <p
          title="párrafo principal"
          style={{ backgroundColor: color, padding: "10%" }}
        >
          Curso de React ADA
        </p>
        <button onClick={() => click()}>Cambiar color</button>
      </div>
    );
}

export default App;