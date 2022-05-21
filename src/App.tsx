import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accardion/Accardion";


export function App() {

    return (
        <div className = 'App'>
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
            <Accordion  titleValue="Меню" collapsed={false}/>
            <Accordion  titleValue="Друзья" collapsed={true}/>
        </div>
    );
}

