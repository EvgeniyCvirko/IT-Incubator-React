import React, {useEffect, useState} from "react";


export const UseEffectSimple = () =>{
    console.log('Simple')
    const [fake, setFake] = useState <number>(0)
    const [counter, setCounter] = useState <number> (0)

    useEffect (() =>{
        console.log('render always')
    })
    useEffect (() =>{
        console.log('render only the first time')
    },[])
    useEffect (() =>{
        console.log('render only counter change')
    },[counter])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>{counter}
        <button onClick={() => setFake(fake + 1)}>+</button>{fake}

    </div>
}
