import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="container">
      <h1 id="counter">{contador}</h1>
      <button id="add" onClick={() => setContador(contador + 1)}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
