import React, {useMemo, useState} from "react";

export const DifficultCounter = () =>{
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1;
    let resultB = 1
     resultA = useMemo(() =>{
        let tempResultA = 1
        for(let i = 1; i<=a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        } return tempResultA
        },[a])


     for(let j = 1; j<=b; j++){
        resultB = resultB * j;
    }

    return<>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result a :{resultA}
        </div>
        <div>
            Result b :{resultB}
        </div>
    </>
}

const usersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(usersSecret)

export const UseMemoHelpToReactMemo = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Sasha', 'Dima', 'Igor'])

    const newArray = useMemo(() => {
       const newArray =  users.filter(u=> u.toLowerCase().indexOf('a') > -1);
        return newArray
    },[users]
)

    const addUser = () => {
        const newUser = [...users, 'Slava' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>addUsers</button>{counter}
        <Users users={newArray}/>
    </>

}
