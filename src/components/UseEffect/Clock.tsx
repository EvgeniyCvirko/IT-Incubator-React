import React, {useEffect, useState} from "react";


export const Clock = () =>{
    const [date, setDate] = useState<Date>(new Date())

    const twoDigitsClock = (number: number) => number < 10 ? "0" + number : number

    useEffect (() =>{

       const intervalId = setInterval(()=>{
           console.log('tick')
            setDate(new Date())
        },1000)
        return () => {
           debugger
            clearInterval(intervalId)
        }
    },[])

    const seconds = twoDigitsClock(date.getSeconds())
    const minutes = twoDigitsClock(date.getMinutes())
    const hour = twoDigitsClock(date.getHours())

    return <div>
        {hour} : {minutes} : {seconds}
    </div>
}
