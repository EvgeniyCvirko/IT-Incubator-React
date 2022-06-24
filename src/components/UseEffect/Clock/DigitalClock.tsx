import React, {useEffect, useState} from "react";

type DigitalClockPropsType = {
    date: Date
    twoDigitsClock: (num: number) => string

}

export const DigitalClock: React.FC<DigitalClockPropsType> = ({date,twoDigitsClock}) =>{

    const seconds = twoDigitsClock(date.getSeconds())
    const minutes = twoDigitsClock(date.getMinutes())
    const hour = twoDigitsClock(date.getHours())

    return <div>
        {hour} : {minutes} : {seconds}
    </div>
}
