import React, { useEffect, useState } from 'react';
import './App.css';

export default function useeffect () {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])

  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  useEffect(() => {
    console.log('ComponentDidMount')
  }, [])

  return (
    <div>
      <h1>Resouce: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>ToDo</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}