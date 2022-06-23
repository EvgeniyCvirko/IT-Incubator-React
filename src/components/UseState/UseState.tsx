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

