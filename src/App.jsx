// 
import React from 'react'
import './App.css'
import Die from './Die'
// 

function App() {
const [dice,setDice]=React.useState(createDice())


function createDice(){
  let arr=[];
  for(let i=0;i<10;i++){
   arr.push(Math.ceil(Math.random()*6)) 
  }
  return arr;
}


  
  const dieElements = dice.map(die=>{
     return <Die value={die}/>
  })

  return (
    <div className="App">
    <main className='Main'>
    <div className="container">
            {dieElements}
        </div>
       
      
     

          <button className='roll'>ROLL</button>
        
    </main>
    </div>
  )
}

export default App
