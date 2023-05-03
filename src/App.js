import './App.css';
import { useState } from 'react';

export default function App() {
  const App = () => {
    const [hex, setHex] = useState('#ffffff');
    const generatedHex = () => {
      const randomColor = '#' + Math.floor(Math.random());
      setHex(randomColor);
    };
    return (
      <div className="App">
        <p>{hex}</p>
        <button onClick={generatedHex}>Generate</button>
      </div>
    );
  };
}
