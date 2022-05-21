import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accardion/Accardion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accardion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledReting";


export function App() {

    return (
        <div className = 'App'>
           {/* <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />*/}
            {/*<Accordion  titleValue="Меню" collapsed={false}/>
            <Accordion  titleValue="Меню" collapsed={false}/>*/}
            <UnControlledRating/>
            <UnControlledAccordion  titleValue="Меню" />
            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}

