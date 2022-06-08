import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accardion/Accardion";
import {OnOff} from "./components/OnOff/OnOff";
import { UnControlledAccordionMemo} from "./components/Accardion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledReting";
import {OnOffMemo} from "./components/OnOff/UnControlledOnOff";
import { UnControlledInputMemo} from "./components/Input/UncontrolledInput";
import {ControlledInput} from "./components/Input/Input";
import {ControlledCheckboxMemo} from "./components/Checkbox/ControlledCheckbox";
import {ControlledSelect} from "./components/Select/ControlledSelect";
import {MySelect} from "./components/Select/MySelect";
import { UseMemoHelpToReactMemo} from "./components/UseMemo/UseMemo";
import {ReactMemo} from "./components/UseMemo/ReactMemo";
import {BookCallBack} from "./components/UseMemo/UseCallback";


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
            {/*<UnControlledOnOff />{switchOn.toString()}*/}
            <UnControlledInput />
            <ControlledInput value={valueInput} callback={setValueInput}/>
           {/* <ControlledCheckbox value={valueCheckbox} callback={setValueCheckbox} />*/}
           {/* <ControlledSelect value={valueSelect} callback={setValueSelect}/>*/}
           {/* <MySelect />*/}
           {/* <ReactMemo />*/}
           {/* <UseMemoHelpToReactMemo />*/}
           {/* <BookCallBack />*/}
        </div>
    );
}

 const UnControlledOnOff = React.memo(OnOffMemo)
 const UnControlledAccordion = React.memo(UnControlledAccordionMemo)
 const ControlledCheckbox = React.memo(ControlledCheckboxMemo)
 const UnControlledInput = React.memo(UnControlledInputMemo)
