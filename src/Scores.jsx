import React from 'react';

export default function Scores(props){
    return (
        <>
        <div className='Scores Main'>

            Your Score: {props.Scores}
            <br />
            High Score: {props.highScore}
        </div>
        
        
        </>
    )
}