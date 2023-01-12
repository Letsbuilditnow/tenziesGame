//
import React from "react";
import "./App.css";
import Die from "./Die";
import { v4 as uuid } from "uuid";
//

function App() {
  //Setup a state to store the value of the dice.
  const [dice, setDice] = React.useState(createDice());

  //Create the function to create an object to the dice state
  function createDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        {
          id: uuid(),//Creates A Unique Id
          value: Math.ceil(Math.random() * 6),
          isHold: true,
        },
      );
    }
    return arr;
  }
  function holdIt(id){
    setDice(prevDice=>{

      return prevDice.map(die=>{
        return die.id===id?{...die,isHold:!die.isHold}:die
      })
    }

    )
  }

  // console.log(dice)
  //Create the function to change the values everytime the roll button is clicked
  function diceRoll() {
    setDice(createDice());
  }
  //Map through the values of the dice state and pass the value as props to the single component
  const dieElements = dice.map((die) => {
    console.log(die);
    return <Die value={die.value} isHold={die.isHold} holdIt={()=>{holdIt(die.id)}} />;
  });

  return (
    <div className="App">
      <main className="Main">
        <div className="container">{dieElements}</div>

        <button className="roll" onClick={diceRoll}>
          ROLL
        </button>
      </main>
    </div>
  );
}

export default App;
