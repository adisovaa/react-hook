import React, { useState } from 'react';
import './App.css';

function computeInitianCounter() {
  console.log('smth')
  return Math.trunc(Math.random() * 20)
}

export default function Examples() {
  // const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(computeInitianCounter())
  const [counter, setCounter] = useState(() => {
    return computeInitianCounter()
  })

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)

    setCounter((prevCounter) => {
      return prevCounter + 1
    })
  }

  function decrement() {
    setCounter(counter - 1)
  }

   function updateTitle () {
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
   }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className='btn' onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={updateTitle}>to change title</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
