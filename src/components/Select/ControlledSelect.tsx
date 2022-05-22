import React, {ChangeEvent} from "react";

export type ControlledSelectType = {
    value: string | undefined
    callback: (value: string | undefined) => void
}

export const ControlledSelect = (props: ControlledSelectType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) =>{
        props.callback(e.currentTarget.value)

    }
return <><select value={props.value} onChange={onChangeHandler}>
    <option>none</option>
    <option value="1">Minsk</option>
    <option value="2">MG</option>
    <option value="3">Rechica</option>
    <option value="4">Grodno</option>
</select> - actual value:{props.value}</>
}
