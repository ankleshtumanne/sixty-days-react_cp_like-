import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  return (
    <>
      <h1>
        count: {count}
      </h1>
      <button onClick={decrement} disabled={count===0} >decrement</button>
      <button onClick={increment}>increment</button>
    
    </>
  )
}

export default App;
