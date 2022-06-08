import React, {ChangeEvent} from "react";

export type ControlledCheckboxType = {
    value: string
    callback: (text: string) => void
}

export const ControlledInput = (props: ControlledCheckboxType) => {
    console.log('Control Input')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.callback(e.currentTarget.value)
    }
return <div>
    <input value={props.value} onChange={onChangeHandler}/> - actual value:{props.value}
</div>
}
