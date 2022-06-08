import React  from "react";

export type OnOffType = {
    status: boolean
    callback: (value: boolean) => void
}

export const OnOff = (props:OnOffType) => {
    console.log('OnOf')
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor:props.status ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor:props.status ? "white" : "red"
    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.status ? "green" : "red"
    }

    const onHandler = () =>{
        props.callback(true)
    }
    const offHandler = () =>{
        props.callback(false)
    }

    return (<div>
        <div style={onStyle} onClick={onHandler}> On </div>
        <div style={offStyle}  onClick={offHandler}> Off </div>
        <div style={indicatorStyle}> </div>
    </div>)

}

