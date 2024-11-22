import React from 'react';
import { NameLabel, LastnameLabel, GenderLabel, EmailLabel, CityLabel, DescriptionLabel } from './labels/Labels';
import { NameInput, LastnameInput, EmailInput, DescriptionTextArea } from './inputs/Inputs';
import { CheckSelectInput, GenderRadioSelect, CityListSelect } from './selects/Selects';
import SendButton from './buttons/SendButton';


export default function Form() {
    return (
        <form>
            <NameLabel/>
            <NameInput/><br/>

            <LastnameLabel/>
            <LastnameInput/><br/>
            
            <GenderLabel/>
            <GenderRadioSelect/><br/>

            <EmailLabel/>
            <EmailInput/><br/>
            
            <CityLabel/>
            <CityListSelect/><br/>
            
            <DescriptionLabel/>
            <DescriptionTextArea/><br/>

            <CheckSelectInput/><br/>

            <SendButton/>
        </form>
    );
}