import React from "react";

export default function Die(props){
    // console.log(props)
    
    const styles={
        backgroundColor:props.isHold?"blue":"white"
    }
    return(
        <div className="container">
            <button style={styles} onClick={props.holdIt}><span>{props.value}</span></button>
            
        </div>
    )
}