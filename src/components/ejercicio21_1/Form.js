import React from 'react';
import MyLabel from './label/Label';
import MyInput from './inputs/Inputs';
import MySelect from './selects/Select';
import MyButton from './buttons/Buttons';


export default function Form() {
    return (
        <form>
            <MyLabel tag={"label"} text={"Nombre:"}/>
            <MyInput tag="input" placeholder="Introduce nombre"/><br/>

            <MyLabel tag="label" text="Apellidos:"/>
            <MyInput tag="input" placeholder="Introduce apellidos"/><br/>
            
            <MyLabel tag="label" text="Sexo:"/>
            <MySelect type="radio"/><br/>

            <MyLabel tag="label" text="Email:"/>
            <MyInput tag="email" placeholder="Introduce email"/><br/>
            
            <MyLabel tag="label" text="Población:"/>
            <MySelect type="select"/><br/>
            
            <MyLabel tag="label" text="Descripción:"/>
            <MyInput tag="textarea" placeholder="Descripción"/><br/>

            <MyButton text="Enviar"/>
        </form>
    );
}