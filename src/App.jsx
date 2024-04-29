import { useState } from 'react'
import './App.css'

function App() {
const [counter, setcounter] = useState(0)


const addValue = () =>{
  setcounter(counter + 1);
}
const removeValue = () => {
  setcounter(counter - 1);
}
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      <button className='button'
      onClick={addValue}
      >Add value</button>
      <br></br>
     <button className='button'
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
