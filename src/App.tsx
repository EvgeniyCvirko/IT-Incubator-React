import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accardion/Accardion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accardion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledReting";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";


export function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed , setCollapsed] = useState<boolean>(true)
    let [switchOn, SetSwitchOn] = useState<boolean>(false)

    return (
        <div className = 'App'>
            {/*<Rating value={ratingValue} callBack={setRatingValue}/>*/}
            <Accordion  titleValue="Меню" collapsed={collapsed} callBack={setCollapsed}/>
            {/*<UnControlledRating/>*/}
            <UnControlledAccordion  titleValue="Меню" />
            {/*<OnOff status={switchOn} callback={SetSwitchOn}/>*/}
            <UnControlledOnOff callback={SetSwitchOn}/>{switchOn.toString()}
        </div>
    );
}

