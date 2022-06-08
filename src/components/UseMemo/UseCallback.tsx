import React, {useCallback, useMemo, useState} from "react";





export const BookCallBack = () => {
    console.log('BookCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Redux', 'Css', 'HTML'])


    const addBook = useCallback( () => {
            console.log(books)
        const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
    },[books]
    )
    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <Book addBook={addBook} books={books}/>
    </>

}

type BookSecretPropsType ={
    addBook : ()=>void
    books : string[]
}
const booksSecret = (props:BookSecretPropsType) => {
    console.log("BOOK_SECRET")
    return <div>
        <button onClick={()=> props.addBook()}>addBook</button>
        {props.books.map((book,i) => <div key={i}>{book}</div>) }
    </div>
}
const Book = React.memo(booksSecret)