import React from "react";

export default function Die(props){
    // console.log(props)
    
    const styles={
        backgroundColor:props.isHOld?"blue":"white"
    }
    return(
        <div className="container">
            <button style={styles}>{props.value}</button>
            
        </div>
    )
}