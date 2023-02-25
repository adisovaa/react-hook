import React, { useEffect, useState, useRef, useMemo} from 'react'
import './App.css'

function complexCompute(num) {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

export default function memoJS() {
  const [number, setNumber] = useState(23)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <>
      <h1 style={styles}>Count value: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>delete</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>change</button>
    </>
  )
}