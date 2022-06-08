import React, {useState} from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    callBack: (value: boolean) => void
}
let items = ['Eugeniy', 'Sasha', 'Dima', 'Anton', 'Igor']

export const Accordion = (props: AccordionType) => {
    console.log("Accordion")
    const accordionHandler = () => {
        props.collapsed ? props.callBack(false): props.callBack(true)
    }
    const callbackHandler = (name: string) => {
        alert(`"be Happy ${name} "`)
    }
    return (<div>
        <AccordionTitle title={props.titleValue} callBack={accordionHandler }/>
        {props.collapsed && <AccordionBody items={items} callback={callbackHandler}/>}
    </div>)

}

type AccordionTitleType = {
    title: string
    callBack: () => void
}
export const AccordionTitle = (props: AccordionTitleType) => {

    return (<div>
        <h3 onClick={props.callBack}>{props.title}</h3>
    </div>)

}

type AccordionBody = {
    items: string[]
    callback: (name: string) => void
}
export const AccordionBody = (props: AccordionBody) => {

    return (<ul>
        {props.items.map( (el, i) => {
            return <li key={i} onClick={() =>{props.callback(el)}} >{el}</li>
        })}
    </ul>)

}



