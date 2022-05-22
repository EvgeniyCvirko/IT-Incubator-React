import React, {useState} from "react";
import {ItemsType} from "../MySelect";

type SelfSelectType = {
    items: ItemsType[]
    title: string
    collapsed: boolean
    callBack: (event: boolean) => void
}

type SelfSelectTitleType = {
    title: string
    checkedName: string
    callback: () => void
}
type SelfSelectBodyType = {
    item: ItemsType[]
    callback: (name: string) => void
}

export const SelfSelect = (props: SelfSelectType) => {
    const [checkedName, setCheckedName] = useState<string>('')

    const clickName = (name: string) =>{
        setCheckedName(name)
        props.callBack(false)
    }

    return (
        <div>
            <SelfSelectTitle title={props.title} callback={()=>props.callBack(true)} checkedName={checkedName} />
            {props.collapsed && < SelfSelectBody item={props.items} callback={clickName} /> }
        </div>
    )
}

export const SelfSelectTitle = (props: SelfSelectTitleType) => {
    const onClickHandler =() => {
        props.callback()
    }
    return (
        <h3 onClick={onClickHandler}>{props.title}: {props.checkedName} </h3>
    )
}

export const SelfSelectBody = (props: SelfSelectBodyType) => {

    return (
        <ul>
            {props.item.map((el, i) => {
                return <li key={i} onClick={()=> props.callback(el.name)} >{el.name}</li>
            })}
        </ul>
    )
}
