import React, {useEffect, useState} from "react";


export const UseEffectSimple = () =>{
    console.log('Simple')
    const [fake, setFake] = useState <number>(0)
    const [counter, setCounter] = useState <number> (0)

    useEffect (() =>{
        console.log('render always')
        // document.title = counter.toString()
    })
    useEffect (() =>{
        console.log('render only the first time')
        document.title = counter.toString()
    },[])
    useEffect (() =>{
        console.log('render only counter change')
        document.title = counter.toString()
    },[counter])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>{counter}
        <button onClick={() => setFake(fake + 1)}>fake +</button>{fake}

    </div>
}
