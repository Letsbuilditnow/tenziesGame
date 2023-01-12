import React from "react";

export default function Die(props){
    // console.log(props)
    
    const styles={
        backgroundColor:props.isHold?"#59E391":"white"
    }
    return(
        <>
            <button style={styles} onClick={props.holdIt}><span>{props.value}</span></button>
            
        </>
    )
}