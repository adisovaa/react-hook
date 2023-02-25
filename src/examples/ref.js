import React, { useEffect, useState, useRef } from 'react'
import './App.css'

export default function RefJS() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('typing')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    renderCount.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Render count{renderCount.current}</h1>
      <h2>Last render count{prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button className='btn btn-success' onClick={focus}>focus</button>
    </div>
  )
}