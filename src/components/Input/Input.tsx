import React, {ChangeEvent} from "react";

export type ControlledCheckboxType = {
    value: string
    callback: (text: string) => void
}

export const ControlledInput = (props: ControlledCheckboxType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.callback(e.currentTarget.value)
    }
return <div>
    <input value={props.value} onChange={onChangeHandler}/> - actual value:{props.value}
</div>
}
