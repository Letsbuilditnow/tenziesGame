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
      arr.push([
        {
          id: uuid(),//Creates A Unique Id
          value: Math.ceil(Math.random() * 6),
          isHOld: true,
        },
      ]);
    }
    return arr;
  }
  // console.log(dice)
  //Create the function to change the values everytime the roll button is clicked
  function diceRoll() {
    setDice(createDice());
  }
  //Map through the values of the dice state and pass the value as props to the single component
  const dieElements = dice.map((die) => {
    console.log(die);
    return <Die value={die[0].value} isHOld={die[0].isHOld} />;
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
