import React, { useState} from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props:AccordionType) => {
if(props.collapsed){
    return (<div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>)
}else

    return (<div>
        <AccordionTitle title={props.titleValue}/>
        {/*<AccordionBody/>*/}
    </div>)

}

 type AccordionTitleType ={
    title: string
 }
export const AccordionTitle = (props:AccordionTitleType) => {

    return (<div>
        <h3>{props.title}</h3>
    </div>)

}

type AccordionBody ={
}
export const AccordionBody = (props:AccordionBody) => {

    return (<div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>)

}



