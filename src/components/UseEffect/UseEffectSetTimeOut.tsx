import React, {useEffect, useState} from "react";


export const UseEffectSetTimeOut = () =>{
    console.log('UseEffectSetTimeOut')
    const [fake, setFake] = useState <number>(0)
    const [counter, setCounter] = useState <number> (0)

   /* useEffect (() =>{
        setTimeout(()=>{
            console.log('SetTimeout')
            document.title = counter.toString()
        },2000)

    },[counter])*/

    useEffect (() =>{

        setInterval(()=>{
            console.log('SetInterval')
            setCounter(state => state + 1)
        },5000)

    },[])

    return <div>
        {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>{counter}*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>{fake}*/}
        {counter}
    </div>
}
