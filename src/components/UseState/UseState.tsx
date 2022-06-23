import React, {useState} from "react";

const generationData = () => {
    console.log('generation')
    return 2586
}


export const UseStateExample1 = () =>{
    console.log('Example1')
   // let abc = generationData()
    // const [counter, setCounter] = useState <number> (abc)
    const [counter, setCounter] = useState <number> (generationData)

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}</div>
}

export const UseStateExample2 = () =>{
    console.log('Example1')
    // let abc = generationData()
    // const [counter, setCounter] = useState <number> (abc)
    const [counter, setCounter] = useState <number> (generationData)
    const changer = (state:number) => {
        return state + 2
    }
    return <div>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}</div>
}
