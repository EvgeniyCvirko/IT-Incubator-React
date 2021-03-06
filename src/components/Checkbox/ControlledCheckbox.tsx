import React, {ChangeEvent} from "react";

export type ControlledInputType = {
    value: boolean
    callback: (value: boolean) => void
}

export const ControlledCheckboxMemo = (props: ControlledInputType) => {
    console.log('Checkbox')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.callback(e.currentTarget.checked)
    }
return <div>
    <input type='checkbox' checked={props.value} onChange={onChangeHandler}/> - actual value:{props.value.toString()}
</div>
}
