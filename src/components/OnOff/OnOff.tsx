import React, { useState} from "react";

type OnOffType = {
}

export const OnOff = (props:OnOffType) => {
    let [on, SetOn] = useState<boolean>(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onHandler = () =>{
       SetOn(true)
    }
    const offHandler = () =>{
       SetOn(false)
    }

    return (<div>
        <div style={onStyle} onClick={onHandler}> On </div>
        <div style={offStyle}  onClick={offHandler}> Off </div>
        <div style={indicatorStyle}> </div>
    </div>)

}

