import React, {useState} from "react";

type RatingType = {}

export const UnControlledRating = (props: RatingType) => {
     const [value, setValue] = useState(0)
    return (<div>
        <button onClick={()=>{setValue(0)}}>x</button>
        <Star selected={value > 0} callBack={()=>{setValue(1)}}/>
        <Star selected={value > 1} callBack={()=>{setValue(2)}}/>
        <Star selected={value > 2} callBack={()=>{setValue(3)}}/>
        <Star selected={value > 3} callBack={()=>{setValue(4)}}/>
        <Star selected={value > 4} callBack={()=>{setValue(5)}}/>
    </div>)

}

type StarProps = {
    selected: boolean
    callBack: ()=> void
}


const Star = (props: StarProps) => {

    return <span onClick={props.callBack}>{props.selected ? <b> star </b> : <span> star </span>}</span>
}

