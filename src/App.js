import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState(randomColor);
  const generatedHex = () => {
    setHex(randomColor);
  };
  return (
    <div className="App">
      <div style={{ background: hex }}>Generated Color: {hex}</div>
      <button onClick={generatedHex}>Generate</button>
    </div>
  );
}
