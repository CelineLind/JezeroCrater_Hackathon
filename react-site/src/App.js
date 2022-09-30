import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  }

  let decrementCount = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}

export default App;
