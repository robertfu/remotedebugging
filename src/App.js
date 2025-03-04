import { useState } from 'react';
import './App.css';


function App() {
  const [ value, setValue ] = useState(0)
  function increase(){
    setValue(prev => prev + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
         You have clicked { value } time(s)
        </p>
        <button
          onClick={increase}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
