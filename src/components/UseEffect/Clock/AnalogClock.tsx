import React, {useEffect, useState} from "react";
import s from './AnalogClock.module.css'

type DigitalClockPropsType = {
    date: Date
    twoDigitsClock: (num: number) => string
}

export const AnalogClock: React.FC<DigitalClockPropsType> = ({twoDigitsClock,date}) =>{
    const deg = 6;
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;
    console.log(date.getHours())
    const hr = {
        transform: `rotateZ(${(hh) + (mm/12)}deg)`
    };

    const mn = {
        transform: `rotateZ(${mm}deg)`
    };
    const sc = {
        transform: `rotateZ(${ss}deg)`
    };


    return <div>
        <div className={s.clock}>
            <div className={s.hour}>
                <div className={s.hr} style={hr}> </div>
            </div>
            <div className={s.min}>
                <div className={s.mn} style={mn}> </div>
            </div>
            <div className={s.sec}>
                <div className={s.sc} style={sc}> </div>
            </div>
        </div>
    </div>
}
