import React, {ChangeEvent, useState} from "react";
import {SelfSelect} from "./SelfSelect/SelfSelect";
import {v1} from "uuid";

export type ItemsType ={
    id: string,
    name: string
}

export const MySelect = () => {

    const items :ItemsType[] = [
        {id: v1(), name: 'Lena'},
        {id: v1(), name: 'Manay'},
        {id: v1(), name: 'Natasha'},
        {id: v1(), name: 'Anay'},
    ]
    const [collapsed , setCollapsed] = useState<boolean>(false)

    return (<div>
        <SelfSelect items={items}  title='Friends' collapsed={collapsed} callBack={setCollapsed}/>
    </div>)
}
