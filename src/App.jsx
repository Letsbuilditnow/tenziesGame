// 
import React from 'react'
import './App.css'
import Die from './Die'
// 

function App() {

   
  let arr=[1,2,3,4]
  const dieElements = arr.map(die=>{
     return <Die/>
  })

  return (
    <div className="App">
    <main className='Main'>
    <div className="container">
            {dieElements}
          
        </div>
    </main>
    </div>
  )
}

export default App
