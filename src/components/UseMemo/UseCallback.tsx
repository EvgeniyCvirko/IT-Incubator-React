import React, {useCallback, useMemo, useState} from "react";





export const BookCallBack = () => {
    console.log('BookCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Redux', 'Css', 'HTML'])


    const addBook = useCallback( () => {
            console.log(books)
        const newBook = [...books, 'Slava' + new Date().getTime()]
            setBooks(newBook)
    },[books]
    )
    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <Book addBook={addBook}/>
    </>

}

type BookSecretPropsType ={
    addBook : ()=>void
}
const booksSecret = (props:BookSecretPropsType) => {
    console.log("BOOK_SECRET")
    return <div>
        <button onClick={()=> props.addBook()}>addBook</button>
    </div>
}
const Book = React.memo(booksSecret)