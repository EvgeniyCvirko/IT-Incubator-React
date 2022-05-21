import React, { useState} from "react";

export type RatingValueType =  0|1|2|3|4|5

type RatingType = {
    value: RatingValueType
    callBack: (value:RatingValueType) => void
}

export const Rating = (props:RatingType) => {
    return (<div>
        <button onClick={()=>props.callBack(0)}>x</button>
        <Star selected={props.value > 0} callBack={()=>props.callBack(1)}/>
        <Star selected={props.value > 1} callBack={()=>props.callBack(2)}/>
        <Star selected={props.value > 2} callBack={()=>props.callBack(3)}/>
        <Star selected={props.value > 3} callBack={()=>props.callBack(4)}/>
        <Star selected={props.value > 4} callBack={()=>props.callBack(5)}/>
    </div>)

}

type StarProps = {
    selected : boolean
    callBack: () => void
}


const Star = (props: StarProps) =>{
    return <span onClick={ props.callBack}>{props.selected ? <b> star </b> :  " star "}</span>
}

