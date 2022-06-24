import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";


export const Clock = () =>{
    const [date, setDate] = useState<Date>(new Date())

    const twoDigitsClock = (number: number) => number < 10 ? "0" + number.toString() : number.toString()

    useEffect (() =>{

       const intervalId = setInterval(()=>{
           console.log('tick')
            setDate(new Date())
        },1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])

    return <div>
       {/* <DigitalClock date={date}
                      twoDigitsClock={twoDigitsClock} />*/}
        <AnalogClock date={date}
                     twoDigitsClock={twoDigitsClock}/>

    </div>
}
