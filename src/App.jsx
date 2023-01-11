// 
import React from 'react'
import './App.css'
import Die from './Die'
import {v4 as uuid} from 'uuid'
// 

function App() {
const [dice,setDice]=React.useState(createDice())


function createDice(){
  let arr=[];
  for(let i=0;i<10;i++){
   arr.push([

   {

     id:uuid(),
     value: Math.ceil(Math.random()*6),
     isHOld:true
    }
    ]
  ) 
  }
  return arr;
}
// console.log(dice)
function diceRoll(){
  setDice(createDice())
}


  
  const dieElements = dice.map(die=>{
    console.log(die)
     return <Die value={die[0].value} isHOld={die[0].isHOld}/>
  })

  return (
    <div className="App">
    <main className='Main'>
    <div className="container">
            {dieElements}
        </div>
       
      
     

          <button className='roll' onClick={diceRoll}>ROLL</button>
        
    </main>
    </div>
  )
}

export default App
