import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accardion/Accardion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accardion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledReting";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";
import {UnControlledInput} from "./components/Input/UncontrolledInput";
import {ControlledInput} from "./components/Input/Input";
import {ControlledCheckbox} from "./components/Checkbox/ControlledCheckbox";
import {ControlledSelect} from "./components/Select/ControlledSelect";
import {MySelect} from "./components/Select/MySelect";
import { UseMemoHelpToReactMemo} from "./components/UseMemo/UseMemo";
import {ReactMemo} from "./components/UseMemo/ReactMemo";


export function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed , setCollapsed] = useState<boolean>(true)
    let [switchOn, SetSwitchOn] = useState<boolean>(false)
    const [valueInput, setValueInput] = useState<string>('')
    const [valueCheckbox, setValueCheckbox] = useState<boolean>(true)
    const [valueSelect, setValueSelect] = useState<string | undefined>('2')

    return (
        <div className = 'App'>
            {/*<Rating value={ratingValue} callBack={setRatingValue}/>*/}
            {/*<UnControlledRating/>*/}
            {/*<Accordion  titleValue="User" collapsed={collapsed} callBack={setCollapsed}/>*/}
            {/*<UnControlledAccordion  titleValue="Меню" />*/}
            {/*<OnOff status={switchOn} callback={SetSwitchOn}/>{switchOn.toString()}*/}
            {/*<UnControlledOnOff callback={SetSwitchOn}/>{switchOn.toString()}*/}
           {/* <UnControlledInput />*/}
           {/* <ControlledInput value={valueInput} callback={setValueInput}/>*/}
           {/* <ControlledCheckbox value={valueCheckbox} callback={setValueCheckbox} />*/}
           {/* <ControlledSelect value={valueSelect} callback={setValueSelect}/>*/}
           {/* <MySelect />*/}
           {/* <ReactMemo />*/}
            <UseMemoHelpToReactMemo />
        </div>
    );
}

