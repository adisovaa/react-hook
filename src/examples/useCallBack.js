import React, {useState} from 'react'
import ItemsList from '../ItemsList'

function UseCallBackJS() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'red' : 'pink'
  }

  // const generateItemsFromAPI = () => {
  //   return new Array(count).fill('').map((_, i) => `element ${i + 1}`)
  // }

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `element ${i + 1}`)
  }, [count])

  return (
    <>
     <h1 style={styles}>Elements Count {count}</h1>
     <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>add</button>
     <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>change</button>

     <ItemsList getItems={generateItemsFromAPI}/>
    </>
  )
}

export default UseCallBackJS