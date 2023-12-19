import { useState } from 'react'
import './App.css'


function App() {

  let [counter , setcounter] = useState(0);
  
  const increase = () => {
    if(counter >= 0 && counter < 20){
      setcounter(counter+1);
    }
  }
  
  const decrease = () => {
    if(counter > 0 && counter <= 20){
      setcounter(counter-1);
    }
  }

  return (
    <>
     <h1>Counter is {counter}</h1>
     <button onClick={increase}>+</button>
     <br />
     <button onClick={decrease}>-</button>
     <h2>Counter :- {counter}</h2>
    </>
  )
}

export default App
