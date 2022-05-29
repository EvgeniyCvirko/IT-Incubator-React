import React, {useMemo, useState} from "react";


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const usersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(usersSecret)

export const ReactMemo = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Sasha', 'Dima', 'Igor'])
    const addUser = () => {
        const newUser = [...users, 'Slava' + new Date().getTime()]
        setUsers(newUser)
    }
    users.push('Slava' + new Date().getTime())
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>addUsers</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>

}
