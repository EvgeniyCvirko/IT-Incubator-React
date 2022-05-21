import React, { useState} from "react";

type RatingType = {
    value: 1|2|3|4|5
}

export const Rating = (props:RatingType) => {
    return (<div>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>
    </div>)

}

type StarProps = {
    selected : boolean
}


const Star = (props: StarProps) =>{
        if(props.selected ){
            return <span> <b>star </b></span>
        }else
    return <span> star </span>
}

