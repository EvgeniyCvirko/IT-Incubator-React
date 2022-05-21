import React, {useState} from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    callBack: (value: boolean) => void
}

export const Accordion = (props: AccordionType) => {
    const accordionHandler = () => {
        props.collapsed ? props.callBack(false): props.callBack(true)
    }
    return (<div>
        <AccordionTitle title={props.titleValue} callBack={accordionHandler }/>
        {props.collapsed && <AccordionBody/>}
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

type AccordionBody = {}
export const AccordionBody = (props: AccordionBody) => {

    return (<div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>)

}



